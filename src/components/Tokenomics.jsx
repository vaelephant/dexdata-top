import React, { useCallback, useState, useEffect } from 'react';
import { PieChart, Pie, Sector } from 'recharts';

export function Tokenomics() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const onPieEnter = useCallback((_, index) => {
    setActiveIndex(index);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div className="mx-auto max-w-2xl lg:text-center">
        <p className="mt-2 text-3xl font-bold tracking-tight text-black sm:text-4xl">
          Tokenomics
        </p>
        <p className="mt-6 text-lg leading-8 text-gray-500" >
          The total issuance is set at 2 billion. <br /> The distribution plan for tokens includes
          data providers, data cleansing providers, AI training providers, platform providers, 
          storage providers, training equipment providers, and other participants.
        </p>
      </div>

      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          width: '100%',
          flexWrap: 'wrap',
          marginTop: '30px',
        }}
      >
        <div style={{ width: '100%', maxWidth: '400px', margin: '0 auto' }}>
          <PieChart width={400} height={400}>
            <Pie
              activeIndex={activeIndex}
              activeShape={renderActiveShape}
              data={data}
              cx={200}
              cy={200}
              innerRadius={80}
              outerRadius={140}
              fill="text-blue-600"
              dataKey="value"
              onMouseEnter={onPieEnter}
            />
          </PieChart>
        </div>

        <div style={{ width: '100%', padding: '20px', maxWidth: '400px', margin: '0 auto' }}>
          <h2 className='text-2xl font-bold text-center'>Token Allocation</h2>
          <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '10px' }}>
            <thead>
              <tr>
                <th style={{ textAlign: 'left' }}>Role</th>
                <th style={{ textAlign: 'center' }}>Allocation</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td style={{ textAlign: 'center' }}>{item.value}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

// Sample Data
const data = [
  { name: 'Data Providers', value: 20 },
  { name: 'Data Cleaners', value: 15 },
  { name: 'AI Trainers', value: 15 },
  { name: 'Platform', value: 20 },
  { name: 'Storage Providers', value: 10 },
  { name: 'Training Equipment Providers', value: 10 },
  { name: 'Early Investors & Partners', value: 5 },
  { name: 'Community  & Ecosystem ', value: 5 },
];
const renderActiveShape = (props) => {
  const RADIAN = Math.PI / 180;
  const {
    cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle, fill, payload, percent, value,
  } = props;
  
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? 'start' : 'end';

  // Adjusted label placement to avoid edge clipping
  const labelOffsetX = cos * 5;
  const labelOffsetY = sin * 5;

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
      <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
      <text x={ex + labelOffsetX} y={ey + labelOffsetY} textAnchor={textAnchor} fill="#333">
        {`${value}%`}
      </text>
      {/* <text x={ex + labelOffsetX} y={ey + labelOffsetY + 18} textAnchor={textAnchor} fill="#999">
        {`(Rate ${(percent * 100).toFixed(2)}%)`}
      </text> */}
    </g>
  );
};