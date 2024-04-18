import { useContext } from 'react'
import { css } from '@emotion/css'
import LoadoutsContext from './context/Loadouts'
import LoadoutList from './components/LoadoutList'
import LoadoutDetails from './components/LoadoutDetails'

export default function App() {
    const { selectedLoadout } = useContext(LoadoutsContext)
    return (
        <div className={css`
                display: grid;
                grid-template: 90vh / 39em 34em 40em;
                padding: 2em;
                gap: 1em;
             `}>
            <LoadoutList />
            {selectedLoadout && <LoadoutDetails />}
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
