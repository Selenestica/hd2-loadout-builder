import { useCallback, useContext, useMemo } from 'react'
import { css } from '@emotion/css'
import { addObject as addLoadout } from '../data/indexedDB'
import { colors } from '../data/constants'
import Loadout from './Loadout'
import LoadoutsContext from '../context/Loadouts'

export default function LoadoutList({
    ...props
}) {

    const { setSelectedLoadout, selectedLoadout, loadouts, setLoadouts, loading } = useContext(LoadoutsContext)

    const handleAddLoadout = useCallback(() => {
        const newLoadout = {
            id: (Math.max(...loadouts.map(x => x.id), 0) || 0) + 1,
            name: 'New Loadout',
            strat1: 1,
            strat2: 26,
            strat3: null,
            strat4: null,
            primary: null,
            secondary: null,
            grenade: null,
            armor: null,
        }
        addLoadout('loadouts', newLoadout).then(loadout => {
            setLoadouts(current => [
                ...current,
                loadout
            ])
        })
    }, [loadouts, setLoadouts])

    const sortedLoadouts = useMemo(() => {
        return loadouts.slice(0).sort((a,b) => a.name.localeCompare(b.name))
    }, [loadouts])

    return (loading ? 'loading...' :
        <div className={css`
            background: ${colors.lighter};
            overflow-Y: auto;
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        `}>
            <div className={css`display: flex; flex-direction: column; gap: 0.2em`}>
                {sortedLoadouts.map(loadout => <Loadout
                    key={loadout.id}
                    data={loadout}
                    onClick={() => { setSelectedLoadout(loadout) }}
                    active={selectedLoadout?.id === loadout.id}
                />)}
            </div>
            <div className={css`
                width: auto; 
                padding: 1em;
                position: sticky;
                bottom: 0;
            `}>

                <button className={css`width: 100%; height: 100%;`}

                    onClick={handleAddLoadout}
                >
                    Add loadout
                </button>
            </div>
        </div >
    )
}