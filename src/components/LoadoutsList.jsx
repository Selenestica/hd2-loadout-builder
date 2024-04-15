import { useState } from 'react'
import { strategemData } from '../data/hardcodedData'
import { css } from '@emotion/css'
import { colors } from '../data/constants'

export default function LoadoutsList({ handleClick }) {
    const [hoverState, setHoverState] = useState({})

    return (
        <div className={css`
            display: grid;
            width: 100%;
            grid-template: auto / 20em 1fr;
        `}>
            <div className={css`
                background: ${colors.darkBlue};
                max-height: 80vh;
                overflow-Y: auto;
            `}>
                {strategemData.toSorted((a, b) => (
                    a.color !== b.color ?
                        a.color > b.color
                        : a.type > b.type
                )).map(strat => {
                    return <div className={css`
                        display: flex; 
                        align-items: center; 
                        gap: 1em;
                        padding-right: 1em;
                        cursor: pointer;
                        white-space: nowrap;
                        
                        &:hover {
                            background: ${colors.lightBlue};
                        }
                    `}
                        onClick={() => handleClick(strat)}
                        onPointerEnter={() => setHoverState(strat)}
                    >
                        <img src={strat.icon} alt={strat.name} />
                        {strat.name}
                    </div>
                })}
            </div >
            <div className={css`
                padding: 1em;
                background: ${colors.lighter};
                width: 20em;
                display: grid;
                place-items: center;
            `}>
                <div>
                    {JSON.stringify(hoverState)}
                </div>
            </div>
        </div>
    )
}