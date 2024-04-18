import { useMemo, useState } from 'react'
import { grenadeData } from '../data/hardcodedData'
import { css } from '@emotion/css'
import { colors } from '../data/constants'

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
            grid-template: auto / 20em 1fr;
        `}>
            <div className={css`
                background: ${colors.darkBlue};
                overflow-Y: auto;
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
                        <img src={grenade.icon} alt={''} />
                        {grenade.name}
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

                        <div>Fuse:</div>
                        <div>{hoverState.ingameStats.fuse}</div>

                        <div>Stagger:</div>
                        <div>{hoverState.stun ? 'Yes' : 'No'}</div>

                        <div>Range:</div>
                        <div className={css`
                            display: grid;
                            grid-template-columns: repeat(3, 1fr);
                            grid-gap: 2px;
                            height: 40%;
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

                        <div>Traits:</div>
                        <div>{hoverState.ingameStats.traits.join(', ')}</div>
                    </div>
                }

            </div>
        </div>
    )
}