import { createContext, useEffect, useState } from 'react'
import { addObject, updateObject, deleteObject, getAll } from '../data/indexedDB'

const OverridesContext = createContext()
export default OverridesContext

export function OverridesProvider({ ...props }) {
    const [overrides, setOverrides] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const initOverrides = async () => {
            try {
                const stratOverrides = await getAll('stratOverrides')
                const primaryOverrides = await getAll('primaryOverrides')
                const secondaryOverrides = await getAll('secondaryOverrides')
                const grenadeOverrides = await getAll('grenadeOverrides')
                setOverrides({ stratOverrides, primaryOverrides, secondaryOverrides, grenadeOverrides })
            } catch (e) {
                console.error('Failed to load overrides:', e)
            }
            setLoading(false)
        }
        initOverrides()
    }, [])

    useEffect(() => { console.log('Overrides: ', overrides) }, [overrides])

    const handleAdd = (store, object) => {
        addObject(store, object).then(() => {
            setOverrides(prev => {
                const newOverrides = structuredClone(prev[store])
                newOverrides.push(object)
                const newObj = { ...prev }
                newObj[store] = newOverrides
                console.log(newObj)
                return newObj
            })
        })
    }

    const handleUpdate = (store, updatedObject) => {
        updateObject(store, updatedObject).then(() => {
            setOverrides(prev => {
                const updated = prev[store]?.map(x => x.id === updatedObject.id ? updatedObject : x) || []
                const newObj = { ...prev }
                newObj[store] = updated
                return newObj
            })
        })
    }

    const handleDelete = (store, id) => {
        deleteObject(store, id).then(() => {
            setOverrides(prev => {
                const filtered = prev[store]?.filter(x => x.id !== id) || []
                const newObj = { ...prev }
                newObj[store] = filtered
                return newObj
            })
        })
    }

    return (
        <OverridesContext.Provider
            value={{
                overrides,
                loading,
                setLoading,
                handleAdd,
                handleUpdate,
                handleDelete,
            }}
            {...props}
        >
            {props.children}
        </OverridesContext.Provider>
    );
}