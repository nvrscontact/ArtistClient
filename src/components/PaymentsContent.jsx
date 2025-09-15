'use clientt'
import { useSearchParams, useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import {PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';
import { useProduct } from '@/contexts/data/DataContext';
import Image from 'next/image';

function PaymentsContent() {
  
      const searchParams = useSearchParams();
      const router = useRouter();

      const [buyerPaypal, setBuyerPaypal] = useState(null);
      const [buyerStripe, setBuyerStripe] = useState(null);

      const sessionId = searchParams.get('session_id');
      const id = searchParams.get('id');
      const category = searchParams.get('category');

    
        // Stripe Payment
        const handlePago = async () => {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/stripe`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ category, productId: id }), // enviar categoria y id del producto al backend.
        });
    
        const data = await res.json();
        if (data.url) {
          window.location.href = data.url; // al tener la respuesta del backend redirigir a checkout stripe.
        } else {
          alert("Error al crear la sesión de pago");
        }
      };
  

      useEffect(() => {
        if(!sessionId) return; // si no existe la sesión no retornes nada.

          const fetchPayment = async () => { // crea una función que esperara para ejecutarse cuando se tengan los datos
            try {
              const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/session/${sessionId}`); // solicitud al backend para verificar si existió la sesión.
              const data = await res.json(); // espera por la respusta y como sí existio, extraemos sus datos.
              if(data.error) return;

              const validatedPayment = {
                email: data.customer_details.email,
                name: data.customer_details.name,
                address: data.customer_details.address,
                product: data.line_items.data[0].description,
                amount: data.amount_total / 100,
                currency: data.currency.toUpperCase(),
              };

              setBuyerStripe(validatedPayment); // restablecemos la variable con el objeto de datos para llamarlos afuera.

              router.replace(`/Payments?id=${id}&category=${category}`);  // limpiamos la url dejando los datos previos a la transacción.
            } catch (err) {
              console.error('error',err)
            }
          };

        fetchPayment(); // ejecutar la función una vez cambie el sessionId
      }, [sessionId])

      const {selectedProduct} = useProduct(); // usar el producto extraido del contexto.
      if(!selectedProduct) {
        return <p></p>
      }

  return (
     <>
        <div className='mx-10 flex flex-col'>

          <h1 className='text-white/60 text-xs my-10 text-center'>Payments</h1>

          <article className='flex flex-col mb-30 text-white/70'>
            <h1 className='font-bold text-4xl mb-1'>{selectedProduct.name}  </h1>
            <h2 className=' '>Price: {selectedProduct.price} €</h2>
            <Image src={selectedProduct.img} alt='' width='160' height='160' className='my-4'/>
            <p className=''>Includes Midnights Album, autographed by Taylor Swift. </p>
          </article>
    
          <section className='flex flex-col items-center gap-10 '>
            <section>
              <div className='flex flex-col gap-2 items-center' onClick={handlePago}>
                  <button className='flex gap-3 text-[14px] border border-white/30 text-white/70 font-bold py-2 pl-5 pr-4 rounded-md '>
                  Credit / Debit Card
                  <Image src={'/card.svg'} height={20} width={18} alt='' />
                  </button>
                  <span className='flex items-center gap-[6px] text-white/50'>
                    <Image src={'/visa.svg'} alt="" height={20} width={21} />
                    <Image src={'/discover.svg'} alt="" height={30} width={21} />
                    <Image src={'/mastercard.svg'} alt="" height={30} width={21} />
                    <Image src={'/amex.svg'} alt="" height={30} width={21} />
                    <Image src={'/maestro.svg'} alt="" height={30} width={21} />
                  </span>
              </div>
            </section>
    
            <section className='flex flex-col w-40'>
              <span className='text-white/70 text-xs text-center mb-2'>Express Checkout</span>
                <PayPalScriptProvider options={{ "client-id": "sb" }}>
                  <PayPalButtons
                    fundingSource='paypal'
                    style={{ 
                      size:'small',
                      height: 35,
                      color:'gold',
                      label:'paypal' }}
                      
                    createOrder={async () => {
                      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/create-order`, {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({ category, productId: id }),
                      });
                      // justo aquí tenemos la respuesta de la sesión del backend.
                      const data = await response.json();
                      return data.id; // al tener esta id se abre la ventana emergente.
                    }}
    
                    onApprove={async (data) => {
                      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/capture-order`, {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({ orderID: data.orderID }),
                      });
    
                      
                      const details = await response.json();

                      if(!details?.payer){
                        console.warn('payer no disponible')
                      }
                      console.log(details)
                      setBuyerPaypal({
                      name: details?.payer?.name?.given_name || "",
                      surname: details?.payer?.name?.surname || "",
                      amount: details?.purchase_units?.[0]?.payments?.captures?.[0]?.amount?.value || "",
                      currency: details?.purchase_units?.[0]?.payments?.captures?.[0]?.amount?.currency_code || "",
                      email: details?.payer?.email_address || "",
                      country_code: details?.purchase_units?.[0]?.shipping?.address?.country_code || "",
                      postal_code: details?.purchase_units?.[0]?.shipping?.address?.postal_code || "",
                      line_1: details?.purchase_units?.[0]?.shipping?.address?.address_line_1 || "",
                      admin_area_1: details?.purchase_units?.[0]?.shipping?.address?.admin_area_1 || "",
                      admin_area_2: details?.purchase_units?.[0]?.shipping?.address?.admin_area_2 || "",
                      id: details?.id || "",
                      capture_id: details?.purchase_units?.[0]?.payments?.captures?.[0]?.id || "",
                      status: details?.status || "",
                      date: details?.purchase_units?.[0]?.payments?.captures?.[0]?.create_time || "",
                      })

                      router.push(`/Payments?id=${id}&category=${category}`);
                    }}

                    onError={(err) => {
                      console.error('error en paypal', err)
                    }}

                    onCancel={() => {
                      console.log('Pago cancelado')
                    }}
                    
                    />
                </PayPalScriptProvider>
            </section>
    
          </section>
  
            
            {buyerPaypal && (
              <div>
                Paypal Payments:
              <p>Nombre {buyerPaypal.name} </p>
              <p>Apellido {buyerPaypal.surname} </p>
              <p>Monto {buyerPaypal.amount} {buyerPaypal.currency} </p>
              <p>Monto {buyerPaypal.amount} </p>
              <p>Email: {buyerPaypal.email} </p>
              <p> {buyerPaypal.line_1} - {buyerPaypal.admin_area_1} - {buyerPaypal.admin_area_2} - {buyerPaypal.postal_code} - {buyerPaypal.country_code}  </p>
              <p>ID de transacción: {buyerPaypal.id} </p>
              <p>Pago {buyerPaypal.status} </p>
              <p>Fecha {buyerPaypal.date} </p>
              <p>Referencia de la transacción. {buyerPaypal.capture_id} </p>
            </div>
          )}

          {buyerStripe && (
            <div>
              Stripe Payments:
              <p>Name: {buyerStripe.name} </p>
              <p>Prices: {buyerStripe.amount} </p>
            </div>
          )}
    
        </div>
    
    
    
    
        </>
  )
}

export default PaymentsContent