import { useMemo, useState } from 'react'
import { strategemData } from '../data/hardcodedData'
import { css } from '@emotion/css'
import { colors } from '../data/constants'

export default function StrategemList({ handleClick, filterArr }) {
    const [hoverState, setHoverState] = useState()

    const sortedStrats = useMemo(() => {
        strategemData.sort((a, b) => (
            a.color !== b.color ?
                a.color > b.color
                : a.type > b.type
        ))
        return strategemData

    }, [strategemData])

    return (
        <div className={css`
            display: grid;
            width: 100%;
            grid-template: auto / 20em 1fr;
        `}>
            <div className={css`
                background: ${colors.darkBlue};
                overflow-Y: auto;
            `}>
                {sortedStrats.map(strat => {
                    return <div key={strat.id} className={css`
                        display: flex; 
                        align-items: center; 
                        gap: 1em;
                        padding-right: 1em;
                        cursor: ${filterArr.includes(strat.id) ? 'unset' : 'pointer'};
                        opacity: ${filterArr.includes(strat.id) ? '0.5' : '1'};
                        white-space: nowrap;
                        user-select: none;
                        
                        &:hover {
                            background: ${colors.lighter};
                        }
                    `}
                        onClick={() => filterArr.includes(strat.id) ? handleClick(null) : handleClick(strat.id)}
                        onPointerEnter={() => setHoverState(strat)}
                    >
                        <img src={strat.icon} alt={strat.name} />
                        {strat.name}
                    </div>
                })}
            </div >
            <div className={css`
                background: ${colors.lighter};
                width: 100%;
                display: grid;
                place-items: start;
                padding: 1em;
            `}>
                {hoverState &&
                    <div className={css`
                        display: grid;
                        width: 100%;
                        max-width: 30em;
                        grid-template: auto / auto 1fr;
                        grid-gap: 0.2em 1em;
                        align-items: center;
                    `}>
                        <div>Type:</div>
                        <div>{hoverState.type}</div>

                        <div>Uptime:</div>
                        <div>{hoverState.uptime}</div>

                        <div>Range:</div>
                        <div className={css`
                            display: grid;
                            grid-template-columns: repeat(3, 1fr);
                            grid-gap: 2px;
                            height: 50%;
                            background: ${colors.lighter};
                            border-radius: 15px;
                            overflow: hidden;
                        `}>
                            {hoverState.offensiveRange.map((el, i) => <div key={i} className={css`
                            width: 100%;
                            height: ${el * el * 100}%;
                            background: white;
                            align-self: center;
                        `} title={i === 0 ? 'short' : i === 1 ? 'medium' : i === 2 ? 'long' : ''} />)}
                        </div>

                        <div>Removal:</div>
                        <div className={css`
                            display: grid;
                            grid-template-columns: repeat(5, 1fr);
                            grid-gap: 2px;
                            height: 50%;
                            background: ${colors.lighter};
                            border-radius: 15px;
                            overflow: hidden;
                        `}>
                            {hoverState.coverage.map((el, i) => <div key={i} className={css`
                            width: 100%;
                            height: ${el * el * 100}%;
                            align-self: center;
                            background: white;
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
                    </div>
                }

            </div>
        </div>
    )
}