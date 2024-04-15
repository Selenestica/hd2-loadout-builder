import { useMemo, useState } from 'react'
import { strategemData } from '../data/hardcodedData'
import { css } from '@emotion/css'
import { colors } from '../data/constants'

export default function StrategemList({ handleClick }) {
    const [hoverState, setHoverState] = useState()

    const sortedStrats = useMemo(() => {
        strategemData.sort((a, b) => (
            a.color !== b.color ?
                a.color > b.color
                : a.type > b.type
        ))
        return strategemData

    },[strategemData])

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
                {sortedStrats.map(strat => {
                    return <div key={strat.id} className={css`
                        display: flex; 
                        align-items: center; 
                        gap: 1em;
                        padding-right: 1em;
                        cursor: pointer;
                        white-space: nowrap;
                        user-select: none;
                        
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
                    {hoverState ? JSON.stringify(hoverState) : null}
                </div>
            </div>
        </div>
    )
}