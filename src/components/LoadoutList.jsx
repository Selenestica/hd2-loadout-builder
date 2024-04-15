import { useState, useEffect } from 'react'
import { css } from '@emotion/css'
import { colors } from '../data/constants'
import { loadLoadouts } from '../data/indexedDB'
import Loadout from './Loadout'

export default function StrategemList({ handleClick }) {
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

    return (loading ? 'loading...' :
        <div className={css`
            background: ${colors.lighter};
            max-height: 80vh;
            overflow-Y: auto;
            width: 50em;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        `}>
            <div>
                {loadouts.map(loadout => <Loadout data={loadout} />)}
            </div>
            <button className={css`
                width: 100%;
            `}
                onClick={() => {
                    setLoadouts(current => [...current,
                    {
                        name: 'New Loadout',
                        strat1: 1,
                        strat2: 26,
                        strat3: null,
                        strat4: null,
                        primary: 1,
                        secondary: 1,
                        grenade: 1,
                        armor: 1,
                    }
                    ])
                }}
            >
                add loadout
            </button>
        </div >
    )
}