import { useCallback, useEffect, useMemo, useState, useContext } from 'react'
import { css } from '@emotion/css'
import { colors } from '../data/constants'
import { strategemData, primaryWeaponData, secondaryWeaponData, preloadImages, grenadeData, armorData } from '../data/hardcodedData'
import { updateLoadout, deleteLoadout } from '../data/indexedDB'
import StrategemList from './StrategemList'
import StrategemDetails from './StrategemDetails'
import Analytics from './Analytics'
import PrimaryDetails from './PrimaryDetails'
import PrimaryList from './PrimaryList'
import SecondaryList from './SecondaryList'
import SecondaryDetails from './SecondaryDetails'
import LoadoutsContext from '../context/Loadouts'
import GrenadeDetails from './GrenadeDetails'
import GrenadeList from './GrenadeList'
import ArmorDetails from './ArmorDetails'
import ArmorList from './ArmorList'
import ShareButton from './ShareButton'

export default function LoadoutDetails({ ...props }) {

    const { selectedLoadout, setSelectedLoadout, setLoadouts, loadouts } = useContext(LoadoutsContext)

    useEffect(() => {
        preloadImages()
    }, [])

    const [name, setName] = useState(selectedLoadout.name)
    const [selectedTarget, setSelectedTarget] = useState({ type: null, target: null })
    const [newLoadout, setNewLoadout] = useState(selectedLoadout)
    const [confirmDelete, setConfirmDelete] = useState(false)

    const generateRandomLoadout = useCallback(() => {

        function pickRandom(arr) {
            return arr[Math.floor(Math.random() * arr.length)]
        }

        function generateRandomObject() {
            let strats
            while (true) { // there has to be a better way to do this...
                const first = pickRandom(strategemData)
                const second = pickRandom(strategemData)
                if (first.id === second.id) continue
                const third = pickRandom(strategemData)
                if (third.id === first.id || third.id === second.id) continue
                const fourth = pickRandom(strategemData)
                if (fourth.id === first.id || fourth.id === second.id || fourth.id === third.id) continue
                strats = [first, second, third, fourth]
                break
            }

            return {
                name: 'Random Loadout',
                strat1: strats[0],
                strat2: strats[1],
                strat3: strats[2],
                strat4: strats[3],
                primary: pickRandom(primaryWeaponData),
                secondary: pickRandom(secondaryWeaponData),
                grenade: pickRandom(grenadeData),
                armor: pickRandom(armorData),
            }
        }

        let resultingData
        while (true) {
            const attempt = generateRandomObject()
            // strats may not contain multiple backpacks
            const containsMultipleBackpacks = [attempt.strat1, attempt.strat2, attempt.strat3, attempt.strat4].map(x => x.hasBackpack).filter(x => !!x).length > 1
            if (containsMultipleBackpacks) continue
            // strats may not contain multiple support slot consumers
            const containsMultipleSupportSlots = [attempt.strat1, attempt.strat2, attempt.strat3, attempt.strat4].map(x => x.supportSlotNecessary).filter(x => !!x).length > 1
            if (containsMultipleSupportSlots) continue
            resultingData = attempt
            break
        }

        setNewLoadout(prev => {
            return {
                id: prev.id,
                name: prev.name,
                strat1: resultingData.strat1.id,
                strat2: resultingData.strat2.id,
                strat3: resultingData.strat3.id,
                strat4: resultingData.strat4.id,
                primary: resultingData.primary.id,
                secondary: resultingData.secondary.id,
                grenade: resultingData.grenade.id,
                armor: resultingData.armor.id,
            }
        })
    }, [loadouts])



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
        return name !== selectedLoadout.name
            || (newStrat1?.id || null) !== selectedLoadout.strat1
            || (newStrat2?.id || null) !== selectedLoadout.strat2
            || (newStrat3?.id || null) !== selectedLoadout.strat3
            || (newStrat4?.id || null) !== selectedLoadout.strat4
            || (newPrimary?.id || null) !== selectedLoadout.primary
            || (newSecondary?.id || null) !== selectedLoadout.secondary
            || (newGrenade?.id || null) !== selectedLoadout.grenade
            || (newArmor?.id || null) !== selectedLoadout.armor
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

    const clearLoadout = useCallback(() => {
        setNewLoadout(prev => ({
            id: prev.id,
            strat1: null,
            strat2: null,
            strat3: null,
            strat4: null,
            primary: null,
            secondary: null,
            grenade: null,
            armor: null
        }))
    }, [])

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
                        grid-column: span 2;
                        font-family: 'sinclair';
                    `}
                    maxLength='24'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <StrategemDetails strat={newStrat1} active={selectedTarget.target === 'strat1'}
                    reset={() => {
                        setNewLoadout(prev => ({ ...prev, strat1: null }))
                        setSelectedTarget({ type: null, target: null })
                    }}
                    onClick={() => {
                        setSelectedTarget(
                            selectedTarget.target === 'strat1' ?
                                { type: null, target: null }
                                : { type: 'strat', target: 'strat1' }
                        )
                    }}
                />
                <StrategemDetails strat={newStrat2} active={selectedTarget.target === 'strat2'}
                    reset={() => {
                        setNewLoadout(prev => ({ ...prev, strat2: null }))
                        setSelectedTarget({ type: null, target: null })
                    }}
                    onClick={() => setSelectedTarget(
                        selectedTarget.target === 'strat2' ?
                            { type: null, target: null }
                            : { type: 'strat', target: 'strat2' }
                    )}
                />
                <StrategemDetails strat={newStrat3} active={selectedTarget.target === 'strat3'}
                    reset={() => {
                        setNewLoadout(prev => ({ ...prev, strat3: null }))
                        setSelectedTarget({ type: null, target: null })
                    }}
                    onClick={() => setSelectedTarget(
                        selectedTarget.target === 'strat3' ?
                            { type: null, target: null }
                            : { type: 'strat', target: 'strat3' }
                    )}
                />
                <StrategemDetails strat={newStrat4} active={selectedTarget.target === 'strat4'}
                    reset={() => {
                        setNewLoadout(prev => ({ ...prev, strat4: null }))
                        setSelectedTarget({ type: null, target: null })
                    }}
                    onClick={() => setSelectedTarget(
                        selectedTarget.target === 'strat4' ?
                            { type: null, target: null }
                            : { type: 'strat', target: 'strat4' }
                    )}
                />
                <PrimaryDetails primary={newPrimary} active={selectedTarget.target === 'primary'}
                    reset={() => {
                        setNewLoadout(prev => ({ ...prev, primary: null }))
                        setSelectedTarget({ type: null, target: null })
                    }}
                    onClick={() => setSelectedTarget(
                        selectedTarget.target === 'primary' ?
                            { type: null, target: null }
                            : { type: 'primary', target: 'primary' }
                    )}
                />
                <SecondaryDetails secondary={newSecondary} active={selectedTarget.target === 'secondary'}
                    reset={() => {
                        setNewLoadout(prev => ({ ...prev, secondary: null }))
                        setSelectedTarget({ type: null, target: null })
                    }}
                    onClick={() => setSelectedTarget(
                        selectedTarget.target === 'secondary' ?
                            { type: null, target: null }
                            : { type: 'secondary', target: 'secondary' }
                    )}
                />
                <GrenadeDetails grenade={newGrenade} active={selectedTarget.target === 'grenade'}
                    reset={() => {
                        setNewLoadout(prev => ({ ...prev, grenade: null }))
                        setSelectedTarget({ type: null, target: null })
                    }}
                    onClick={() => setSelectedTarget(
                        selectedTarget.target === 'grenade' ?
                            { type: null, target: null }
                            : { type: 'grenade', target: 'grenade' }
                    )}
                />
                <ArmorDetails armor={newArmor} active={selectedTarget.target === 'armor'}
                    reset={() => {
                        setNewLoadout(prev => ({ ...prev, armor: null }))
                        setSelectedTarget({ type: null, target: null })
                    }}
                    onClick={() => setSelectedTarget(
                        selectedTarget.target === 'armor' ?
                            { type: null, target: null }
                            : { type: 'armor', target: 'armor' }
                    )}
                />


                <div className={css`flex-grow: 1;`} />


                <div className={css`
                    width: 100%; 
                    grid-column: span 2;
                    display: grid;
                    grid-template-columns: 1fr 1fr 1fr 1fr;      
                    gap: 0.2em;  
                `}>

                    <button
                        className={css`padding: 0.2em;`}
                        onClick={generateRandomLoadout}
                    >
                        Randomize
                    </button>
                    <button
                        className={css`padding: 0.2em;`}
                        onClick={clearLoadout}
                    >
                        Clear
                    </button>
                    <button onClick={() => setConfirmDelete(prev => !prev)} className={css`
                        background: ${confirmDelete ? 'red' : ''};`
                    }>
                        {!confirmDelete && 'Delete'}
                        {confirmDelete &&
                            <div onClick={handleDelete} >
                                Confirm?
                            </div>}
                    </button>
                    <ShareButton className={css`padding: 0.2em;`} newLoadout={newLoadout}>
                        Share
                    </ShareButton>
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
                <Analytics
                    strat1={newStrat1}
                    strat2={newStrat2}
                    strat3={newStrat3}
                    strat4={newStrat4}
                    primary={newPrimary}
                    secondary={newSecondary}
                    grenade={newGrenade}
                    armor={newArmor}
                />
            }
        </>
    )
}