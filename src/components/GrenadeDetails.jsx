import { css } from '@emotion/css'
import { colors } from '../data/constants'
import RemovalBar from './RemovalBar';
import RangeBar from './RangeBar';
import gearIcon from '../assets/gear.svg'
import { ReactSVG } from 'react-svg';
import { useState } from 'react';
import GenericModalLayout from './GenericModalLayout'
import ScoreOverrider from './ScoreOverrider'

export default function GrenadeDetails({ grenade, active, reset, ...props }) {
    const [settingsModal, setSettingsModal] = useState(false)


    return <>
        <div className={css`
                display: grid;
                grid-template: auto / auto 1fr;
                grid-gap: 0.2em 1em;
                cursor: pointer;
                align-items: center;
                border-bottom: 3px solid transparent;
                background: ${colors.darker};

                ${active ? `    
                    background: ${colors.darkGrey};
                    background-image: ${colors.backgroundStripes};
                    background-size: 20px 20px;
                ` : ''}
    
                padding: 0.4em;
                position: relative;
    
                &:hover {
                    border-bottom: 3px solid yellow;
                }
            `} {...props}>

            {grenade && <div className={css`
                position: absolute;
                top: 0;
                right: 0;
                width: 20px;
                height: 20px;
                display: grid;
                place-items: center;
                font-size: 0.7em;
                
                &:hover {
                    background: ${colors.lighter};
                }
            `} onClick={(e) => { e.stopPropagation(); reset(null) }}>X
            </div>}

            {grenade?.icon ?
                <img src={grenade?.icon} alt="" className={css`width: 3em; height: 3em; background: ${colors.lighter};`} />
                : <div className={css`width: 3em; height: 3em; background: ${colors.lighter};`} />
            }

            <div className={css`width: 90%;`}>{grenade?.name || 'Empty Grenade'}</div>

            {grenade &&
                <>
                    <RangeBar range={grenade.offensiveRange} special={grenade.special} />

                    <RemovalBar coverage={grenade.coverage} special={grenade.special} />
                </>
            }

            {grenade && <div className={css`
                position: absolute;
                top: 0;
                right: 20px;
                width: 20px;
                height: 20px;
                display: grid;
                place-items: center;
                font-size: 0.2em;
                
                &:hover {
                    background: ${colors.lighter};
                }
            `} onClick={(e) => { e.stopPropagation(); setSettingsModal(true) }}>
                <ReactSVG src={gearIcon} className={css`
                width: 12px;
                height: 12px;
                fill: white;
            `} />
            </div>}
        </div>
        {settingsModal && <GenericModalLayout closeModal={(e) => { { e.stopPropagation(); setSettingsModal(false) } }} >
            <section className={css`
                    display: grid;
                    width: 20em;
                    grid-template: auto / auto 1fr;
                    grid-gap: 0.2em 1em;
                    font-size: 0.5em;
                    padding-bottom: 1em;
                `}>
                <div className={css`grid-column: span 2; font-size: 1.5em;`}>
                    {grenade.name}
                </div>
                <RangeBar range={grenade.default.offensiveRange} />
                <RemovalBar coverage={grenade.default.coverage} />
                <ScoreOverrider objectStoreName={'grenadeOverrides'} id={grenade.id} defaultValues={grenade.default} />
                <button className={css`grid-column: span 2;`} onClick={(e) => { e.stopPropagation(); setSettingsModal(false) }}>Close</button>
            </section>
        </GenericModalLayout>}
    </>
}


