import { css } from '@emotion/css'
import { colors } from '../data/constants'

export default function PrimaryDetails({ primary, active, reset, ...props }) {

    return <div className={css`
                display: grid;
                grid-template: auto / auto 1fr;
                grid-gap: 0.2em 1em;
                cursor: pointer;
                align-items: center;
                background: ${active ? colors.lighter : colors.darkBlue};
                padding: 0.4em;
                position: relative;

                &:hover {
                    background: ${colors.lighter};
                }
            `} {...props}>

        {primary && <div className={css`
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
            `} onClick={(e) => {e.stopPropagation(); reset(null)}}>X
        </div>}

        {primary?.icon ?
            <img src={primary?.icon} alt="" className={css`width: 3em; height: 3em; background: ${colors.lighter};`} />
            : <div className={css`width: 3em; height: 3em; background: ${colors.lighter};`} />
        }

        <div className={css`width: 90%;`}>{primary?.name || 'Empty Primary'}</div>

        {primary &&
            <>
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
                    {primary.offensiveRange.map((el, i) => <div key={i} className={css`
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
                    {primary.coverage.map((el, i) => <div key={i} className={css`
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
            </>
        }

    </div>
}


