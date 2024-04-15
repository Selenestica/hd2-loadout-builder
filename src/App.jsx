import react, { useState } from 'react'
//import { strategemData } from './data/hardcodedData'
//import { css } from '@emotion/css'
import { LoadoutsProvider } from './context/Loadouts'
import LoadoutsList from './components/LoadoutsList'

export default function App() {
    return (
        <div>
            <LoadoutsProvider>
                <LoadoutsList />
            </LoadoutsProvider>
        </div>
    )
}