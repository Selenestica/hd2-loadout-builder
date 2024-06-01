import { css } from "@emotion/css";
import { useCallback, useState } from "react";


export default function ImportExport({ ...props }) {

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

        <ConfirmAction handleAction={handleResetValues} confirmMessage='Confirm Export?' actionName='Export All App Data' />
        <ConfirmAction handleAction={handleResetValues} confirmMessage='Confirm Import All Data?' actionName='Import+Replace All App Data' />
        <ConfirmAction handleAction={handleResetValues} confirmMessage='Confirm Import Values?' actionName='Import+Replace all Custom Values' />
        <ConfirmAction handleAction={handleResetValues} confirmMessage='Confirm Import Loadouts?' actionName='Import+Replace all Loadouts' />
        <ConfirmAction handleAction={handleResetValues} confirmMessage='Confirm Delete Values?' actionName='Delete All Custom Values' />

    </div>
}

function ConfirmAction({ handleAction, confirmMessage, actionName, ...props }) {
    const [preConfirm, setPreConfirm] = useState(false)

    return <>
        <button onClick={() => {
            if (preConfirm) {
                handleAction()
                setPreConfirm(false)
            } else {
                setPreConfirm(true)
            }
        }}>
            {preConfirm ? confirmMessage : actionName}
        </button>
        <button disabled={!preConfirm} onClick={() => setPreConfirm(false)}>Cancel</button>
    </>

}