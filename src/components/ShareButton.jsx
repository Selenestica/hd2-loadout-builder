import React, { useState, useEffect, useMemo } from 'react'
import ClipboardJS from 'clipboard'

export default function ShareButton({ newLoadout, ...props }) {
    const [copied, setCopied] = useState(false)

    const clipboardText = useMemo(() => {
        const copy = {...newLoadout}
        delete copy.id
        const encodedObj = encodeURIComponent(JSON.stringify(copy))
        return `https://divers-lab.io/receiveshared?data=${encodedObj}`
    }, [newLoadout])

    useEffect(() => {
        const clipboard = new ClipboardJS('#btn-copy', {
            text: () => clipboardText
        })

        clipboard.on('success', function(e) {
            setCopied(true)
            setTimeout(() => setCopied(false), 2000)  // Reset after 2 seconds
            e.clearSelection()
        })

        clipboard.on('error', function() {
            // Handle errors (not typically necessary unless you support very old browsers)
        })

        return () => {
            clipboard.destroy()
        }
    }, [clipboardText])

    return (
        <button id="btn-copy" {...props} >
            {copied ? 'Link Copied!' : 'Share'}
        </button>
    )
}