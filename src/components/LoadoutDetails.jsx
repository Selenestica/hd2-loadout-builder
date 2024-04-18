import { useCallback, useEffect, useMemo, useState, useContext } from 'react'
import { css } from '@emotion/css'
import { colors } from '../data/constants'
import { strategemData, primaryWeaponData, secondaryWeaponData, preloadImages, grenadeData, armorData } from '../data/hardcodedData'
import { updateLoadout, deleteLoadout } from '../data/indexedDB'
import StrategemList from './StrategemList'
import StrategemDetails from './StrategemDetails'
import LoadoutSummary from './LoadoutSummary'
import PrimaryDetails from './PrimaryDetails'
import PrimaryList from './PrimaryList'
import SecondaryList from './SecondaryList'
import SecondaryDetails from './SecondaryDetails'
import LoadoutsContext from '../context/Loadouts'
import GrenadeDetails from './GrenadeDetails'
import GrenadeList from './GrenadeList'
import ArmorDetails from './ArmorDetails'
import ArmorList from './ArmorList'

export default function LoadoutDetails({ ...props }) {

    const { selectedLoadout, setSelectedLoadout, setLoadouts } = useContext(LoadoutsContext)

    useEffect(() => {
        preloadImages()
    }, [])

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
    const newSecondary = secondaryWeaponData.find(x => x.id === newLoadout.secondary) || null
    const newGrenade = grenadeData.find(x => x.id === newLoadout.grenade) || null
    const newArmor = armorData.find(x => x.id === newLoadout.armor) || null

    const activeChanges = useMemo(() => {
        if (newStrat1 === null
            || newStrat2 === null
            || newStrat3 === null
            || newStrat4 === null
            || newPrimary === null
            || newSecondary === null
            || newGrenade === null
            || newArmor === null
        ) return false
        return name !== selectedLoadout.name
            || newStrat1?.id !== selectedLoadout.strat1
            || newStrat2?.id !== selectedLoadout.strat2
            || newStrat3?.id !== selectedLoadout.strat3
            || newStrat4?.id !== selectedLoadout.strat4
            || newPrimary?.id !== selectedLoadout.primary
            || newSecondary?.id !== selectedLoadout.secondary
            || newGrenade?.id !== selectedLoadout.grenade
            || newArmor?.id !== selectedLoadout.grenade
    }, [name, selectedLoadout, newStrat1, newStrat2, newStrat3, newStrat4, newPrimary, newSecondary, newGrenade, newArmor])

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
                setSelectedLoadout(data)
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

                display: grid; 
                grid-template: min-content min-content min-content min-content min-content 1fr min-content min-content /  1fr 1fr;
                grid-gap: 0.2em;
                padding: 1em;

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
                        grid-column: span 2;
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
                <SecondaryDetails secondary={newSecondary} active={selectedTarget.target === 'secondary'}
                    onClick={() => setSelectedTarget(
                        selectedTarget.target === 'secondary' ?
                            { type: null, target: null }
                            : { type: 'secondary', target: 'secondary' }
                    )}
                />
                <GrenadeDetails grenade={newGrenade} active={selectedTarget.target === 'grenade'}
                    onClick={() => setSelectedTarget(
                        selectedTarget.target === 'grenade' ?
                            { type: null, target: null }
                            : { type: 'grenade', target: 'grenade' }
                    )}
                />
                <ArmorDetails armor={newArmor} active={selectedTarget.target === 'armor'}
                    onClick={() => setSelectedTarget(
                        selectedTarget.target === 'armor' ?
                            { type: null, target: null }
                            : { type: 'armor', target: 'armor' }
                    )}
                />


                <div className={css`flex-grow: 1;`} />

                <div className={css`
                        width: 100%; 
                        text-align: center;
                        font-size: 0.8em;
                        cursor: pointer;
                        grid-column: span 2;
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
                <button disabled={!activeChanges} onClick={handleSave} className={css`
                    grid-column: span 2;
                `}>
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
                <PrimaryList
                    handleClick={(id) => {
                        setNewLoadout(prev => {
                            return {
                                ...prev,
                                [selectedTarget.target]: id
                            }
                        })
                        setSelectedTarget({ type: null, target: null })
                    }}
                    filterArr={[newPrimary?.id]}
                />
            }
            {selectedTarget.type === 'secondary' &&
                <SecondaryList
                    handleClick={(id) => {
                        setNewLoadout(prev => {
                            return {
                                ...prev,
                                [selectedTarget.target]: id
                            }
                        })
                        setSelectedTarget({ type: null, target: null })
                    }}
                    filterArr={[newSecondary?.id]}
                />
            }
            {selectedTarget.type === 'grenade' &&
                <GrenadeList
                    handleClick={(id) => {
                        setNewLoadout(prev => {
                            return {
                                ...prev,
                                [selectedTarget.target]: id
                            }
                        })
                        setSelectedTarget({ type: null, target: null })
                    }}
                    filterArr={[newGrenade?.id]}
                />
            }
            {selectedTarget.type === 'armor' &&
                <ArmorList
                    handleClick={(id) => {
                        setNewLoadout(prev => {
                            return {
                                ...prev,
                                [selectedTarget.target]: id
                            }
                        })
                        setSelectedTarget({ type: null, target: null })
                    }}
                    filterArr={[newArmor?.id]}
                />
            }
            {!selectedTarget.type &&
                <LoadoutSummary
                    strat1={newStrat1}
                    strat2={newStrat2}
                    strat3={newStrat3}
                    strat4={newStrat4}
                    primary={newPrimary}
                    secondary={newSecondary}
                    grenade={newGrenade}
                />
            }
        </>
    )
}