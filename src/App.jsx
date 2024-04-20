import { useContext } from 'react'
import { css } from '@emotion/css'
import LoadoutsContext from './context/Loadouts'
import LoadoutList from './components/LoadoutList'
import LoadoutDetails from './components/LoadoutDetails'

export default function App() {
    const { selectedLoadout } = useContext(LoadoutsContext)
    return (
        <div className={css`
            max-width: 100vw;
            width: 100%;
            display: flex;
            justify-content: center;
        `}>
            <div className={css`
                    display: grid;
                    grid-template: 90vh / 39em 34em 1fr;
                    gap: 1em;
                    max-width: 100%;
                `}>
                <LoadoutList />
                {selectedLoadout && <LoadoutDetails />}
            </div>
        </div>
    )
}

// TO DO:
// add bugs / bots tag
// add prim, sec, grenades and armor calculation into the charts.
// add stacked bar chart for removal

// supply pack / engi armor adding to grenade coverage and limited ammo coverage
// not cumulating multiple support weapons, except eat

// random loadout
// random heavy loadout, light loadout, long / short range etc...
// import / export app data
