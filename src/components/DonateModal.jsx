import { css } from "@emotion/css"
import GenericModalLayout from "./GenericModalLayout"
import { useEffect } from 'react';

export default function DonateModal({ setShowDonateModal, ...props }) {

    return <GenericModalLayout closeModal={() => setShowDonateModal(false)} >
        <section className={css`
            display: grid;
            font-size: 0.5em;
            padding-bottom: 1em;
            place-items: center;
        `}>
            <h3 className={css`
                width: 15em; 
                font-size: 1.5em;
                text-align: center;
            `}>
                {'Donate: Help keep this app updated, online, ad-free and tracking-free :)'}
            </h3>

            <div>Buy me supermarket lunch: 5€ </div>
            <PayPalDonateButton buttons={[{
                hostedButtonId: 'S4PWZALBVH6NU',
                imageUrl: 'https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif',
                containerId: 'donate-button-1'
            },]}/>

            <div>Buy me takeout food: 10€</div>
            <PayPalDonateButton buttons={[{
                hostedButtonId: '4PZ64Z3RWQSWG',
                imageUrl: 'https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif',
                containerId: 'donate-button-2'
            },]}/>

            <div>Buy me sauna session: 15€</div>
            <PayPalDonateButton buttons={[{
                hostedButtonId: 'CBDYNDUY9K5AY',
                imageUrl: 'https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif',
                containerId: 'donate-button-3'
            },]}/>
        </section>
    </GenericModalLayout>
}


const PayPalDonateButton = ({ buttons }) => {

    useEffect(() => {
        const scriptId = 'paypal-donation-sdk-' + buttons[0].hostedButtonId
    
        const addPayPalScript = () => {
          if (document.getElementById(scriptId)) {
            // If the script already exists, do not load it again
            return;
          }
          const script = document.createElement('script');
          script.id = scriptId;
          script.src = "https://www.paypalobjects.com/donate/sdk/donate-sdk.js";
          script.charset = "utf-8";
          script.onload = () => {
            renderPayPalButtons(); // Only call render after the script loads
          };
          document.body.appendChild(script);
        };
    
        const renderPayPalButtons = () => {
          buttons.forEach(button => {
            const elementId = `#${button.containerId}`;
            if (document.querySelector(elementId).children.length === 0) {
              // Check if the button has already been rendered in this container
              window.PayPal.Donation.Button({
                env: 'production',
                hosted_button_id: button.hostedButtonId,
                image: {
                  src: button.imageUrl,
                  alt: 'Donate with PayPal button',
                  title: 'PayPal - The safer, easier way to pay online!',
                }
              }).render(elementId);
            }
          });
        };
    
        addPayPalScript();
    
        // Cleanup function to prevent duplication when component re-renders
        return () => {
          const script = document.getElementById(scriptId);
          if (script) {
            script.remove(); // Remove the script when component unmounts or dependencies change
          }
          // Optionally remove the PayPal buttons or make other cleanups
        };
      }, []);

    return (
        <div>
            {buttons.map(button => (
                <div key={button.containerId} id={button.containerId} style={{ marginBottom: '20px' }}></div>
            ))}
        </div>
    )
}