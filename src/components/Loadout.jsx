import { useState, useEffect } from 'react'
import { css } from '@emotion/css'
import { colors } from '../data/constants'
import { strategemData } from '../data/hardcodedData'
import { useCallback } from 'react'
import { deleteLoadout } from '../data/indexedDB'

export default function Loadout({ data, setLoadouts, ...props }) {

    const {
        id,
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

    const handleDeleteLoadout = useCallback(async () => {
        try {
            const res = await deleteLoadout(id)
            console.log('deleteresult: ', res)
            setLoadouts(current => current.filter(loadout => loadout.id !== id))
        } catch (e) {
            console.log(e)
        }
    }, [id, setLoadouts])

    return (
        <div className={css`
            background: ${colors.darkBlue};

            &:hover {
                background: ${colors.lightBlue};
                cursor: pointer;
            }
            
            display: grid;
            align-items: center;
            grid-template: auto / 15em 1fr min-content;
            grid-gap: 1em;
            padding: 1em;
            overflow: auto;

            img, div > div{
                background: black;
                width: 3em;
                height: 3em;
            }
        `} {...props}>
            <div className={css`
                white-space: nowrap;
            `}>
                {name}
            </div>
            <div className={css`
                display: flex;
                gap: 2px;
            `}>
                {strat1Data ? <img src={strat1Data?.icon} alt="" /> : <div />}
                {strat2Data ? <img src={strat2Data?.icon} alt="" /> : <div />}
                {strat3Data ? <img src={strat3Data?.icon} alt="" /> : <div />}
                {strat4Data ? <img src={strat4Data?.icon} alt="" /> : <div />}
            </div>
            <div className={css`
                display: flex;
            `}>
                {/* <button>
                    edit
                </button>
                <button onClick={handleDeleteLoadout}>
                    delete
                </button> */}
            </div>
        </div >
    )
}