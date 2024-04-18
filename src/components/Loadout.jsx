import { css } from '@emotion/css'
import { colors } from '../data/constants'
import { strategemData, primaryWeaponData, secondaryWeaponData } from '../data/hardcodedData'

export default function Loadout({ active, data, setLoadouts, ...props }) {

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
    const primaryData = primaryWeaponData.find(x => x.id === primary)
    const secondaryData = secondaryWeaponData.find(x => x.id === secondary)

    return (
        <div className={css`
            background: ${active ? colors.lighter : colors.darkBlue};

            &:hover {
                background: ${colors.lighter};
                cursor: pointer;
            }
            
            display: grid;
            align-items: center;
            grid-template: auto / 11em 1fr min-content;
            grid-gap: 1em;
            padding: 0.5em;
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
                {strat1Data ? <img src={strat1Data?.icon} alt="" title={strat1Data?.name}/> : <div />}
                {strat2Data ? <img src={strat2Data?.icon} alt="" title={strat2Data?.name}/> : <div />}
                {strat3Data ? <img src={strat3Data?.icon} alt="" title={strat3Data?.name}/> : <div />}
                {strat4Data ? <img src={strat4Data?.icon} alt="" title={strat4Data?.name}/> : <div />}
            </div>

            <div className={css`
                display: flex;
            `}>
                 {primaryData ? <img src={primaryData?.icon} alt={''} title={primaryData?.name}/> : <div />}
                 {secondaryData ? <img src={secondaryData?.icon} alt={''} title={secondaryData?.name}/> : <div />}
            </div>
        </div >
    )
}