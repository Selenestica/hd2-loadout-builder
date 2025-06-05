import { useCallback, useContext, useMemo, useState } from 'react'
import { css } from '@emotion/css'
import { addObject } from '../data/indexedDB'
import { colors } from '../data/constants'
import Loadout from './Loadout'
import LoadoutsContext from '../context/Loadouts'
import { ReactSVG } from 'react-svg'
import dataIcon from '../assets/database.svg'
import GenericModalLayout from './GenericModalLayout'
import ImportExport from './ImportExport'

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
        addObject('loadouts', newLoadout).then(loadout => {
            setLoadouts(current => [
                ...current,
                loadout
            ])
            setSelectedLoadout(loadout)
        })
    }, [loadouts, setLoadouts])

    const [loadoutFactionFilter, setLoadoutFactionFilter] = useState('')

    const sortedLoadouts = useMemo(() => {
        return loadouts.slice(0).sort((a, b) => a.name.localeCompare(b.name)).filter(l => (l.faction === loadoutFactionFilter) || loadoutFactionFilter === '')
    }, [loadouts, loadoutFactionFilter])

    const [dataModal, setDataModal] = useState(false)

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
                min-height: 9em;
                padding: 1em;
                position: sticky;
                bottom: 0;
                background: rgb(62, 65, 78);
            `}>
                <div className={css`
                    display: grid; 
                    flex-direction: column;
                    gap: 0.2em;
                `}>

                    <div className={css`display: grid; gap: 0.2em; height: 100%;grid-template-columns: 1fr 1fr 1fr 1fr 1fr;`}>
                        <button className={css`flex-grow: 1; ${loadoutFactionFilter === '' ? 'border-bottom: 3px solid yellow;' : ''}`}
                            onClick={() => setLoadoutFactionFilter('')}
                        >
                            All
                        </button>
                        <button className={css`flex-grow: 1; ${loadoutFactionFilter === 'Generic' ? 'border-bottom: 3px solid yellow;' : ''}`}
                            onClick={() => setLoadoutFactionFilter('Generic')}
                        >
                            Generic
                        </button>
                        <button className={css`flex-grow: 1; ${loadoutFactionFilter === 'Bugs' ? 'border-bottom: 3px solid yellow;' : ''}`}
                            onClick={() => setLoadoutFactionFilter('Bugs')}
                        >
                            Bugs
                        </button>
                        <button className={css`flex-grow: 1; ${loadoutFactionFilter === 'Bots' ? 'border-bottom: 3px solid yellow;' : ''}`}
                            onClick={() => setLoadoutFactionFilter('Bots')}
                        >
                            Bots
                        </button>
                        <button className={css`flex-grow: 1; ${loadoutFactionFilter === 'Illuminate' ? 'border-bottom: 3px solid yellow;' : ''}`}
                            onClick={() => setLoadoutFactionFilter('Illuminate')}
                        >
                            Illuminate
                        </button>
                    </div>

                    <div className={css`display: flex; gap: 0.2em; height: 3.5em;`}>
                        <button className={css`width: 80%; height: 100%; flex-grow: 1;`}
                            onClick={handleAddLoadout}
                        >
                            Add loadout
                        </button>
                        <button className={css`height: 100%;`}
                            onClick={() => setDataModal(true)}
                        >
                            <ReactSVG src={dataIcon} className={css`
                                width: 1em;
                                fill: white;
                            `} />
                        </button>
                    </div>
                </div>
            </div>

            {dataModal && <GenericModalLayout closeModal={(e) => { e.stopPropagation(); setDataModal(false) }} >
                <section className={css`
                    display: grid;
                    font-size: 0.5em;
                    padding-bottom: 1em;
                `}>
                    <div className={css`grid-column: span 2; font-size: 1.5em;margin-bottom: 1em;`}>
                        Data Actions
                    </div>
                    <ImportExport closeModal={() => { setDataModal(false) }} />

                    <button className={css`grid-column: span 2;`} onClick={(e) => { e.stopPropagation(); setDataModal(false) }}>Close</button>
                </section>
            </GenericModalLayout>}


        </div >
    )
}