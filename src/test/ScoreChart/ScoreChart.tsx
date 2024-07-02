import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import './ScoreChart.css'


const ScoreChart = ({ data,score }) => {
  const COLORS = ['#ff0000', '#e0e0e0'];
  return (
    <div className='score-container'>
      <p className='score-title'>Score</p>
      <div className='info-score'>
        <p className='score-number'>{`${(score * 100)}%`}</p>
        <p>de votre objectif</p>
      </div>
      <ResponsiveContainer width={"100%"} height={"80%"}>
        <PieChart>
          <Pie
            data={data}
            startAngle={90}
            endAngle={450}
            innerRadius={70}
            outerRadius={80}
            dataKey="value"
            labelLine={false}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
    
  );
};

export default ScoreChart;