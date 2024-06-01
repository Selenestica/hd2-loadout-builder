import { css } from "@emotion/css";
import { useCallback, useState } from "react";


export default function ImportExport({ ...props }) {

    const [selectedActionName, setSelectedActionName] = useState('')

    const handleResetValues = useCallback(() => {
        //
    }, [])

    return <div className={css`
        display: grid;
        gap: 1em 0.2em;
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

        <ConfirmAction handleAction={handleResetValues} confirmMessage='Confirm Export?' actionName='Export All App Data' selectedActionName={selectedActionName} setSelectedActionName={setSelectedActionName} />
        <ConfirmAction handleAction={handleResetValues} confirmMessage='Confirm Import All Data?' actionName='Import+Replace All App Data' selectedActionName={selectedActionName} setSelectedActionName={setSelectedActionName} />
        <ConfirmAction handleAction={handleResetValues} confirmMessage='Confirm Import Values?' actionName='Import+Replace all Custom Values' selectedActionName={selectedActionName} setSelectedActionName={setSelectedActionName} />
        <ConfirmAction handleAction={handleResetValues} confirmMessage='Confirm Import Loadouts?' actionName='Import+Replace all Loadouts' selectedActionName={selectedActionName} setSelectedActionName={setSelectedActionName} />
        <ConfirmAction handleAction={handleResetValues} confirmMessage='Confirm Delete Values?' actionName='Delete All Custom Values' selectedActionName={selectedActionName} setSelectedActionName={setSelectedActionName} />

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