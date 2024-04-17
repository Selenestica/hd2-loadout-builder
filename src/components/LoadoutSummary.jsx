import { css } from "@emotion/css"
import { useMemo } from "react"
import { colors } from "../data/constants"
import RangeRemovalMatrix from "./RangeRemovalMatrix"

export default function LoadoutSummary({ strat1, strat2, strat3, strat4, ...props }) {

    const rangeRemovalData = useMemo(() => {
        const arr = [strat1, strat2, strat3, strat4].filter(x => !!x)
        const output = []

        for (const coverage of [4, 3, 2, 1, 0]) {
            const cov = { id: coverage, data: [] }
            for (const range of [0, 1, 2]) {
                const sum = arr
                    .map(strat => strat.offensiveRange[range] * strat.coverage[coverage])
                    ?.reduce(((a, b) => a + b),0)
                cov.data.push({
                    x: range,
                    y: sum || 0
                })
            }
            output.push(cov)
        }

        return output
    }, [strat1, strat2, strat3, strat4])


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

