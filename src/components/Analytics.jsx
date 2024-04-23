import { useMemo } from "react"
import { css } from "@emotion/css"
import { colors } from "../data/constants"
import RangeRemovalMatrix from "./RangeRemovalMatrix"
import RemovalBreakdownChart from "./RemovalBreakdownChart"

function prepRangeCoverageData(obj, weight = 1) {
    const output = []
    for (const RANGE of [2, 1, 0]) {
        const RAN = { id: RANGE, data: [] }
        for (const COVERAGE of [0, 1, 2, 3, 4]) {
            if (!obj || !obj.offensiveRange || !obj.coverage) {
                RAN.data.push({
                    x: COVERAGE,
                    y: 0
                })
                continue
            }
            const score = obj.offensiveRange[RANGE] * obj.coverage[COVERAGE]
            RAN.data.push({
                x: COVERAGE,
                y: score * weight
            })
        }
        output.push(RAN)
    }
    return output
}

function sumRangeCoverages(rangeCoverageArrays) {
    const output = []

    for (const RANGE of [2, 1, 0]) {
        const RAN = { id: RANGE, data: [] }
        for (const COVERAGE of [0, 1, 2, 3, 4]) {
            const yValues = rangeCoverageArrays.map(arr => {
                return arr.find(x => x.id === RANGE).data.find(d => d.x === COVERAGE).y
            })
            const sum = yValues.reduce((a, b) => a + b, 0)
            RAN.data.push({
                x: COVERAGE,
                y: sum
            })
        }
        output.push(RAN)
    }
    return output
}

function prepRemovalBreakdownData(equipmentObjs, weights) {
    const output = []

    for (const coverage of [0, 1, 2, 3, 4]) {
        const covObj = { removal: coverage }

        for (let i = 0; i < equipmentObjs.length; i++) {
            const equipment = equipmentObjs[i]
            const name = equipment.name
            const value = equipment?.coverage?.[coverage] || 0
            const weight = weights[i]
            const color = equipment.color
            // assign to object
            covObj[name] = (value * weight)
            covObj[name + 'Color'] = color
        }

        output.push(covObj)
    }

    return output
}

export default function Analytics({ strat1, strat2, strat3, strat4, primary, secondary, grenade, armor, ...props }) {

    const [rangeRemovalData, removalBreakdownData] = useMemo(() => {
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
        const supportSlotIndices = [];
        [s1, s2, s3, s4].forEach((s, i) => {
            if (!!s?.supportSlotNecessary) supportSlotIndices.push(i)
        })
        const overlapDivisor = supportSlotIndices.length || 1

        // to do: take into account uptime.. NEVERMIND this is factored into the base 'coverage'

        // coverage is normalized for the equipment category, add weights to factor in their relative power
        const strat1Weight = supportSlotIndices.includes(0) ? 1 / overlapDivisor : 1
        const strat2Weight = supportSlotIndices.includes(1) ? 1 / overlapDivisor : 1
        const strat3Weight = supportSlotIndices.includes(2) ? 1 / overlapDivisor : 1
        const strat4Weight = supportSlotIndices.includes(3) ? 1 / overlapDivisor : 1
        const primaryWeight = 1
        const secondaryWeight = supplyBuffed ? 0.666 : 0.5
        const grenadeWeight = supplyBuffed ? 1 : arm.bonus === 'engineering kit' ? 0.7 : 0.5

        // data for the first graph
        const strat1Data = prepRangeCoverageData(s1, strat1Weight)
        const strat2Data = prepRangeCoverageData(s2, strat2Weight)
        const strat3Data = prepRangeCoverageData(s3, strat3Weight)
        const strat4Data = prepRangeCoverageData(s4, strat4Weight)
        const primaryData = prepRangeCoverageData(prim, primaryWeight)
        const secondaryData = prepRangeCoverageData(sec, secondaryWeight)
        const grenadeData = prepRangeCoverageData(gren, grenadeWeight)

        const graph1Data = sumRangeCoverages([strat1Data, strat2Data, strat3Data, strat4Data, primaryData, secondaryData, grenadeData])

        const graph2Data = prepRemovalBreakdownData([s1, s2, s3, s4, gren, sec, prim], [strat1Weight, strat2Weight, strat3Weight, strat4Weight, grenadeWeight, secondaryWeight, primaryWeight])

        return [graph1Data, graph2Data]

    }, [strat1, strat2, strat3, strat4, primary, secondary, grenade, armor])

    return <div {...props} className={css`
        background: ${colors.lighter};
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        place-items: center;
        width: 100%;
        height: 100%;
        padding: 5em 0;
        overflow: auto;

        @media screen and (max-width: 1400px) {
            grid-column: span 2;
            flex-direction: row;
            padding: 1em;
        }

        @media screen and (max-width: 800px) {
            grid-column: span 1;
            flex-direction: column;
            padding: 1em;
        }

    `}>
        <div className={css`
            display: grid;
            grid-template: 18em 3em / 3em 30em;
            transform: translate(-1em,0);
        `}>
            <div className={css`
                place-self: center; 
                transform: rotate(-90deg);
                display: flex;
                justify-content: space-around;
                width: 22em;
            `}>
                <div className={css`
                    transform: translate(0, 0.5em);
                    opacity: 0.4;
                `}>short</div>
                <div className={css`
                    transform: translate(0, -0.5em);
                `}>Range</div>
                <div className={css`
                    transform: translate(0, 0.5em);
                    opacity: 0.4;
                `}>long</div>
            </div>
            <RangeRemovalMatrix data={rangeRemovalData} />
            <div></div>
            <div className={css`
                display: flex;
                justify-content: space-between;
                width: 100%;
                margin-top: 0.5em;
            `}>
                <div className={css`
                    transform: translate(0, -0.5em);
                    opacity: 0.4;
                `}>lights</div>
                <div className={css`
                    transform: translate(0, 0.5em);
                `}>Removal</div>
                <div className={css`
                    transform: translate(0, -0.5em);
                    opacity: 0.4;
                `}>heavies</div>
            </div>
        </div>

        <div className={css`
            display: grid;
            grid-template: 18em 3em / 3em 30em;
            transform: translate(-1.5em,0);
        `}>
            <div className={css`
                place-self: center; 
                transform: rotate(-90deg);
                display: flex;
                justify-content: space-around;
                width: 22em;
            `}>
                <div className={css`
                    transform: translate(0, 0.5em);
                `}>
                    Score
                </div>
            </div>
            <RemovalBreakdownChart data={removalBreakdownData} />
            <div></div>
            <div className={css`
                display: flex;
                justify-content: space-between;
                width: calc(100% - 40px);
                padding-left: 28px;
            `}>
                <div className={css`
                    transform: translate(0, -0.5em);
                    opacity: 0.4;
                `}>lights</div>
                <div className={css`
                    transform: translate(0, 0.5em);
                `}>Removal</div>
                <div className={css`
                    transform: translate(0, -0.5em);
                    opacity: 0.4;
                `}>heavies</div>
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



/* 

[
  {
    "removal": 0,               //coverage property :(array) element at index 0
    "<name>": 97,               // name is the name property
    "<name>Color": "hsl(104, 70%, 50%)",
    "burger": 47,
    "burgerColor": "hsl(308, 70%, 50%)",
    ...
  },
  {
    "removal": 1,               // property: coverage (array) element at index 1  (of first object)
    "<name1>": 96,               // name is the name property
    "<name1>Color": <color1>,     // color property
    "<name2>": 51,                  // properties of second object:....
    "<name2>Color": <color2>,
    ...
  },
  ...

*/