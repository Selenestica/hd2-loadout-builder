import { createContext, useEffect, useState, useContext, useMemo } from 'react'
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

    const selectedLoadoutData = useMemo(() => {
        if (!selectedLoadout) return

        const newObj = { ...selectedLoadout }

        Object.entries(selectedLoadout).forEach(([key, value]) => {
            if (key === 'strat1' || key === 'strat2' || key === 'strat3' || key === 'strat4') {
                newObj[key] = structuredClone(strategemData.find(x => x.id === value))
                const foundOverride = overrides.stratOverrides.find(x => x.id === value)
                if (!!foundOverride) {
                    newObj[key] = { ...newObj[key], ...foundOverride }
                }
            } else if (key === 'primary') {
                newObj[key] = structuredClone(primaryWeaponData.find(x => x.id === value))
                const foundOverride = overrides.primaryOverrides.find(x => x.id === value)
                if (!!foundOverride) {
                    newObj[key] = { ...newObj[key], ...foundOverride }
                }
            } else if (key === 'secondary') {
                newObj[key] = structuredClone(secondaryWeaponData.find(x => x.id === value))
                const foundOverride = overrides.secondaryOverrides.find(x => x.id === value)
                if (!!foundOverride) {
                    newObj[key] = { ...newObj[key], ...foundOverride }
                }
            } else if (key === 'grenade') {
                newObj[key] = structuredClone(grenadeData.find(x => x.id === value))
                const foundOverride = overrides.grenadeOverrides.find(x => x.id === value)
                if (!!foundOverride) {
                    newObj[key] = { ...newObj[key], ...foundOverride }
                }
            } else if (key === 'armor') {
                newObj[key] = structuredClone(armorData.find(x => x.id === value))
            }
        })

        return newObj

    }, [selectedLoadout, overrides, strategemData, primaryWeaponData, secondaryWeaponData, grenadeData, armorData])

    return (
        <OverridesContext.Provider
            value={{
                overrides,
                selectedLoadoutData,
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