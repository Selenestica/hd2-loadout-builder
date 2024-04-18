import { css } from '@emotion/css'
import { colors } from '../data/constants'
import ArmorSVG from './ArmorSVG'

export default function ArmorDetails({ armor, active, ...props }) {

    return <div className={css`
                display: grid;
                grid-template: min-content / auto 1fr;
                grid-gap: 0.2em 1em;
                cursor: pointer;
                align-items: center;
                background: ${active ? colors.lighter : colors.darkBlue};
                padding: 0.4em;
                text-transform: capitalize;

                &:hover {
                    background: ${colors.lighter};
                }
            `} {...props}>

        {armor?.icon ?
            <ArmorSVG armor={armor} />
            : <div className={css`width: 3em; height: 3em; background: black;`} />
        }

        <div>{armor?.name || 'Empty Armor'}</div>

        {armor &&
            <>
                <div>Bonus:</div>
                <div>{armor.bonus}</div>
            </>
        }

    </div>
}


