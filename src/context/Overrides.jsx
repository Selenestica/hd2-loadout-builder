import { createContext, useEffect, useState, useContext, useMemo, useCallback } from 'react'
import { addObject, updateObject, deleteObject, getAll } from '../data/indexedDB'
import { strategemData, primaryWeaponData, secondaryWeaponData, grenadeData, armorData } from '../data/hardcodedData'
import LoadoutsContext from './Loadouts'

const OverridesContext = createContext()
export default OverridesContext

export function OverridesProvider({ ...props }) {

    const { selectedLoadout } = useContext(LoadoutsContext)

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

    const getFinalData = useCallback((id, type) => {
        if (type === 'strat1' || type === 'strat2' || type === 'strat3' || type === 'strat4') {
            const defaultData = structuredClone(strategemData.find(x => x.id === id))
            const foundOverride = structuredClone(overrides.stratOverrides.find(x => x.id === id))
            return !!foundOverride ? { ...defaultData, ...foundOverride, special: true, default: defaultData } : {...defaultData, default: defaultData  }
        } else if (type === 'primary') {
            const defaultData = structuredClone(primaryWeaponData.find(x => x.id === id))
            const foundOverride = structuredClone(overrides.primaryOverrides.find(x => x.id === id))
            return !!foundOverride ? { ...defaultData, ...foundOverride, special: true, default: defaultData  } : {...defaultData, default: defaultData }
        } else if (type === 'secondary') {
            const defaultData = structuredClone(secondaryWeaponData.find(x => x.id === id))
            const foundOverride = structuredClone(overrides.secondaryOverrides.find(x => x.id === id))
            return !!foundOverride ? { ...defaultData, ...foundOverride, special: true, default: defaultData  } : {...defaultData, default: defaultData }
        } else if (type === 'grenade') {
            const defaultData = structuredClone(grenadeData.find(x => x.id === id))
            const foundOverride = structuredClone(overrides.grenadeOverrides.find(x => x.id === id))
            return !!foundOverride ? { ...defaultData, ...foundOverride, special: true, default: defaultData  } : {...defaultData, default: defaultData }
        } else if (type === 'armor') {
            return structuredClone(armorData.find(x => x.id === id))
        }
    }, [strategemData, primaryWeaponData, secondaryWeaponData, grenadeData, armorData, overrides])

    return (
        <OverridesContext.Provider
            value={{
                overrides,
                loading,
                setLoading,
                handleAdd,
                handleUpdate,
                handleDelete,
                getFinalData
            }}
            {...props}
        >
            {props.children}
        </OverridesContext.Provider>
    );
}