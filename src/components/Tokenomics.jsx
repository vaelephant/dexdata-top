import React, { useCallback, useState } from 'react'
import { PieChart, Pie, Sector } from 'recharts'

const data = [
  { name: 'Data Providers', value: 20 }, // 20% (400 million tokens)
  { name: 'Data Cleaners', value: 15 }, // 15% (300 million tokens)
  { name: 'AI Trainers', value: 15 }, // 15% (300 million tokens)
  { name: 'Platform', value: 20 }, // 20% (400 million tokens)
  { name: 'Storage Providers', value: 10 }, // 10% (200 million tokens)
  { name: 'Training Equipment Providers', value: 10 }, // 10% (200 million tokens)
  { name: 'Early Investors & Partners', value: 5 }, // 5% (100 million tokens)
  { name: 'Community Incentives & Ecosystem Development', value: 5 }, // 5% (100 million tokens)
]

const renderActiveShape = (props) => {
  const RADIAN = Math.PI / 180
  const {
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    payload,
    percent,
    value,
  } = props
  const sin = Math.sin(-RADIAN * midAngle)
  const cos = Math.cos(-RADIAN * midAngle)
  const sx = cx + (outerRadius + 10) * cos
  const sy = cy + (outerRadius + 10) * sin
  const mx = cx + (outerRadius + 30) * cos
  const my = cy + (outerRadius + 30) * sin
  const ex = mx + (cos >= 0 ? 1 : -1) * 22
  const ey = my
  const textAnchor = cos >= 0 ? 'start' : 'end'

  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
        {payload.name}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
      />
      <path
        d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
        stroke={fill}
        fill="none"
      />
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        textAnchor={textAnchor}
        fill="#333"
      >{`PV ${value}`}</text>
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        dy={18}
        textAnchor={textAnchor}
        fill="#999"
      >
        {`(Rate ${(percent * 100).toFixed(2)}%)`}
      </text>
    </g>
  )
}

export function Tokenomics() {
  const [activeIndex, setActiveIndex] = useState(0)

  const onPieEnter = useCallback(
    (_, index) => {
      setActiveIndex(index)
    },
    [setActiveIndex]
  )

  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <div className="mx-auto max-w-2xl lg:text-center">
        <p className="mt-2 text-3xl font-bold tracking-tight text-black sm:text-4xl">
          Tokenomics
        </p>
        <p
          className="mt-6 text-lg leading-8 text-gray-500"
          style={{ textIndent: '2em' }}
        >
       The total issuance is set at 2 billion . <br></br>
       The distribution plan for tokens includes data providers, data cleansing providers, AI training providers, platform providers, storage providers, training equipment providers, and other participants.
        </p>
      </div>

      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start', // Align items to the top to keep them horizontally aligned
          width: '80%',
          marginTop: '50px', // Adjust margin to fine-tune the spacing
        }}
      >
        <PieChart width={600} height={600}>
          <Pie
            activeIndex={activeIndex}
            activeShape={renderActiveShape}
            data={data}
            cx={200} // Centered in the larger pie chart
            cy={200}
            innerRadius={120}
            outerRadius={160}
            fill="text-blue-600"
            dataKey="value"
            onMouseEnter={onPieEnter}
          />
        </PieChart>

        {/* Token Allocation Table */}
        <div style={{ width: '40%', padding: '20px' }}>
          <h2>Token Allocation</h2>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr>
                <th>Role</th>
                <th>Allocation</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>{item.value}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
