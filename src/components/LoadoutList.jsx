import { useState, useEffect } from 'react'
import { css } from '@emotion/css'
import { colors } from '../data/constants'
import { loadLoadouts } from '../data/indexedDB'

export default function StrategemList({ handleClick }) {
    const [loadouts, setLoadouts] = useState([])
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

    return (loading ? 'loading...' :

        <div className={css`
            background: ${colors.darkBlue};
            max-height: 80vh;
            overflow-Y: auto;
        `}>
            {loadouts.map(loadout => <div>
                this is a mock loadout
            </div>
            )}
            <button className={css`
                width: 100%;
            `}>
                add loadout
            </button>
        </div >
    )
}