import { css } from "@emotion/css"
import { colors } from "../data/constants"

export default function RangeBar({ range, special, ...props }) {
    
    const highColor = special ? 'rgb(80,120,200)' : colors.gold
    const normalColor = special ? 'skyblue' : 'white'

    return (<>
        <div>Range:</div>
        <div className={css`
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            grid-gap: 2px;
            height: 50%;
            background: ${colors.grey};
            border-radius: 15px;
            overflow: hidden;
        `}>
            {range.map((el, i) => <div key={i} className={css`
                width: 100%;
                height: ${el * 100}%;
                background: ${el > 1 ? highColor :  normalColor};
                align-self: center;
            `} title={i === 0 ? 'short' : i === 1 ? 'medium' : i === 2 ? 'long' : ''} />)}
        </div>
    </>)
}