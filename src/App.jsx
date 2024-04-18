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
                grid-template: 90vh / 35em 30em 40em;
                padding: 2em;
                gap: 1em;
             `}>
            <LoadoutList />
            {selectedLoadout && <LoadoutDetails />}
        </div>
    )
}

// TO DO:
// import / export app data
// add images to prim, sec, grenade, armor
// add prim, sec, grenades and armor calculation into the charts.
