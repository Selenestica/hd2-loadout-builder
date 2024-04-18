import { createContext, useEffect, useState } from 'react'
import { addLoadout, updateLoadout, deleteLoadout, loadLoadouts } from '../data/indexedDB'

const LoadoutsContext = createContext()
export default LoadoutsContext

export function LoadoutsProvider({...props}) {
    const [loadouts, setLoadouts] = useState([])
    const [selectedLoadout, setSelectedLoadout] = useState()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        loadLoadouts().then(result => {
            setLoadouts(result)
            setLoading(false)
        }).catch(error => {
            console.error('Failed to load loadouts:', error)
            setLoading(false)
        })
    }, [])

    const handleAdd = loadout => {
        addLoadout(loadout).then(() => {
            setLoadouts([...loadouts, loadout])
        })
    }

    const handleUpdate = updatedLoadout => {
        updateLoadout(updatedLoadout).then(() => {
            const updatedLoadouts = loadouts.map(loadout =>
                loadout.id === updatedLoadout.id ? updatedLoadout : loadout
            )
            setLoadouts(updatedLoadouts)
        })
    }

    const handleDelete = id => {
        deleteLoadout(id).then(() => {
            const filteredLoadouts = loadouts.filter(loadout => loadout.id !== id)
            setLoadouts(filteredLoadouts)
        })
    }

    return (
        <LoadoutsContext.Provider
            value={{
                loadouts,
                setLoadouts,
                selectedLoadout,
                setSelectedLoadout,
                loading,
                setLoading,
                handleAdd,
                handleUpdate,
                handleDelete,
            }}
            {...props}
        >
            {props.children}
        </LoadoutsContext.Provider>
    );
}