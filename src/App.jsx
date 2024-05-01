import { useContext } from 'react'
import { css } from '@emotion/css'
import LoadoutsContext from './context/Loadouts'
import LoadoutList from './components/LoadoutList'
import LoadoutDetails from './components/LoadoutDetails'
import { Outlet } from 'react-router-dom'

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
                    grid-template: 50vh max-content max-content / 1fr;
                    flex-direction: column;
                    padding: 1em 0.5em 0.5em 0.5em;

                }
            `}>
                <LoadoutList />
                {selectedLoadout && <LoadoutDetails />}

                <div className={css`
                    position: fixed;
                    bottom: 0;
                    left: 2em;
                    opacity: 0.2;
                `}>
                    v1.000.300
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
