import { useMemo, useState } from 'react'
import { grenadeData } from '../data/hardcodedData'
import { css } from '@emotion/css'
import { colors } from '../data/constants'
import ScoreOverrider from './ScoreOverrider'
import RangeBar from './RangeBar'
import RemovalBar from './RemovalBar'

export default function GrenadeList({ handleClick, filterArr }) {
    const [hoverState, setHoverState] = useState()

    const sortedGrenades = useMemo(() => {
        grenadeData.sort((a, b) => (
            a.name.split(' ').slice(1).join(' ').localeCompare(b.name.split(' ').slice(1).join(' '))
        ))
        return grenadeData

    }, [grenadeData])

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
                {sortedGrenades.map(grenade => {
                    return <div key={grenade.id} className={css`
                        display: flex; 
                        align-items: center; 
                        gap: 1em;
                        padding-right: 1em;
                        cursor: ${filterArr.includes(grenade.id) ? 'unset' : 'pointer'};
                        opacity: ${filterArr.includes(grenade.id) ? '0.5' : '1'};
                        white-space: nowrap;
                        user-select: none;
                        min-height: 3em;
                        
                        &:hover {
                            background: ${colors.lighter};
                        }
                    `}
                        onClick={() => filterArr.includes(grenade.id) ? handleClick(null) : handleClick(grenade.id)}
                        onPointerEnter={() => setHoverState(grenade)}
                    >
                        <img src={grenade.icon} alt={''} className={css`width: 3em; height: 3em;`} />
                        {grenade.name}
                    </div>
                })}
            </div >
            <div className={css`
                background: ${colors.lighter};
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

                        <div></div>
                        <div><b>{hoverState.name}</b></div>

                        <div>Damage:</div>
                        <div>{hoverState.ingameStats.damage}</div>

                        <div>Penetration:</div>
                        <div>{hoverState.ingameStats.penetration}</div>

                        <div>Radius:</div>
                        <div>{hoverState.ingameStats.radius}</div>

                        <div>Fuse:</div>
                        <div>{hoverState.ingameStats.fuse}</div>

                        <div>Stagger:</div>
                        <div>{hoverState.stun ? 'Yes' : 'No'}</div>

                        <RangeBar range={hoverState.offensiveRange}/>
                        <RemovalBar coverage={hoverState.coverage}/>

                        <div>Traits:</div>
                        <div>{hoverState.ingameStats.traits.join(', ')}</div>

                        {hoverState.id &&
                            <ScoreOverrider objectStoreName={'grenadeOverrides'} id={hoverState.id} defaultValues={hoverState} />
                        }
                    </div>
                }

            </div>
        </div>
    )
}