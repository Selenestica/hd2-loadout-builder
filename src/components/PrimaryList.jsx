import { useMemo, useState } from 'react'
import { primaryWeaponData } from '../data/hardcodedData'
import { css } from '@emotion/css'
import { colors } from '../data/constants'

export default function PrimaryList({ handleClick, filterArr }) {
    const [hoverState, setHoverState] = useState()

    const sortedPrimaries = useMemo(() => {
        primaryWeaponData.sort((a, b) => (

            a.type !== b.type ?
                a.type > b.type
                : a.name.split(' ').slice(1).join(' ').localeCompare(b.name.split(' ').slice(1).join(' '))
        ))
        return primaryWeaponData

    }, [primaryWeaponData])

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
                background: black;
            }
    
            @media screen and (max-width: 800px) {
                grid-column: span 1;
                position: fixed;
                right: 0;
                height: 95svh;
                width: 40em;
                max-width: 95svw;
                background: black;
            }
        `}>
            <div className={css`
                background: ${colors.darkBlue};
                overflow-Y: auto;
            `}>
                {sortedPrimaries.map(primary => {
                    return <div key={primary.id} className={css`
                        display: flex; 
                        align-items: center; 
                        gap: 1em;
                        padding-right: 1em;
                        cursor: ${filterArr.includes(primary.id) ? 'unset' : 'pointer'};
                        opacity: ${filterArr.includes(primary.id) ? '0.5' : '1'};
                        white-space: nowrap;
                        user-select: none;
                        min-height: 3em;
                        
                        &:hover {
                            background: ${colors.lighter};
                        }
                    `}
                        onClick={() => filterArr.includes(primary.id) ? handleClick(null) : handleClick(primary.id)}
                        onPointerEnter={() => setHoverState(primary)}
                    >
                        <img src={primary.icon} alt={''} className={css`width: 3em; height: 3em;`} />
                        {primary.name}
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
                        padding: 1em;
                        display: grid;
                        min-width: 10em;
                        width: 100%;
                        max-width: calc(100% - 3em);
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

                        <div>Traits:</div>
                        <div>{hoverState.ingameStats.traits.join(', ')}</div>
                    </div>
                }

            </div>
        </div>
    )
}