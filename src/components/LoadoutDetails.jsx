import { css } from '@emotion/css'
import { useCallback } from 'react'
import { useEffect } from 'react'
import { useMemo } from 'react'
import { useState } from 'react'
import { colors } from '../data/constants'
import { strategemData, primaryWeaponData, /* secondaryWeaponData, grenadeData, armorData */ } from '../data/hardcodedData'
import StrategemList from './StrategemList'
import StrategemDetails from './StrategemDetails'
import { updateLoadout, deleteLoadout } from '../data/indexedDB'
import LoadoutSummary from './LoadoutSummary'
import PrimaryDetails from './PrimaryDetails'

export default function LoadoutDetails({ selectedLoadout, setLoadouts, setSelectedLoadout }) {

    const [name, setName] = useState(selectedLoadout.name)
    const [selectedTarget, setSelectedTarget] = useState({ type: null, target: null })
    const [newLoadout, setNewLoadout] = useState(selectedLoadout)
    const [confirmDelete, setConfirmDelete] = useState(false)

    useEffect(() => {
        setName(selectedLoadout.name)
        setSelectedTarget({ type: null, target: null })
        setNewLoadout(selectedLoadout)
        setConfirmDelete(false)
    }, [selectedLoadout])

    const newStrat1 = strategemData.find(x => x.id === newLoadout.strat1) || null
    const newStrat2 = strategemData.find(x => x.id === newLoadout.strat2) || null
    const newStrat3 = strategemData.find(x => x.id === newLoadout.strat3) || null
    const newStrat4 = strategemData.find(x => x.id === newLoadout.strat4) || null
    const newPrimary = primaryWeaponData.find(x => x.id === newLoadout.primary) || null

    const activeChanges = useMemo(() => {
        return name !== selectedLoadout.name
            || newStrat1?.id !== selectedLoadout.strat1
            || newStrat2?.id !== selectedLoadout.strat2
            || newStrat3?.id !== selectedLoadout.strat3
            || newStrat4?.id !== selectedLoadout.strat4
            || newPrimary?.id !== selectedLoadout.primary
    }, [name, selectedLoadout, newStrat1, newStrat2, newStrat3, newStrat4, newPrimary])

    const handleSave = useCallback(() => {
        const data = {
            ...newLoadout,
            name: name
        }
        try {
            updateLoadout(data).then(res => {
                setLoadouts(prev => {
                    const newData = [...prev]
                    const i = newData.indexOf(newData.find(x => x.id === data.id))
                    newData[i] = data
                    return newData
                })
                setSelectedTarget({ type: null, target: null })
            })
        } catch (e) {
            console.log(e)
        }

    }, [name, newLoadout, setLoadouts])

    const handleDelete = useCallback(() => {
        try {
            deleteLoadout(selectedLoadout.id).then(res => {
                setLoadouts(prev => prev.filter(x => x.id !== selectedLoadout.id))
                setSelectedLoadout()
            })

        } catch (e) {
            console.log(e)
        }
    }, [selectedLoadout, setSelectedLoadout, setLoadouts])

    return (
        <>
            <div className={css`
                background: ${colors.lighter};
                padding: 1em;
                display: flex;
                flex-direction: column;
                min-width: 20em;
                gap: 0.5em;
                height: auto;
                overflow-Y: auto;
            `}>
                <input
                    type='text'
                    className={css`
                    align-self: center;
                    text-align: center;
                    width: 100%;
                    font-size: 1.2em;
                    border: none;
                    cursor: pointer;
                    padding: 0.5em 0;
                    background: black;
                    border-radius: 5px;
                `}
                    maxLength='24'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <StrategemDetails strat={newStrat1} active={selectedTarget.target === 'strat1'}
                    onClick={() => {
                        setSelectedTarget(
                            selectedTarget.target === 'strat1' ?
                                { type: null, target: null }
                                : { type: 'strat', target: 'strat1' }
                        )
                    }}
                />
                <StrategemDetails strat={newStrat2} active={selectedTarget.target === 'strat2'}
                    onClick={() => setSelectedTarget(
                        selectedTarget.target === 'strat2' ?
                            { type: null, target: null }
                            : { type: 'strat', target: 'strat2' }
                    )}
                />
                <StrategemDetails strat={newStrat3} active={selectedTarget.target === 'strat3'}
                    onClick={() => setSelectedTarget(
                        selectedTarget.target === 'strat3' ?
                            { type: null, target: null }
                            : { type: 'strat', target: 'strat3' }
                    )}
                />
                <StrategemDetails strat={newStrat4} active={selectedTarget.target === 'strat4'}
                    onClick={() => setSelectedTarget(
                        selectedTarget.target === 'strat4' ?
                            { type: null, target: null }
                            : { type: 'strat', target: 'strat4' }
                    )}
                />
                <PrimaryDetails primary={newPrimary} active={selectedTarget.target === 'primary'}
                    onClick={() => setSelectedTarget(
                        selectedTarget.target === 'primary' ?
                            { type: null, target: null }
                            : { type: 'primary', target: 'primary' }
                    )}
                />

                <div className={css`flex-grow: 1;`} />

                <div className={css`
                        width: 100%; 
                        text-align: center;
                        font-size: 0.8em;
                        cursor: pointer;
                        `}
                    onClick={() => setConfirmDelete(prev => !prev)}
                >
                    {!confirmDelete && 'Remove'}
                    {confirmDelete &&
                        <button
                            className={css`padding: 0.2em;`}
                            onClick={handleDelete}
                        >
                            Remove
                        </button>}
                </div>
                <button disabled={!activeChanges} onClick={handleSave}>
                    Save
                </button>
            </div>

            {selectedTarget.type === 'strat' &&
                <StrategemList
                    handleClick={(id) => {
                        setNewLoadout(prev => {
                            return {
                                ...prev,
                                [selectedTarget.target]: id
                            }
                        })
                        setSelectedTarget({ type: null, target: null })
                    }}
                    filterArr={[newStrat1?.id, newStrat2?.id, newStrat3?.id, newStrat4?.id]}
                />
            }
            {selectedTarget.type === 'primary' &&
                {/*  // primaryList
                
                <StrategemList
                    handleClick={(id) => {
                        setNewLoadout(prev => {
                            return {
                                ...prev,
                                [selectedTarget.target]: id
                            }
                        })
                        setSelectedTarget({ type: null, target: null })
                    }}
                    filterArr={[newStrat1?.id, newStrat2?.id, newStrat3?.id, newStrat4?.id]}
                /> */}
            }
            {!selectedTarget.type &&
                <LoadoutSummary
                    strat1={newStrat1}
                    strat2={newStrat2}
                    strat3={newStrat3}
                    strat4={newStrat4}
                />
            }
        </>
    )
}