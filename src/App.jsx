import { LoadoutsProvider } from './context/Loadouts'
import LoadoutList from './components/LoadoutList'
import { css } from '@emotion/css'
import LoadoutDetails from './components/LoadoutDetails'
import { loadLoadouts } from './data/indexedDB'
import { useState, useEffect } from 'react'


export default function App() {
    const [selectedLoadout, setSelectedLoadout] = useState()

    const [loadouts, setLoadouts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        loadLoadouts().then(result => {
            setLoadouts(result)
            setLoading(false)
        }).catch(error => {
            console.error('Failed to load loadouts:', error)
            setLoading(false)
        })
    }, [])

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
                    loadouts={loadouts}
                    setLoadouts={setLoadouts}
                    setLoading={setLoading}
                    loading={loading}
                />

                {selectedLoadout &&
                    <LoadoutDetails 
                        selectedLoadout={selectedLoadout}
                        setLoadouts={setLoadouts}
                    />
                }
            </div>
        </LoadoutsProvider>
    )
}