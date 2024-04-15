import { LoadoutsProvider } from './context/Loadouts'
import StrategemList from './components/StrategemList'
import LoadoutList from './components/LoadoutList'
import { css } from '@emotion/css'

export default function App() {
    return (
        <LoadoutsProvider >
            <div className={css` 
                display: flex;
            `}>

                <LoadoutList />
                <StrategemList />
            </div>
        </LoadoutsProvider>
    )
}