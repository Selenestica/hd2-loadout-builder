import { useMemo, useState } from 'react'
import { strategemData } from '../data/hardcodedData'
import { css } from '@emotion/css'
import { colors } from '../data/constants'
import ScoreOverrider from './ScoreOverrider'

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
            grid-template: auto / 1fr 1fr;
            overflow: auto;

            @media screen and (max-width: 1400px) {
                grid-column: span 2;
                position: fixed;
                right: 0;
                height: 95svh;
                width: 40em;
            }
    
            @media screen and (max-width: 800px) {
                grid-column: span 1;
                position: fixed;
                right: 0;
                height: 95svh;
                width: 40em;
                max-width: 95svw;
            }
        `}>
            <div className={css`
                background: ${colors.darkBlue};
                overflow-Y: auto;
                
                @media screen and (max-width: 1400px) {
                    background: ${colors.darkBlueSolid};
                }

                @media screen and (max-width: 800px) {
                   grid-column: span 2;
                }
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
                        <img src={strat.icon} alt={strat.name} className={css`width: 3em; height: 3em;`} />
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

                @media screen and (max-width: 1400px) {
                    background: ${colors.grey};
                }

                @media screen and (max-width: 800px) {
                    display: none;
                }
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
                            height: ${el * 100}%;
                            background: ${el > 1 ? colors.gold : 'white'};
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
                            height: ${el * 100}%;
                            align-self: center;
                            background: ${el > 1 ? colors.gold : 'white'};
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
                        {/* {hoverState.id &&
                            <ScoreOverrider equipmentType={'strat'} id={hoverState.id} />
                        } */}
                    </div>
                }

            </div>
        </div>
    )
}