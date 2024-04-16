import { useCallback } from 'react'
import { css } from '@emotion/css'
import { colors } from '../data/constants'
import Loadout from './Loadout'
import { addLoadout } from '../data/indexedDB'

export default function LoadoutList({ setSelectedLoadout,
    loadouts, setLoadouts, loading, setLoading,
}) {
    

    const handleAddLoadout = useCallback(() => {
        const newLoadout = {
            id: (Math.max(...loadouts.map(x => x.id), 0) || 0) + 1,
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
            overflow-Y: auto;
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        `}>
            <div>
                {loadouts.map(loadout => <Loadout
                    key={loadout.id}
                    data={loadout}
                    onClick={() => {setSelectedLoadout(loadout)}}
                    onPointerEnter={() => setSelectedLoadout(loadout)}
                />)}
            </div>
            <button
                className={css`width: auto; margin: 1em;`}
                onClick={handleAddLoadout}
            >
                add loadout
            </button>
        </div >
    )
}