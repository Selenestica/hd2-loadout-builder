import { useMemo } from "react"
import { css } from "@emotion/css"
import { colors } from "../data/constants"
import RangeRemovalMatrix from "./RangeRemovalMatrix"

function prepRangeCoverageData(obj, weight = 1) {
    const output = []
    for (const coverage of [4, 3, 2, 1, 0]) {
        const cov = { id: coverage, data: [] }
        for (const range of [0, 1, 2]) {
            if (!obj || !obj.offensiveRange || !obj.coverage) {
                cov.data.push({
                    x: range,
                    y: 0
                })
                continue
            }
            const score = obj.offensiveRange[range] * obj.coverage[coverage]
            cov.data.push({
                x: range,
                y: score * weight
            })
        }
        output.push(cov)
    }
    return output
}

function sumRangeCoverages(rangeCoverageArrays) {
    const output = []

    for (const coverage of [4, 3, 2, 1, 0]) {
        const cov = { id: coverage, data: [] }
        for (const range of [0, 1, 2]) {
            const yValues = rangeCoverageArrays.map(arr => {
                return arr.find(x => x.id === coverage).data.find(d => d.x === range).y
            })
            const sum = yValues.reduce((a, b) => a + b, 0)
            cov.data.push({
                x: range,
                y: sum
            })
        }
        output.push(cov)
    }
    return output
}

export default function Analytics({ strat1, strat2, strat3, strat4, primary, secondary, grenade, armor, ...props }) {

    const rangeRemovalData = useMemo(() => {
        // mutable copies of original data
        const [s1, s2, s3, s4, prim, sec, gren, arm] = [strat1, strat2, strat3, strat4, primary, secondary, grenade, armor].map(x => ({ ...x }))

        // handle the benefit of running a supply pack on ammo hungry weapons
        const supplyBuffed = (s1.id === 34) || (s2.id === 34) || (s3.id === 34) || (s4.id === 34)
        if (supplyBuffed) {
            for (const obj of [s1, s2, s3, s4, prim, sec, gren]) {
                if (!obj.supplyBuffedCoverage || !obj.coverage) continue
                obj.coverage = obj.supplyBuffedCoverage
            }
        }


        // to do: take into account multiple support weapons that require the same weapon slot 3:
        const supportSlotIndices = []
        [s1, s2, s3, s4].forEach((s, i) => {
            if (!!s?.supportSlotNecessary) overlappingStratagemIndices.push(i)
        })
        const overlapDivisor = supportSlotIndices.length || 1


        // coverage is normalized for the equipment category, add weights to factor in their relative power
        const strat1Weight = supportSlotIndices.includes(0) ? 1 / overlapDivisor : 1
        const strat2Weight = supportSlotIndices.includes(1) ? 1 / overlapDivisor : 1
        const strat3Weight = supportSlotIndices.includes(2) ? 1 / overlapDivisor : 1
        const strat4Weight = supportSlotIndices.includes(3) ? 1 / overlapDivisor : 1
        const primaryWeight = 1
        const secondaryWeight = supplyBuffed ? 0.666 : 0.5
        const grenadeWeight = supplyBuffed ? 1 : arm.bonus === 'engineering kit' ? 0.7 : 0.5

        const strat1Data = prepRangeCoverageData(strat1, strat1Weight)
        const strat2Data = prepRangeCoverageData(strat2, strat2Weight)
        const strat3Data = prepRangeCoverageData(strat3, strat3Weight)
        const strat4Data = prepRangeCoverageData(strat4, strat4Weight)
        const primaryData = prepRangeCoverageData(primary, primaryWeight)
        const secondaryData = prepRangeCoverageData(secondary, secondaryWeight)
        const grenadeData = prepRangeCoverageData(grenade, grenadeWeight)

        return sumRangeCoverages([strat1Data, strat2Data, strat3Data, strat4Data, primaryData, secondaryData, grenadeData])



        /* const arr = [strat1, strat2, strat3, strat4].filter(x => !!x)
        const output = []

        for (const coverage of [4, 3, 2, 1, 0]) {
            const cov = { id: coverage, data: [] }
            for (const range of [0, 1, 2]) {
                const sum = arr
                    .map(strat => strat.offensiveRange[range] * strat.coverage[coverage])
                    ?.reduce(((a, b) => a + b), 0)
                cov.data.push({
                    x: range,
                    y: sum || 0
                })
            }
            output.push(cov)
        }

        return output */


    }, [strat1, strat2, strat3, strat4, primary, secondary, grenade, armor])

    return <div {...props} className={css`
        background: ${colors.lighter};
        padding: 1em;
        display: grid;
        place-items: center;
    `}>
        <div className={css`
            display: grid;
            grid-template: 18em 3em / 3em 10em;
        `}>
            <div className={css`
                place-self: center; 
                transform: rotate(-90deg);
                display: flex;
                justify-content: space-around;
                width: 20em;
            `}>
                <div className={css`
                    transform: translate(0, 0.5em);
                    opacity: 0.4;
                `}>lights</div>
                <div className={css`
                    transform: translate(0, -0.5em);
                `}>Removal</div>
                <div className={css`
                    transform: translate(0, 0.5em);
                    opacity: 0.4;
                `}>heavies</div>
            </div>
            <RangeRemovalMatrix data={rangeRemovalData} />
            <div></div>
            <div className={css`
                display: flex;
                justify-content: space-around;
                width: 10em;
            `}>
                <div className={css`
                    transform: translate(0, -0.5em);
                    opacity: 0.4;
                `}>short</div>
                <div className={css`
                    transform: translate(0, 0.5em);
                `}>Range</div>
                <div className={css`
                    transform: translate(0, -0.5em);
                    opacity: 0.4;
                `}>long</div>
            </div>
        </div>
    </div>
}


/* [
    {
        id: 4, // coverage 5 
        data: [
            {
                x: 0, // range short
                y: '#' // total value (sum of each strat's  Math.min(rangeValue, 1) * coverageValue )
            },
            {
                x: 1, // range medium
                y: '#'
            },
            {
                x: 2, // range long
                y: '#'
            },
        ]
    },
    {
        //... coverage 4...
    }
] */

