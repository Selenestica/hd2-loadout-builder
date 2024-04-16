import { LoadoutsProvider } from './context/Loadouts'
import LoadoutList from './components/LoadoutList'
import { css } from '@emotion/css'
import { useState } from 'react'
import LoadoutDetails from './components/LoadoutDetails'

export default function App() {
    const [selectedLoadout, setSelectedLoadout] = useState()

    return (
        <LoadoutsProvider >
            <div className={css`
                display: grid;
                grid-template: 80vh / 35em 1fr auto;
                padding: 2em;
                gap: 1em;
             `}>
                <LoadoutList
                    className={css``}
                    setSelectedLoadout={setSelectedLoadout}
                />

                {selectedLoadout &&
                    <LoadoutDetails selectedLoadout={selectedLoadout} />
                }
            </div>
        </LoadoutsProvider>
    )
}