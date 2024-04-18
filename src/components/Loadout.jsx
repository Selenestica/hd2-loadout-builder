import { css } from '@emotion/css'
import { colors } from '../data/constants'
import { strategemData, primaryWeaponData, secondaryWeaponData, grenadeData, armorData } from '../data/hardcodedData'

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

    const s1 = strategemData.find(x => x.id === strat1)
    const s2 = strategemData.find(x => x.id === strat2)
    const s3 = strategemData.find(x => x.id === strat3)
    const s4 = strategemData.find(x => x.id === strat4)
    const prim = primaryWeaponData.find(x => x.id === primary)
    const sec = secondaryWeaponData.find(x => x.id === secondary)
    const gren = grenadeData.find(x => x.id === grenade)

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
                {s1 ? <img src={s1?.icon} alt="" title={s1?.name}/> : <div />}
                {s2 ? <img src={s2?.icon} alt="" title={s2?.name}/> : <div />}
                {s3 ? <img src={s3?.icon} alt="" title={s3?.name}/> : <div />}
                {s4 ? <img src={s4?.icon} alt="" title={s4?.name}/> : <div />}
            </div>

            <div className={css`
                display: flex;
            `}>
                 {prim ? <img src={prim?.icon} alt={''} title={prim?.name}/> : <div />}
                 {sec ? <img src={sec?.icon} alt={''} title={sec?.name}/> : <div />}
                 {gren ? <img src={gren?.icon} alt={''} title={gren?.name}/> : <div />}
            </div>
        </div >
    )
}