import { css } from '@emotion/css'
import { useCallback } from 'react'
import { useState } from 'react'
import { colors } from '../data/constants'
import { strategemData } from '../data/hardcodedData'

export default function StrategemDetails({ strat }) {

    return (
        <div className={css`
            display: grid;
            grid-template: auto / auto 1fr;
            grid-gap: 0.5em 1em;
            //place-items: start;
            align-items: center;
            background: ${colors.lighter};
            padding: 0.4em;
        `}>
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
                        height: 40%;
                        background: ${colors.darkBlue};
                        border-radius: 15px;
                        overflow: hidden;
                    `}>
                        {strat.offensiveRange.map(el => <div className={css`
                            width: 100%;
                            height: ${el * 100}%;
                            background: white;
                        `}/>)}
                    </div>
                </>
            }

        </div>
    )
}