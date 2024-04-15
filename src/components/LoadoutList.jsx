import { useState, useEffect, useCallback } from 'react'
import { css } from '@emotion/css'
import { colors } from '../data/constants'
import { loadLoadouts } from '../data/indexedDB'
import Loadout from './Loadout'
import { addLoadout } from '../data/indexedDB'

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

    const handleAddLoadout = useCallback(() => {
        const newLoadout = {
            id: (Math.max(...loadouts.map(x => x.id)) || 0) + 1,
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
        addLoadout(newLoadout).then(loadout => {
            setLoadouts(current => [
                ...current,
                loadout
            ])
        })
    }, [loadouts, setLoadouts])

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
                {loadouts.map(loadout => <Loadout
                    key={loadout.id}
                    data={loadout}
                    setLoadouts={setLoadouts}
                />)}
            </div>
            <button
                className={css`width: 100%;`}
                onClick={handleAddLoadout}
            >
                add loadout
            </button>
        </div >
    )
}