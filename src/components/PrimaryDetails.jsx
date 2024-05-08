import { css } from '@emotion/css'
import { colors } from '../data/constants'
import RemovalBar from './RemovalBar';
import RangeBar from './RangeBar';

export default function PrimaryDetails({ primary, active, reset, ...props }) {

    return <div className={css`
                display: grid;
                grid-template: auto / auto 1fr;
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

        {primary && <div className={css`
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
            `} onClick={(e) => { e.stopPropagation(); reset(null) }}>X
        </div>}

        {primary?.icon ?
            <img src={primary?.icon} alt="" className={css`width: 3em; height: 3em; background: ${colors.lighter};`} />
            : <div className={css`width: 3em; height: 3em; background: ${colors.lighter};`} />
        }

        <div className={css`width: 90%;`}>{primary?.name || 'Empty Primary'}</div>

        {primary &&
            <>
                <RangeBar range={primary.offensiveRange} />

                <RemovalBar coverage={primary.coverage} />
            </>
        }

    </div>
}


