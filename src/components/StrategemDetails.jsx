import { css } from '@emotion/css'
import { colors } from '../data/constants'
import RemovalBar from './RemovalBar';
import RangeBar from './RangeBar';
import gearIcon from '../assets/gear.svg'
import { ReactSVG } from 'react-svg';
import { useState } from 'react';
import GenericModalLayout from './GenericModalLayout'
import ScoreOverrider from './ScoreOverrider'

export default function StrategemDetails({ strat, active, reset, ...props }) {
    const [settingsModal, setSettingsModal] = useState(false)


    return (<>
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
            {strat && <div className={css`
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

            {strat?.icon ?
                <img src={strat?.icon} alt="" className={css`width: 3em; height: 3em; background: black;`} />
                : <div className={css`width: 3em; height: 3em; background: black;`} />
            }

            <div className={css`width: 90%;`}>{strat?.name || 'Empty Stratagem'}</div>

            {strat &&
                <>
                    <div>Uptime:</div>
                    <div>{strat.uptime}</div>

                    <RangeBar range={strat.offensiveRange} special={strat.special} />

                    <RemovalBar coverage={strat.coverage} special={strat.special} />
                </>
            }

            {strat && <div className={css`
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
                    {strat.name}
                </div>

                <RangeBar range={strat.default.offensiveRange} />
                <RemovalBar coverage={strat.default.coverage} />
                <ScoreOverrider objectStoreName={'stratOverrides'} id={strat.id} defaultValues={strat.default} />
                <button className={css`grid-column: span 2;`} onClick={(e) => { e.stopPropagation(); setSettingsModal(false) }}>Close</button>
            </section>
        </GenericModalLayout>}
    </>
    )
}