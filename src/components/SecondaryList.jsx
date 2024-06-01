import { useMemo, useState } from 'react'
import { secondaryWeaponData } from '../data/hardcodedData'
import { css } from '@emotion/css'
import { colors } from '../data/constants'
import ScoreOverrider from './ScoreOverrider'
import RangeBar from './RangeBar'
import RemovalBar from './RemovalBar'

export default function SecondaryList({ handleClick, filterArr }) {
    const [hoverState, setHoverState] = useState()

    const sortedSecondaries = useMemo(() => {
        const sorted = secondaryWeaponData.slice(0).sort((a, b) => {
            if (a.type !== b.type) {
                return a.type > b.type ? 1 : -1;
            } else {
                const aName = a.name.split(' ').slice(1).join(' ');
                const bName = b.name.split(' ').slice(1).join(' ');
                return aName.localeCompare(bName);
            }
        });
        return sorted
    }, [secondaryWeaponData])

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
                {sortedSecondaries.map(secondary => {
                    return <div key={secondary.id} className={css`
                        display: flex; 
                        align-items: center; 
                        gap: 1em;
                        padding-right: 1em;
                        cursor: ${filterArr.includes(secondary.id) ? 'unset' : 'pointer'};
                        opacity: ${filterArr.includes(secondary.id) ? '0.5' : '1'};
                        white-space: nowrap;
                        user-select: none;
                        min-height: 3em;
                        
                        &:hover {
                            background: ${colors.lighter};
                        }
                    `}
                        onClick={() => filterArr.includes(secondary.id) ? handleClick(null) : handleClick(secondary.id)}
                        onPointerEnter={() => setHoverState(secondary)}
                    >
                        <img src={secondary.icon} alt={''}  className={css`width: 3em; height: 3em;`} />
                        {secondary.name}
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

                        <div></div>
                        <div><b>{hoverState.name}</b></div>

                        <div>Type:</div>
                        <div>{hoverState.type}</div>

                        <div>Damage:</div>
                        <div>{hoverState.ingameStats.damage ? hoverState.ingameStats.damage : hoverState.ingameStats.dps + ' dps'}</div>

                        {hoverState.ingameStats.capacity &&
                            <>
                                <div>Capacity:</div>
                                <div>{hoverState.ingameStats.capacity}</div>
                            </>
                        }

                        {hoverState.ingameStats.fireLimit &&
                            <>
                                <div>Fire limit:</div>
                                <div>{hoverState.ingameStats.fireLimit}</div>
                            </>
                        }

                        {hoverState.ingameStats.fireRate &&
                            <>
                                <div>Fire rate:</div>
                                <div>{hoverState.ingameStats.fireRate}</div>
                            </>
                        }

                        <div>Recoil:</div>
                        <div>{hoverState.ingameStats.recoil}</div>

                        <div>Stagger:</div>
                        <div>{hoverState.stun ? 'Yes' : 'No'}</div>

                        <div>Handling:</div>
                        <div>{hoverState.sluggish ? 'Bad' : 'Normal'}</div>

                        <RangeBar range={hoverState.offensiveRange}/>
                        <RemovalBar coverage={hoverState.coverage}/>

                        <div>Traits:</div>
                        <div>{hoverState.ingameStats.traits.join(', ')}</div>

                        {hoverState.id &&
                            <ScoreOverrider objectStoreName={'secondaryOverrides'} id={hoverState.id} defaultValues={hoverState} />
                        }
                    </div>
                }

            </div>
        </div>
    )
}