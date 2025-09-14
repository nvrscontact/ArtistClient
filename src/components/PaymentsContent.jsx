
import { useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import {PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';
import { useProduct } from '@/contexts/data/DataContext';
import Image from 'next/image';

function PaymentsContent() {
  
      const searchParams = useSearchParams();
      const [buyer, setBuyer] = useState(null);
      const id = searchParams.get('id');
      const category = searchParams.get('category');
      const status = searchParams.get('status');
      const sessionId = searchParams.get('session_id');
    
    
        // Stripe Payment
        const handlePago = async () => {
    
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/stripe`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ category, productId: id }),
        });
    
        const data = await res.json();
        if (data.url) {
          window.location.href = data.url; // Redirige a la pagina de Checkout de Stripe
        } else 
          {
          alert("Error al crear la sesión de pago");
        }
      };
    
        useEffect(() => { // Validar en servidor en stripe el pago.
        if (status === 'success' && sessionId){
          fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/session/${sessionId}`)
    
          .then(res=>res.json())
          .then(data => {
            if(data.error) {
              console.log('pago invalido',data.error);
              return;
            }
            setBuyer({
              email: data.customer_details.email,
              name: data.customer_details.name,
              address: data.customer_details.address,
              product: data.line_items.data[0].description,
              amount: data.amount_total / 100,
              currency: data.currency.toUpperCase(),
            });
          })
        }
      },[status, sessionId]);
    
      // Usamos el objeto que trajimos del contexto y si aún no existe muestra p.
      const {selectedProduct} = useProduct();
      if(!selectedProduct) {
        return <p></p>
      }

  return (
     <>
        <div className='mx-10 mt-20 flex flex-col'>
    
          <article className='flex flex-col mb-30'>
            <h1 className='font-bold text-4xl mb-2'>{selectedProduct.name}  </h1>
            <h2 className='mb-5'>With a cost of: {selectedProduct.price} $</h2>
            <p className='text-white/70'>Includes Midnights Album, autographed by Taylor Swift. </p>
          </article>
    
          <section className='flex flex-col items-center gap-10 '>
    
            <section>
    
              <div className='flex flex-col gap-2 items-center' onClick={handlePago}>
                  <button className='text-[14px] bg-white/70 text-black/70 font-bold py-2 px-4 rounded-md '>
                    Pay with Credit or Debit Card
                  </button>
                  <span className='flex gap-2 text-white/50'>
                    <Image src={'/visa.svg'} alt="" height={30} width={30} />
                    <Image src={'/mastercard.svg'} alt="" height={30} width={30} />
                    <Image src={'/amex.svg'} alt="" height={30} width={30} />
                    <Image src={'/maestro.svg'} alt="" height={30} width={30} />
                  </span>
              </div>
    
              {status === "success" && (
                <div className="p-4 bg-green-600 text-white rounded-lg shadow">
                ✅ Pago realizado con éxito
              </div>
              )}
    
              {status === "cancel" && (
                <div className="p-4 bg-red-600 text-white rounded-lg shadow">
                  ❌ El pago fue cancelado o falló
                </div>
              )}
    
            </section>
    
            <section className='w-40'>
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
                      console.log(details)
                      setBuyer({
                        name: details.payer.name.given_name,
                        surname: details.payer.name.surname,
                        amount: details.purchase_units[0].payments.captures[0].amount.value,
                        currency: details.purchase_units[0].payments.captures[0].amount.currency_code,
                        email: details.payer.email_address,
                        country_code: details.purchase_units[0].shipping.address.country_code,
                        postal_code: details.purchase_units[0].shipping.address.postal_code,
                        line_1: details.purchase_units[0].shipping.address.address_line_1,
                        admin_area_1: details.purchase_units[0].shipping.address.admin_area_1,
                        admin_area_2: details.purchase_units[0].shipping.address.admin_area_2,
                        id: details.id,
                        capture_id: details.purchase_units[0].payments.captures[0].id,
                        status: details.status,
                        date: details.purchase_units[0].payments.captures[0].create_time,
    
                      })
                    }}/>
                </PayPalScriptProvider>
            </section>
    
          </section>
    
            
            {buyer && (
              <div>
              <p>Nombre {buyer.name} </p>
              <p>Apellido {buyer.surname} </p>
              <p>Monto {buyer.amount} {buyer.currency} </p>
              <p>Monto {buyer.amount} </p>
              <p>Email: {buyer.email} </p>
              <p> {buyer.line_1} - {buyer.admin_area_1} - {buyer.admin_area_2} - {buyer.postal_code} - {buyer.country_code}  </p>
              <p>ID de transacción: {buyer.id} </p>
              <p>Pago {buyer.status} </p>
              <p>Fecha {buyer.date} </p>
              <p>Referencia de la transacción. {buyer.capture_id} </p>
            </div>
          )}
    
          </div>
    
    
    
    
        </>
  )
}

export default PaymentsContent