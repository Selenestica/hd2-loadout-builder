import { css } from '@emotion/css'
import { colors } from '../data/constants'

export default function StrategemDetails({ strat, active, ...props }) {

    return (
        <div className={css`
            display: grid;
            grid-template: auto / auto 1fr;
            grid-gap: 0.2em 1em;
            cursor: pointer;
            align-items: center;
            background: ${active ? colors.lighter : colors.darkBlue};
            padding: 0.4em;
        `} {...props}>
            {strat?.icon ?
                <img src={strat?.icon} alt="" className={css`width: 3em; height: 3em; background: black;`} />
                : <div className={css`width: 3em; height: 3em; background: black;`} />
            }

            <div>{strat?.name || 'Empty Stratagem'}</div>

            {strat &&
                <>
                    <div>Uptime:</div>
                    <div>{strat.uptime}</div>

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
                        {strat.offensiveRange.map(el => <div className={css`
                            width: 100%;
                            height: ${el * el * 100}%;
                            background: white;
                            align-self: center;
                        `} />)}
                    </div>

                    <div>Coverage:</div>
                    <div className={css`
                        display: grid;
                        grid-template-columns: repeat(5, 1fr);
                        grid-gap: 2px;
                        height: 50%;
                        background: ${colors.lighter};
                        border-radius: 15px;
                        overflow: hidden;
                    `}>
                        {strat.coverage.map(el => <div className={css`
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
                            {'light armor'}
                        </div>
                        <div>
                            {'heavy armor'}
                        </div>
                    </div>
                </>
            }

        </div>
    )
}