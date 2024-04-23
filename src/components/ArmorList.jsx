import { useMemo, useState } from 'react'
import { armorData } from '../data/hardcodedData'
import { css } from '@emotion/css'
import { colors } from '../data/constants'
import ArmorSVG from './ArmorSVG'

export default function ArmorList({ handleClick, filterArr }) {
    const [hoverState, setHoverState] = useState()

    const sortedArmors = useMemo(() => {
        armorData.sort((a, b) => (
            a.type === b.type ? a.name.localeCompare(b.name) :
                    (a.type === 'light' ? 1 : a.type === 'medium' ? 2 : 3) > (b.type === 'light' ? 1 : b.type === 'medium' ? 2 : 3)
        ))
        return armorData
    }, [armorData])

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
                {sortedArmors.map(armor => {
                    return <div key={armor.id} className={css`
                        display: flex; 
                        align-items: center; 
                        gap: 1em;
                        padding-right: 1em;
                        cursor: ${filterArr.includes(armor.id) ? 'unset' : 'pointer'};
                        opacity: ${filterArr.includes(armor.id) ? '0.5' : '1'};
                        white-space: nowrap;
                        user-select: none;
                        min-height: 3em;
                        
                        &:hover {
                            background: ${colors.lighter};
                        }
                    `}
                        onClick={() => filterArr.includes(armor.id) ? handleClick(null) : handleClick(armor.id)}
                        onPointerEnter={() => setHoverState(armor)}
                    >
                        <ArmorSVG armor={armor}/>
                        {armor.name}
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
                        align-items: start;
                    `}>

                        <div></div>
                        <div><b>{hoverState.name}</b></div>

                        <div>Type:</div>
                        <div>{hoverState.type}</div>

                        <div>Passive:</div>
                        <div>{hoverState.bonus}</div>

                        <div>Effect:</div>
                        <div>{hoverState.longText}</div>

                    </div>
                }

            </div>
        </div>
    )
}