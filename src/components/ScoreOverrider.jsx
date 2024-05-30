import { useCallback, useContext, useEffect, useState } from "react"
import { colors } from "../data/constants"
import { css } from "@emotion/css"
import InputNumber from "rc-input-number"
import OverridesContext from "../context/Overrides"
import RangeBar from "./RangeBar"
import RemovalBar from "./RemovalBar"

export default function ScoreOverrider({ objectStoreName, id, defaultValues, ...props }) {

    const { overrides: allOverrides, handleAdd, handleUpdate, handleDelete } = useContext(OverridesContext)
    const thisOverride = allOverrides[objectStoreName].find(x => x.id === id)

    const [rangeOverrides, setRangeOverrides] = useState(!!thisOverride ? thisOverride.offensiveRange : defaultValues.offensiveRange)
    const [scoreOverrides, setScoreOverrides] = useState(!!thisOverride ? thisOverride.coverage : defaultValues.coverage)
    const [usingOverrides, setUsingOverrides] = useState(!!thisOverride)
    const [valuesHaveChanged, setValuesHaveChanged] = useState(false)

    useEffect(() => {
        setRangeOverrides(!!thisOverride ? thisOverride.offensiveRange : defaultValues.offensiveRange)
        setScoreOverrides(!!thisOverride ? thisOverride.coverage : defaultValues.coverage)
        setUsingOverrides(!!thisOverride)
        setValuesHaveChanged(false)
    }, [id, defaultValues])

    const changeRange = useCallback((index, value) => {
        if (value.length > 4 || value === '') return
        if (!/^\d*\.?\d*$/.test(value)) return

        setValuesHaveChanged(true)
        setRangeOverrides(prev => {
            const newArr = [...prev]
            newArr[index] = value
            return newArr
        })
    }, [setRangeOverrides])

    const changeScore = useCallback((index, value) => {
        if (value.length > 4) return
        if (!/^\d*\.?\d*$/.test(value)) return
        setValuesHaveChanged(true)
        setScoreOverrides(prev => {
            const newArr = [...prev]
            newArr[index] = value
            return newArr
        })
    }, [setScoreOverrides])

    const handleCheckboxtoggle = useCallback(() => {
        // TO DO: also allow supplybuffed overrides
        const prevValue = usingOverrides
        if (!prevValue) { // gets turned on
            // handle put
            const data = { id, offensiveRange: rangeOverrides, coverage: scoreOverrides }
            handleAdd(objectStoreName, data)
        } else { // gets turned off
            // handle delete
            handleDelete(objectStoreName, id)
        }
        setUsingOverrides(current => !current)
        setValuesHaveChanged(false)
    }, [setUsingOverrides, setValuesHaveChanged, usingOverrides, handleDelete, handleAdd, objectStoreName, rangeOverrides, scoreOverrides, id])

    const handleApplyChanges = useCallback(() => {
        const data = { id, offensiveRange: rangeOverrides, coverage: scoreOverrides }
        handleUpdate(objectStoreName, data)
        setValuesHaveChanged(false)
        setUsingOverrides(true)
    }, [handleUpdate, objectStoreName, rangeOverrides, scoreOverrides, id, setValuesHaveChanged])

    return <div className={styles.root(usingOverrides)}>
        <label className={styles.label}>
            <div className={styles.checkbox(usingOverrides)} />
            <input
                onChange={handleCheckboxtoggle}
                type="checkbox"
                className={styles.hiddenInput}
                checked={usingOverrides}
            />
            Use custom values?
        </label>

        {usingOverrides &&
            <>
                <div className={css`
                    white-space: nowrap;
                    display: grid;

                `}>
                    <div>
                        {'(1 = baseline effectiveness)'}
                    </div>
                    <div>
                        {'(0 = not effective)'}
                    </div>
                    <div>
                        {'(1+ = exceptionally effective)'}
                    </div>

                </div>
                <div className={styles.inputWrapper}>
                    Custom range:
                    <div>
                        <InputNumber step={0.05} onChange={(val) => changeRange(0, val)} value={rangeOverrides[0]} max={5} min={0} maxLength={4} precision={2} />
                        <InputNumber step={0.05} onChange={(val) => changeRange(1, val)} value={rangeOverrides[1]} max={5} min={0} maxLength={4} precision={2} />
                        <InputNumber step={0.05} onChange={(val) => changeRange(2, val)} value={rangeOverrides[2]} max={5} min={0} maxLength={4} precision={2} />
                    </div>
                    Custom Removal:
                    <div>
                        <InputNumber step={0.05} onChange={(val) => changeScore(0, val)} value={scoreOverrides[0]} max={5} min={0} maxLength={4} precision={2} />
                        <InputNumber step={0.05} onChange={(val) => changeScore(1, val)} value={scoreOverrides[1]} max={5} min={0} maxLength={4} precision={2} />
                        <InputNumber step={0.05} onChange={(val) => changeScore(2, val)} value={scoreOverrides[2]} max={5} min={0} maxLength={4} precision={2} />
                        <InputNumber step={0.05} onChange={(val) => changeScore(3, val)} value={scoreOverrides[3]} max={5} min={0} maxLength={4} precision={2} />
                        <InputNumber step={0.05} onChange={(val) => changeScore(4, val)} value={scoreOverrides[4]} max={5} min={0} maxLength={4} precision={2} />
                    </div>
                </div>

                <div className={css`
                    display: grid;
                    grid-template-columns: min-content 1fr;
                    gap: 0.5em;
                    grid-auto-rows: 1.5em;
                    align-items: center;
                `}>
                    <RangeBar range={rangeOverrides} special={true}/>
                    <RemovalBar coverage={scoreOverrides} special={true}/>
                </div>
            </>
        }

        {valuesHaveChanged && usingOverrides &&
            <button onClick={handleApplyChanges}>
                Apply Changes
            </button>
        }

    </div>

}

const styles = {
    root: (active) => css`
        white-space: nowrap;
        display: grid;
        gap: 1em;
        grid-column: span 2;
        margin-top: 2em;
        background: ${active ? colors.darker : 'transparent'};
        padding: 1em;
    `,
    inputWrapper: css`
        >div {
            display: flex;
            gap: 0.2em;
        }
        input {
            font-size: 0.9em;
            text-align: center;
            width: 3em;
            -moz-appearance: textfield;
            appearance: textfield;
            border: none;
            padding: 0.5em 0;
            cursor: pointer;
            border-bottom: 3px solid transparent;

            &:hover{
                border-bottom: 3px solid ${colors.gold};
            }
        }
        -webkit-outer-spin-button, -webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
        }
    `,
    label: css`
        cursor: pointer;
        white-space: nowrap;
        display: flex;
        align-items: center;
        user-select: none;
        &:hover {
            opacity: 0.8;
        }
    `,
    checkbox: (usingOverrides) => css`
        border: 4px solid ${colors.darkGrey};
        background: ${usingOverrides ? colors.gold : 'unset'};
        width: 2em;
        height: 2em;
    `,
    hiddenInput: css`
        width: 0px;
        height: 0px;
        visibility: hidden;
    `
}