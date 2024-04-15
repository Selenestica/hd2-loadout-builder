import { useState, useEffect } from 'react'
import { css } from '@emotion/css'
import { colors } from '../data/constants'
import { strategemData } from '../data/hardcodedData'

export default function Loadout({ data }) {

    const {
        name,
        strat1,
        strat2,
        strat3,
        strat4,
        primary,
        secondary,
        grenade,
        armor,
    } = data

    const strat1Data = strategemData.find(x => x.id === strat1)
    const strat2Data = strategemData.find(x => x.id === strat2)
    const strat3Data = strategemData.find(x => x.id === strat3)
    const strat4Data = strategemData.find(x => x.id === strat4)

    return (
        <div className={css`
            background: ${colors.darkBlue};
            width: 100%;
            display: grid;
            grid-template: auto / auto 1fr min-content;
            grid-gap: 1em;
            padding: 5px;

            img, div > div{
                background: black;
                width: 3em;
                height: 3em;
            }
        `}>
            <div>{name}</div>
            <div className={css`
                display: grid;
                grid-template-columns: 1fr 1fr 1fr 1fr;
                grid-gap: 2px;
            `}>
                {strat1Data ? <img src={strat1Data?.icon} alt="" /> : <div/>}
                {strat2Data ? <img src={strat2Data?.icon} alt="" /> : <div/>}
                {strat3Data ? <img src={strat3Data?.icon} alt="" /> : <div/>}
                {strat4Data ? <img src={strat4Data?.icon} alt="" /> : <div/>}
            </div>
            <div className={css`
                display: flex;
            `}>
                <button>edit</button>
                <button>delete</button>
            </div>
        </div >
    )
}