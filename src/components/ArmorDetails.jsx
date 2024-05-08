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
                border-bottom: 3px solid transparent;
                background: ${colors.darker};
                
                ${active ? `    
                    background: ${colors.darkGrey};
                    background-image: ${colors.backgroundStripes};
                    background-size: 20px 20px;
                ` : ''}
    
                padding: 0.4em;
                position: relative;
    
                &:hover {
                    border-bottom: 3px solid yellow;
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
            `} onClick={(e) => {e.stopPropagation(); reset(null)}}>X
        </div>}

        {armor?.icon ?
            <ArmorSVG armor={armor} />
            : <div className={css`width: 3em; height: 3em; background: ${colors.lighter};`} />
        }

        <div className={css`width: 90%;`}>{armor?.name || 'Empty Armor'}</div>

        {armor &&
            <>
                <div>Bonus:</div>
                <div>{armor.bonus}</div>
            </>
        }

    </div>
}


