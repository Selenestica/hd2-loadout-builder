import { css } from "@emotion/css"
import { colors } from "../data/constants"

export default function RemovalBar({ coverage, special, ...props }) {

    const highColor = special ? 'rgb(80,120,200)' : colors.gold
    const normalColor = special ? 'skyblue' : 'white'

    return (<>
        <div>Removal:</div>
        <div className={css`
            display: grid;
            grid-template-columns: repeat(5, 1fr);
            grid-gap: 2px;
            height: 50%;
            background: ${colors.grey};
            border-radius: 15px;
            overflow: hidden;
        `}>
            {coverage.map((el, i) => <div key={i} className={css`
                width: 100%;
                height: ${el * 100}%;
                align-self: center;
                background: ${el > 1 ? highColor :  normalColor};
            `} />)}
        </div>

        <div></div>
        <div className={css`
            display: flex;
            justify-content: space-between;
            color: ${colors.lighter};
        `}>
            <div>
                {'lights'}
            </div>
            <div>
                {'heavies'}
            </div>
        </div>
    </>)
}