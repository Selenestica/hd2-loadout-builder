import { useContext } from 'react'
import { css } from '@emotion/css'
import LoadoutsContext from './context/Loadouts'
import LoadoutList from './components/LoadoutList'
import LoadoutDetails from './components/LoadoutDetails'
import { Outlet } from 'react-router-dom'
import NameScroller from './components/NameScroller'

export default function App() {
    const { selectedLoadout } = useContext(LoadoutsContext)
    return (
        <>
            <div className={css`
                display: grid;
                grid-template-columns: 1.2fr 1fr 1fr;
                grid-gap: 1em;
                padding: 2em;
                height: 100%;

                @media screen and (max-width: 1400px) {
                    grid-template: 1.2fr 0.8fr / 1fr 1fr;
                }

                @media screen and (max-width: 800px) {
                    height: auto;
                    grid-template: 50vh max-content max-content / 1fr;
                    padding: 1em 0.5em 2em 0.5em;
                    margin-bottom: 1em;
                }
            `}>
                <LoadoutList />
                {selectedLoadout && <LoadoutDetails />}

                <div className={css`
                    position: fixed;
                    bottom: 0;
                    left: 0;
                    padding-left: 2em;
                    display: flex;
                    height: 2em;
                    overflow: hidden;
                    width: 100%;
                    display: grid;
                    grid-template-columns: auto auto auto 1fr;
                    place-items: center;
                    background: rgb(25,25,25);
                    color: rgba(255,255,255,0.2);
                `}>
                    v1.000.302

                    <span className={css`
                        margin-left: 1em;
                        cursor: pointer;
                        text-decoration: underline;
                        white-space: nowrap;

                        &: hover{
                            color: yellow;
                        }
                    `}>Support us by donating!</span>

                    <span className={css`
                        margin-left: 1em;
                        cursor: pointer;
                    `}>
                        Thanks to:&nbsp;
                    </span>

                        <NameScroller />
                    
                    {/* <form action="https://www.paypal.com/donate" method="post" target="_top" className={css`scale: 0.5;`}>
                        <input type="hidden" name="hosted_button_id" value="S4PWZALBVH6NU" />
                        <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
                        <img alt="" border="0" src="https://www.paypal.com/en_BE/i/scr/pixel.gif" width="1" height="1" />
                    </form> */}
                </div>
            </div>
            <Outlet />
        </>
    )
}

// TO DO:
// add bugs / bots tag and filter
// add stacked bar chart for removal
// import / export app data
// add 'lock' to equipment to not randomize
