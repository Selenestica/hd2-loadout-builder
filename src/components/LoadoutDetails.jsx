import { css } from '@emotion/css'
import { useCallback } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { colors } from '../data/constants'
import { strategemData } from '../data/hardcodedData'
import StrategemDetails from './StrategemDetails'

export default function LoadoutDetails({ selectedLoadout }) {

    const [name, setName] = useState(selectedLoadout.name)

    useEffect(() => {
        setName(selectedLoadout.name)
    }, [selectedLoadout])

    const handleSave = useCallback(() => {

    }, [name])

    const strat1 = strategemData.find(x => x.id === selectedLoadout.strat1) || null
    const strat2 = strategemData.find(x => x.id === selectedLoadout.strat2) || null
    const strat3 = strategemData.find(x => x.id === selectedLoadout.strat3) || null
    const strat4 = strategemData.find(x => x.id === selectedLoadout.strat4) || null

    return (
        <div className={css`
            background: ${colors.lighter};
            padding: 1em;
            display: flex;
            flex-direction: column;
            min-width: 20em;
            gap: 0.5em;
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
                `}
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            <StrategemDetails strat={strat1} />
            <StrategemDetails strat={strat2} />
            <StrategemDetails strat={strat3} />
            <StrategemDetails strat={strat4} />

            <div className={css`flex-grow: 1;`} />
            <button >
                Save
            </button>
        </div>
    )
}