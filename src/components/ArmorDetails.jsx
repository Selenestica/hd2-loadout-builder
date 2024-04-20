import { css } from '@emotion/css'
import { colors } from '../data/constants'
import ArmorSVG from './ArmorSVG'

export default function ArmorDetails({ armor, active, reset, ...props }) {

    return <div className={css`
                display: grid;
                grid-template: min-content / auto 1fr;
                grid-gap: 0.2em 1em;
                cursor: pointer;
                align-items: center;
                background: ${active ? colors.lighter : colors.darkBlue};
                padding: 0.4em;
                text-transform: capitalize;
                position: relative;

                &:hover {
                    background: ${colors.lighter};
                }
            `} {...props}>

        {armor && <div className={css`
                position: absolute;
                top: 0;
                right: 0;
                width: 20px;
                height: 20px;
                display: grid;
                place-items: center;
                font-size: 0.7em;
                
                &:hover {
                    background: ${colors.lighter};
                }
            `} onClick={(e) => {e.stopPropagation(); reset(null)}}>&#x2718;
        </div>}

        {armor?.icon ?
            <ArmorSVG armor={armor} />
            : <div className={css`width: 3em; height: 3em; background: ${colors.lighter};`} />
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


