import { ResponsiveHeatMap } from '@nivo/heatmap'
import { css } from '@emotion/css'

export default function RangeRemovalMatrix({data,  ...props }) {


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
                type: 'sequential',
                scheme: 'blues',
                minValue: 0,
                maxValue: 3,
            }}
        />
    </div>
}