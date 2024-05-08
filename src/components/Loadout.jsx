import { css } from '@emotion/css'
import { colors } from '../data/constants'
import { strategemData, primaryWeaponData, secondaryWeaponData, grenadeData, armorData } from '../data/hardcodedData'
import ArmorSVG from './ArmorSVG'

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
    const arm = armorData.find(x => x.id === armor)

    return (
        <div className={css`
            background: ${active ? colors.darkGrey : colors.darker};
            border-top: 3px solid transparent;
            border-bottom: 3px solid transparent;
            transition: border ease 0.2s;

            &:hover {
                border-bottom: 3px solid yellow;
                cursor: pointer;
            }

            display: grid;
            align-items: center;
            grid-template: auto / auto 1fr min-content;
            grid-gap: 1em;
            padding: 0.4em;
            padding-left: 1em;
            overflow: hidden;

            img, > div > div{
                background: ${active ? colors.grey : colors.lighter};
                width: 3em;
                height: 3em;
                ${active ? 'border: 1px solid black;' : ''}
            }

            @media screen and (max-width: 400px) {
                grid-template: min-content auto / min-content min-content;
            }

            ${active ? `
                background-image: ${colors.backgroundStripes};
                background-size: 20px 20px;
            ` : ''}
        `} {...props}>
            <div className={css`
                @media screen and (max-width: 400px) {
                    grid-column: span 2;
                }
                ${active ? `
                background: ${colors.grey}; padding: 0.2em;
                transform: translate(-0.2em, 0);
                ` : ''}
            `}>
                {name}
            </div>
            <div className={css`
                display: flex;
                gap: 2px;
                justify-content: end;
            `}>
                {s1 ? <img src={s1?.icon} alt="" title={s1?.name} /> : <div />}
                {s2 ? <img src={s2?.icon} alt="" title={s2?.name} /> : <div />}
                {s3 ? <img src={s3?.icon} alt="" title={s3?.name} /> : <div />}
                {s4 ? <img src={s4?.icon} alt="" title={s4?.name} /> : <div />}
            </div>

            <div className={css`
                display: flex;
                gap: 2px;
            `}>
                {prim ? <img src={prim?.icon} alt={''} title={prim?.name} /> : <div />}
                {sec ? <img src={sec?.icon} alt={''} title={sec?.name} /> : <div />}
                {gren ? <img src={gren?.icon} alt={''} title={gren?.name} /> : <div />}
                {arm ? <ArmorSVG armor={arm} title={arm?.name} color={active ? colors.grey : undefined} /> : <div />}
            </div>
        </div >
    )
}