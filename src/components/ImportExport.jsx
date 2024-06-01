import { css } from "@emotion/css";
import { useCallback, useContext, useState } from "react";
import { clearStore, exportAllData, importData } from "../data/indexedDB";
import OverridesContext from "../context/Overrides";


export default function ImportExport({ closeModal, ...props }) {

    const { setOverrides } = useContext(OverridesContext)

    const [selectedActionName, setSelectedActionName] = useState('')

    const handleDeleteCustomValues = useCallback(() => {
        try {
            clearStore('stratOverrides')
            clearStore('primaryOverrides')
            clearStore('secondaryOverrides')
            clearStore('grenadeOverrides')
            setOverrides({ stratOverrides: [], primaryOverrides: [], secondaryOverrides: [], grenadeOverrides: [] })
            closeModal()
            // reload page or set state
        } catch (e) {
            console.error(e)
            alert('something went wrong')
        }
    }, [clearStore, setOverrides, closeModal])

    const handleExport = useCallback(() => {
        try {
            exportAllData()
            closeModal()
        } catch (e) {
            console.error(e)
            alert('something went wrong')
        }
    }, [exportAllData, closeModal])

    const importStores = useCallback((storesArray) => {
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = '.txt';
        input.onchange = (event) => {
            const file = event.target.files[0]
            if (file) {
                importData(file, storesArray).then(res => window.location.reload());
                closeModal();
            }
        };
        input.style.display = 'none';
        document.body.appendChild(input);
        input.click();
        document.body.removeChild(input);
    }, [importData])

    return <div className={css`
        display: grid;
        gap: 0.5em 0.2em;
        width: 100%;
        grid-template-columns: 17em 10em;
        grid-auto-rows: 4em;
        margin-bottom: 2em;

        button {
            height: 100%;
            overflow: hidden;
            align-text: center;
            display: grid;
            place-items: center;
            padding: 0;
        }
`}>

        <ConfirmAction handleAction={handleExport} confirmMessage='Confirm Export?' actionName='Export All App Data' selectedActionName={selectedActionName} setSelectedActionName={setSelectedActionName} />
        <ConfirmAction handleAction={() => importStores()} confirmMessage='Confirm Import All Data?' actionName='Import+Replace All App Data' selectedActionName={selectedActionName} setSelectedActionName={setSelectedActionName} />
        <ConfirmAction handleAction={() => importStores(['loadouts'])} confirmMessage='Confirm Import Loadouts?' actionName='Import+Replace all Loadouts' selectedActionName={selectedActionName} setSelectedActionName={setSelectedActionName} />
        <ConfirmAction handleAction={() => importStores([
            'stratOverrides',
            'primaryOverrides',
            'secondaryOverrides',
            'grenadeOverrides'
        ])} confirmMessage='Confirm Import Values?' actionName='Import+Replace all Custom Values' selectedActionName={selectedActionName} setSelectedActionName={setSelectedActionName} />
        <ConfirmAction handleAction={handleDeleteCustomValues} confirmMessage='Confirm Delete Values?' actionName='Delete All Custom Values' selectedActionName={selectedActionName} setSelectedActionName={setSelectedActionName} />

    </div>
}

function ConfirmAction({ handleAction, confirmMessage, actionName, selectedActionName, setSelectedActionName, ...props }) {
    const [preConfirm, setPreConfirm] = useState(false)

    return <>
        <button disabled={selectedActionName !== '' && selectedActionName !== actionName} onClick={() => {
            if (preConfirm) {
                handleAction()
                setSelectedActionName('')
                setPreConfirm(false)
            } else {
                setSelectedActionName(actionName)
                setPreConfirm(true)
            }
        }} className={css`${selectedActionName !== actionName ? 'grid-column: span 2;' : ''}`}>
            {preConfirm ? confirmMessage : actionName}
        </button>
        {preConfirm && <button onClick={() => {
            setSelectedActionName('')
            setPreConfirm(false)
        }}>
            Cancel
        </button>}
    </>

}