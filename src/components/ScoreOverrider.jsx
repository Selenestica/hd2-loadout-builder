import { useCallback, useEffect, useMemo, useState } from "react"
import { colors } from "../data/constants"
import { css } from "@emotion/css"
import InputNumber from "rc-input-number"
import { getObject, updateObject } from "../data/indexedDB"

export default function ScoreOverrider({ equipmentType, id, ...props }) {
    const objectStoreName = equipmentType + 'Overrides'

    const [rangeOverrides, setRangeOverrides] = useState([0, 0, 0])
    const [scoreOverrides, setScoreOverrides] = useState([0, 0, 0, 0, 0])
    const [usingOverrides, setUsingOverrides] = useState(false)


    useEffect(() => {
        async function getInitialState() {
            let res
            try {
                res = await getObject(objectStoreName, id)
                if (res) {
                    setRangeOverrides(res.offensiveRange)
                    setScoreOverrides(res.coverage)
                }
            } catch (e) {
                console.log('no override in database for ' + objectStoreName + '-' + id)
            }
        }

        getInitialState()

    }, [])

    useEffect(() => {
        if (!usingOverrides) return
        updateObject(objectStoreName, {
            id,
            offensiveRange: rangeOverrides,
            coverage: scoreOverrides,
        })
    }, [rangeOverrides, scoreOverrides, usingOverrides])

    const changeRange = useCallback((index, value) => {
        if (value.length > 4 || value === '') return
        if (!/^\d*\.?\d*$/.test(value)) return

        setRangeOverrides(prev => {
            console.log('setrange ran')
            const newArr = [...prev]
            newArr[index] = value
            return newArr
        })
    }, [setRangeOverrides])

    const changeScore = useCallback((index, value) => {
        if (value.length > 4) return
        if (!/^\d*\.?\d*$/.test(value)) return
        setScoreOverrides(prev => {
            const newArr = [...prev]
            newArr[index] = value
            return newArr
        })
    }, [setScoreOverrides])



    return <div className={css`
        white-space: nowrap;
        display: grid;
        gap: 1em;
        grid-column: span 2;
    `}>

        <label className={css`
                cursor: pointer;
                white-space: nowrap;
                display: flex;
                align-items: center;
                user-select: none;
                &:hover {
                    opacity: 0.8;
                }
            `}>

            <div className={css`
                    border: 4px solid ${colors.darkGrey};
                    background: ${usingOverrides ? colors.gold : 'unset'};
                    width: 2em;
                    height: 2em;
                    `} />
            <input
                onChange={() => setUsingOverrides(current => !current)}
                type="checkbox"
                className={css`
                            width: 0px;
                            height: 0px;
                            visibility: hidden;
                        `}
                checked={usingOverrides}
            />

            Use custom values?
        </label>

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

        <div className={css`
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
            }
            -webkit-outer-spin-button, -webkit-inner-spin-button {
                -webkit-appearance: none;
                margin: 0;
            }
        `}>
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
                <InputNumber step={0.05} onChange={(val) => changeScore(3, val)} value={scoreOverrides[2]} max={5} min={0} maxLength={4} precision={2} />
                <InputNumber step={0.05} onChange={(val) => changeScore(4, val)} value={scoreOverrides[2]} max={5} min={0} maxLength={4} precision={2} />
            </div>
        </div>

    </div>

}