import { useSearchParams } from 'react-router-dom'
import { useMemo, useState } from 'react'
import Modal from 'react-modal'
import { colors } from '../data/constants'
import { css } from '@emotion/css'
import '../index.css'
import Loadout from './Loadout'

export default function ReceivedLoadoutModal({ ...props }) {
    const [searchParams] = useSearchParams()

    // handle decoding of json 
    const [data, message] = useMemo(() => {
        const param = searchParams.get('data')
        if (!param) return [undefined, 'Tried to share loadout, but received no data.']
        let parsedData
        try {
            parsedData = JSON.parse(decodeURIComponent(param))
        } catch (e) {
            console.log(e)
        }
        if (!parsedData) return [undefined, 'Tried to receive shared loadout, but data could not be read.']

        return [parsedData, 'Someone shared a loadout with you. Add to list to see statistics?']
    }, [searchParams])

    const [isOpen, setIsOpen] = useState(true)
    function openModal() { setIsOpen(true) }
    function afterOpenModal() {
        // references are now sync'd and can be accessed.
    }
    function closeModal() { setIsOpen(false) }

    return <Modal
        isOpen={isOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="receive loadout modal"
    >
        <section className={css`
            display: grid;
        `}>
            <h3>{message}</h3>
            {data && <Loadout data={data} />}
            <div className={css`display: flex; justify-content: end; gap: 2em;`}>
                <button disabled={!data}>add</button> {/* to do: handle adding to list */}
                <button>{data ? 'cancel' : 'return'}</button>
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

        background: colors.darkBlue,
        fontSize: '2em'

    },
    overlay: {
        background: 'rgba(0,0,0,0.4)'
    }
}