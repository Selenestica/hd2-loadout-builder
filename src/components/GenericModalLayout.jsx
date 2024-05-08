import {  useState } from 'react'
import Modal from 'react-modal'
import { colors } from '../data/constants'
import '../index.css'


export default function GenericModalLayout({ closeModal, children, ...props }) {

    const [isOpen, setIsOpen] = useState(true)
    function afterOpenModal() {
        // references are now sync'd and can be accessed.
    }

    return <Modal
        isOpen={isOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="receive loadout modal"
    >
        {children}
    </Modal>
}

const customStyles = {
    content: {
        borderRadius: 0,
        border: 'none',
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        fontSize: '2em',
        background: colors.darkGrey,
        borderBottom: '3px solid yellow',
        boxShadow: '0px 0px 10px 2px black'
    },
    overlay: {
        background: 'rgba(0,0,0,0.4)'
    }
}