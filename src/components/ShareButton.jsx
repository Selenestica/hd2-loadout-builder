import React, { useState, useEffect, useMemo } from 'react'
import ClipboardJS from 'clipboard'

export default function ShareButton({ newLoadout, ...props }) {
    const [copied, setCopied] = useState(false)

    const clipboardText = useMemo(() => {
        const encodedName = encodeURIComponent(newLoadout.name)
        const encodedData = [
            newLoadout.strat1 || 'x',
            newLoadout.strat2 || 'x',
            newLoadout.strat3 || 'x',
            newLoadout.strat4 || 'x',
            newLoadout.primary || 'x',
            newLoadout.secondary || 'x',
            newLoadout.grenade || 'x',
            newLoadout.armor || 'x',
        ].join('i')
        return `${window.location.origin}/s?n=${encodedName}&d=${encodedData}`
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
            {copied ? 'Link Copied!' : 'Share url'}
        </button>
    )
}