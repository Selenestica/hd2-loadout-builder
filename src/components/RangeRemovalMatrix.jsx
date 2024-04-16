import { ResponsiveHeatMap } from '@nivo/heatmap'

export default function RangeRemovalMatrix({data,  ...props }) {


    return <div style={{ height: "500px" }}>
        <ResponsiveHeatMap
            data={data}
            margin={{ top: 100, right: 60, bottom: 60, left: 60 }}
            colors={{
                type: 'sequential',
                scheme: 'blues',
                minValue: 0,
                maxValue: 5,
            }}
            axisTop={null}
            axisRight={null}
            axisBottom={{
                orient: 'bottom',
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'Range',
                legendPosition: 'middle',
                legendOffset: 32
            }}
            axisLeft={{
                orient: 'left',
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'Offensive Coverage',
                legendPosition: 'middle',
                legendOffset: -40
            }}
        // other properties...
        />
    </div>
}