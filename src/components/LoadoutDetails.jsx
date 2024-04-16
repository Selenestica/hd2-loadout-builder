import { css } from '@emotion/css'
import { useCallback } from 'react'
import { useEffect } from 'react'
import { useMemo } from 'react'
import { useState } from 'react'
import { colors } from '../data/constants'
import { strategemData } from '../data/hardcodedData'
import StrategemList from './StrategemList'
import StrategemDetails from './StrategemDetails'

export default function LoadoutDetails({ selectedLoadout }) {

    const [name, setName] = useState(selectedLoadout.name)
    const [selectedTarget, setSelectedTarget] = useState({ type: null, target: null, data: null })
    const [newLoadout, setNewLoadout] = useState(selectedLoadout)

    useEffect(() => {
        setName(selectedLoadout.name)
        setSelectedTarget({ type: null, target: null, data: null })
        setNewLoadout(selectedLoadout)
    }, [selectedLoadout])

    useEffect(() => {

    }, [])

    const handleSave = useCallback(() => {

    }, [name])

    const newStrat1 = strategemData.find(x => x.id === newLoadout.strat1) || null
    const newStrat2 = strategemData.find(x => x.id === newLoadout.strat2) || null
    const newStrat3 = strategemData.find(x => x.id === newLoadout.strat3) || null
    const newStrat4 = strategemData.find(x => x.id === newLoadout.strat4) || null

    const activeChanges = useMemo(() => {
        return name !== selectedLoadout.name
    }, [name, selectedLoadout])

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
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <StrategemDetails strat={newStrat1}  active={selectedTarget.target === 'strat1'}
                    onClick={() => setSelectedTarget({ type: 'strat', target: 'strat1' })}
                />
                <StrategemDetails strat={newStrat2} active={selectedTarget.target === 'strat2'}
                    onClick={() => setSelectedTarget({ type: 'strat', target: 'strat2' })}
                />
                <StrategemDetails strat={newStrat3} active={selectedTarget.target === 'strat3'}
                    onClick={() => setSelectedTarget({ type: 'strat', target: 'strat3' })}
                />
                <StrategemDetails strat={newStrat4} active={selectedTarget.target === 'strat4'}
                    onClick={() => setSelectedTarget({ type: 'strat', target: 'strat4' })}
                />

                <div className={css`flex-grow: 1;`} />
                <button disabled={!activeChanges} onClick={handleSave}>
                    Save
                </button>
            </div>

            {selectedTarget.type === 'strat' && 
                <StrategemList handleClick={(id) => setNewLoadout(prev => {
                    return { ...prev,
                        [selectedTarget.target]: id
                    }
                })}/>
            }
        </>
    )
}