import { useSearchParams } from 'react-router-dom'
import { useCallback, useContext, useMemo, useState } from 'react'
import Modal from 'react-modal'
import { colors } from '../data/constants'
import { css } from '@emotion/css'
import '../index.css'
import Loadout from './Loadout'
import { useNavigate } from 'react-router-dom'
import LoadoutsContext from '../context/Loadouts'
import { addLoadout } from '../data/indexedDB'

export default function ReceivedLoadoutModal({ ...props }) {

    const { loadouts, setLoadouts, setSelectedLoadout } = useContext(LoadoutsContext)
    const [searchParams] = useSearchParams()
    const navigate = useNavigate()

    const errorMsg = 'Tried to receive shared loadout, but data could not be read.'

    // handle decoding of json 
    const [data, message] = useMemo(() => {
        const paramData = searchParams.get('d')
        const paramName = searchParams.get('n')

        if (!paramData || !paramName) return [undefined, errorMsg]

        let parsedData
        try {
            const output = {}
            const dataArr = paramData.split('i')
            if (dataArr.length !== 8) return [undefined, errorMsg]
            const dataMapping = ['strat1', 'strat2', 'strat3', 'strat4', 'primary', 'secondary', 'grenade', 'armor']
            for (let i = 0; i < dataMapping.length; i++) {
                const el = dataArr[i] === 'x' ? null : Number(dataArr[i])
                if (isNaN(el)) return [undefined, errorMsg]
                output[dataMapping[i]] = el
            }
            parsedData = {
                name: decodeURIComponent(paramName).slice(0, 24),
                ...output
            }
        } catch (e) {
            console.log(e)
        }
        if (!parsedData) return [undefined, errorMsg]

        return [parsedData, 'Someone shared a loadout with you. Add to view stats?']
    }, [searchParams])

    const handleAddSharedLoadout = useCallback(() => {
        const newLoadout = {
            id: (Math.max(...loadouts.map(x => x.id), 0) || 0) + 1,
            name: data.name,
            strat1: data.strat1,
            strat2: data.strat2,
            strat3: data.strat3,
            strat4: data.strat4,
            primary: data.primary,
            secondary: data.secondary,
            grenade: data.grenade,
            armor: data.armor,
        }

        addLoadout(newLoadout).then(loadout => {
            setLoadouts(current => [
                ...current,
                loadout
            ])
        })

        setSelectedLoadout(newLoadout)

        navigate('/')

    }, [loadouts, data, setSelectedLoadout, navigate])

    const [isOpen, setIsOpen] = useState(true)
    function openModal() { setIsOpen(true) }
    function afterOpenModal() {
        // references are now sync'd and can be accessed.
    }
    function closeModal() {
        navigate('/')
        setIsOpen(false)
    }

    return <Modal
        isOpen={isOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="receive loadout modal"
    >
        <section className={css`
            display: grid;
            font-size: 0.5em;
        `}>
            <h3>{message}</h3>
            {data && <Loadout data={data} />}
            <div className={css`
                display: flex; 
                justify-content: center; 
                gap: 2em; 
                margin-top: 1em; 
                > button {
                    width: 10em;
                }
            `}>
                <button disabled={!data} onClick={handleAddSharedLoadout}  >
                    Add
                </button> {/* to do: handle adding to list */}
                <button onClick={closeModal}>
                    {data ? 'Cancel' : 'Return'}
                </button>
            </div>
        </section>
    </Modal>
}

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',

        background: colors.darkBlueSolid,
        fontSize: '2em'

    },
    overlay: {
        background: 'rgba(0,0,0,0.4)'
    }
}