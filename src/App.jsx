import { useState } from 'react'
import { strategemData } from './data/hardcodedData'
import { css } from '@emotion/css'

export default function App() {
    return (
        <div>
            {strategemData.map(strat => {
                return <div className={css`
                    display: flex; 
                `}>
                    <img src={strat.icon} alt={strat.name} />
                    {strat.name}
                </div>
            })}
        </div>
    )
}