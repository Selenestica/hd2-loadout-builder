import { useMemo, useState } from 'react'
import { boosterData } from '../data/hardcodedData'
import { css } from '@emotion/css'
import { colors } from '../data/constants'

export default function BoosterList({ handleClick, filterArr }) {
    const [hoverState, setHoverState] = useState()

    const sortedBoosters = useMemo(() => {
        return boosterData.slice(0).sort((a, b) => a.name.localeCompare(b.name))
    }, [boosterData])

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
                {sortedBoosters.map(booster => {
                    return <div key={booster.id} className={css`
                        display: flex;
                        align-items: center;
                        gap: 1em;
                        padding-right: 1em;
                        cursor: ${filterArr.includes(booster.id) ? 'unset' : 'pointer'};
                        opacity: ${filterArr.includes(booster.id) ? '0.5' : '1'};
                        white-space: nowrap;
                        user-select: none;
                        min-height: 3em;

                        &:hover {
                            background: ${colors.lighter};
                        }
                    `}
                        onClick={() => filterArr.includes(booster.id) ? handleClick(null) : handleClick(booster.id)}
                        onPointerEnter={() => setHoverState(booster)}
                    >
                        <img src={booster.icon} alt={booster.name} className={css`width: 3em; height: 3em;`} />
                        {booster.name}
                    </div>
                })}
            </div>
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
                        align-items: start;
                    `}>
                        <div></div>
                        <div><b>{hoverState.name}</b></div>

                        <div>Effect:</div>
                        <div>{hoverState.description}</div>
                    </div>
                }
            </div>
        </div>
    )
}
