import { css } from "@emotion/css"
import GenericModalLayout from "./GenericModalLayout"

export default function DonateModal({ setShowDonateModal, ...props }) {

    return <GenericModalLayout closeModal={() => setShowDonateModal(false)} >
        <section className={css`
            display: grid;
            font-size: 0.5em;
            padding-bottom: 1em;
            place-items: center;

            a {
                margin-bottom: 1em;
            }

            a button {
                width: 10em;
            }
        `}>
            <h3 className={css`
                width: 15em; 
                font-size: 1.5em;
                text-align: center;
            `}>
                {'Donate: Help keep this app updated, online, ad-free and tracking-free :)'}
            </h3>

            <div>Buy me supermarket lunch:</div>
            <a target="_blank" rel="noopener noreferrer" href="https://www.paypal.com/donate/?hosted_button_id=S4PWZALBVH6NU">
                <button>5€</button>
            </a>

            <div>Buy me takeout food:</div>
            <a target="_blank" rel="noopener noreferrer" href="https://www.paypal.com/donate/?hosted_button_id=4PZ64Z3RWQSWG">
                <button>10€</button>
            </a>

            <div>Buy me sauna session:</div>
            <a target="_blank" rel="noopener noreferrer" href="https://www.paypal.com/donate/?hosted_button_id=CBDYNDUY9K5AY">
                <button>15€</button>
            </a>

            <h3 className={css`
                width: 15em; 
                font-size: 1em;
                text-align: center;
            `}>
                {"Specify your name in the donation message if you want to be added to this page's footer. (List is updated each patch)"}
            </h3>
        </section>
    </GenericModalLayout>
}