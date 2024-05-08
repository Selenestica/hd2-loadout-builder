import { ReactSVG } from "react-svg"
import { css } from "@emotion/css"
import { colors } from "../data/constants"

export default function ArmorSVG({ armor, color, ...props }) {

    return <span className={css`
            background: ${color ? color : colors.lighter}; 
            width: 3em; 
            height: 3em;
            position: relative;
            ${color ? 'border: 1px solid black;' : ''}
        `
    }{...props}>
        <ReactSVG
            src={armor?.icon}
            alt=""
            className={css`fill: white; width: 1.3em; height: auto; position: absolute; top: 3px; left: 50%; transform: translate(-50%, 0);`}
        />

        <div className={css`
            color: white;
            bottom: -2px;
            position: absolute; left: 50%; transform: translate(-50%, 0);
            font-weight: bold;
        `
        }>
            {armor.abbr}
        </div>
    </span>

}