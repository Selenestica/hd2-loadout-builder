import { ResponsiveBar } from '@nivo/bar'
import { css } from '@emotion/css'

export default function RemovalBreakdownChart({ data, ...props }) {

    const keys = Object.keys(data[0]).filter(str => !str.includes('Color') && str !== 'removal')

    return <div className={css`
        width: 100%;
    `}>
        <ResponsiveBar
            data={data}
            keys={keys}
            indexBy='removal'
            enableGridY={false}
            axisLeft={{
                tickSize: 0,
                tickPadding: 0,
                tickValues: [1,2,3,4,5,6,7]
            }}
            labelSkipHeight={14}
            padding={0.1}
            innerPadding={1.5}
            axisTop={null}
            axisBottom={null}
            axisRight={null}
            colors={({ id, data }) => data[`${id}Color`]}
            label={(data) => data.value > 0 ? data.id.split(' ').slice(1).map(x => x[0]).join('').slice(0, 6) : ''}
            valueFormat={'>-.2g'}
            tooltip={(data) => <div className={css`
        display: flex;
        `}>{data.id + ' | ' + data.value}</div>}
            margin={{ top: 5, right: 0, bottom: 5, left: 18 }}
            theme={{
                axis: {
                    ticks: {
                        text: {
                            fill: 'grey' // Light grey color; change as needed
                        }
                    },
                    legend: {
                        text: {
                            fill: 'grey' // Light grey color; change as needed
                        }
                    }
                }
            }}
        />
    </div>
}