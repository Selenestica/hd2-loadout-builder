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
            valueFormat={'>-.2g'}
            tooltip={(data) => <div></div>}
            colors={{
                scheme: 'blues',
                type: 'sequential',
                minValue: 0,
                maxValue: 4,
            }}
        />
    </div>
}