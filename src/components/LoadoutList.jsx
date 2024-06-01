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

    const sortedLoadouts = useMemo(() => {
        return loadouts.slice(0).sort((a, b) => a.name.localeCompare(b.name))
    }, [loadouts])

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
                padding: 1em;
                position: sticky;
                bottom: 0;
            `}>
                <div className={css`display: flex; gap: 0.2em; height: 100%;`}>
                    <button className={css`width: 80%; height: 100%; flex-grow: 1;`}
                        onClick={handleAddLoadout}
                    >
                        Add loadout
                    </button>
                    <button className={css`width: min-content; height: 100%; `}
                        onClick={() => setDataModal(true)}
                    >
                        <ReactSVG src={dataIcon} className={css`
                            width: 1em;
                            height: 1em;
                            fill: white;
                        `} />
                    </button>

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