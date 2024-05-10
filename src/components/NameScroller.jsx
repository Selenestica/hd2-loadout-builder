import { css } from "@emotion/css"
import { useCallback, useEffect, useRef, useState } from "react"

const names = ["Jessica De Sousa"]
const namesDouble = [...names, ...names]

export default function NameScroller({ ...props }) {

    const ref = useRef()
    const [isOverflowing, setIsOverflowing] = useState(false)
    const [scrollerWidth, setScrollerWidth] = useState()

    const checkOverflow = useCallback(() => {
        const current = ref.current
        const overflow = isOverflowing ?
            current.clientWidth * 2 < current.scrollWidth
            : current.clientWidth < current.scrollWidth
        setIsOverflowing(overflow)
        setScrollerWidth(current?.scrollWidth)
    }, [isOverflowing])

    useEffect(() => {

        // Initial check
        checkOverflow()

        const observer = new ResizeObserver((entries) => {
            for (const entry of entries) {
                checkOverflow()
            }
        })

        // Start observing the element
        if (ref.current) {
            observer.observe(ref.current)
        }

        // Cleanup function to unobserve
        return () => {
            if (ref.current) {
                observer.unobserve(ref.current)
            }
        }
    }, [checkOverflow])

    const nameStyle = isOverflowing ? css`
        white-space: nowrap;
        padding: 0 0.75em;
        animation: slide 10s linear infinite;
        @keyframes slide {
            from { transform: translateX(0%); }
            to { transform: translateX(-${scrollerWidth / 2}px); }
        }
    ` : css`
        white-space: nowrap;
        padding: 0 0.75em;
    `;

    return <div
        className={css`
            width: 100%;
            display: flex;
            max-height: 100%;
            overflow: hidden;
        `}
        ref={ref}
    >

        {(isOverflowing ? namesDouble : names)
            .map((name, i) => (
                <div key={name + '-' + i} className={nameStyle}>
                    {name}
                </div>
            ))}

    </div>
}