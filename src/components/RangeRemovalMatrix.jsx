import { ResponsiveHeatMap } from '@nivo/heatmap'
import { css } from '@emotion/css'

export default function RangeRemovalMatrix({ data, ...props }) {
    return <div className={css`
        width: 100%;
        height: 100%;
    `}>
        <ResponsiveHeatMap
            data={data}
            forceSquare={true}
            axisLeft={null}
            axisTop={null}
            axisBottom={null}
            axisRight={null}
            hoverTarget={'column'}
            tooltip={(data) => <div></div>}
            colors={{
                scheme: 'blues',
                type: 'sequential',
                minValue: 0,
                maxValue: 4,
            }}

        /* ({value}) => { 
            if (value <= 0) return `hsl(220, 0%, 50.2%)`
            if (value >= 5) return `hsl(220, 80%, 50.2%)`
            const percentage = ( Math.min(value, 5) / 5 ) * 100
            return `hsl(220, ${percentage * 0.8}%, 50.2%)`
        } */
        />
    </div>
}