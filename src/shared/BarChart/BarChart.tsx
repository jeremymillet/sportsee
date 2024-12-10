import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import React from 'react';
import PropTypes from 'prop-types';
import './BarChart.css'

type BarChartComponantProps = {
    data: {
        day: string;
        kilogram: number;
        calories: number;
    }[];
}

const BarCharte: React.FC<BarChartComponantProps> = ({ data }) => {
  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip-bar">
          <span>{`${payload[0].value} kg`}</span>
          <span>{`${payload[1].value} Kcal`}</span>
        </div>
      );
    }

    return null;
  };
  return (
    <div className='bar-chart-componant'>
      <div className='legend-container'>
        <p>Activité quotidienne</p>
        <div className='legend'>
          <div className='legend-poids'>
            <div></div>
            <p>Poids (kg)</p>
          </div>
          <div className='legend-kcal'>
            <div></div>
            <p>Calories brûlées (kCal)</p>
          </div>
        </div>
      </div>
      <ResponsiveContainer width="100%" height="100%">
      <BarChart
        data={data}
      >
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <XAxis dataKey="day" tickLine={false} axisLine={{ stroke: '#DEDEDE' }} />
        <YAxis hide={true} yAxisId="left" />
        <YAxis
          yAxisId="right"
          orientation="right"
          stroke="#DEDEDE"
          axisLine={false}
          tickLine={false}
        />
        <Tooltip content={<CustomTooltip/>} />
        <Bar
          yAxisId="right"
          dataKey="kilogram"
          fill="#000"
          barSize={12}
          radius={[10, 10, 0, 0]}
        />
        <Bar
          yAxisId="left"
          dataKey="calories"
          fill="#E60000"
          barSize={12}
          radius={[10, 10, 0, 0]}
        />
      </BarChart>
    </ResponsiveContainer>
      </div>
  );
}

BarCharte.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      day: PropTypes.string.isRequired,
      kilogram: PropTypes.number.isRequired,
      calories: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
export default BarCharte