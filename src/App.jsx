import { LoadoutsProvider } from './context/Loadouts'
import StrategemList from './components/StrategemList'
import LoadoutList from './components/LoadoutList'

export default function App() {
    return (
        <LoadoutsProvider>
            <LoadoutList />
            <StrategemList />
        </LoadoutsProvider>
    )
}