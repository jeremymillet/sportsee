import './LineChart.css'
import {
  LineChart,
  Line,
  XAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from 'recharts';
import { SessionChart } from '../../types/userAverageSessionsTypes';

type lineChartComponentProps = {
  data:{
    userId: number;
    sessions: SessionChart[];
  }
};

const LineComponent: React.FC<lineChartComponentProps> = ({ data }) => {
    if (!data) {
    return <div>No data available</div>;
  }
  return (
    <div className='line-chart-container'>
      <h3>Durée moyenne des sessions</h3>
      <ResponsiveContainer width={"100%"} height={160}>
        <LineChart data={data.sessions}>
        <XAxis dataKey="day" stroke='#FFFFFF' tickLine={false} axisLine={false}/>
        <Tooltip />
        <Line type="monotone" dataKey="sessionLength" stroke="#FFFFFF" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LineComponent;