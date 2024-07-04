import './LineChart.css'
import PropTypes from 'prop-types';
import {
  LineChart,
  Line,
  XAxis,
  Tooltip,
  ResponsiveContainer,
  DotProps,
} from 'recharts';
import { SessionChart } from '../../types/userAverageSessionsTypes';


type lineChartComponentProps = {
  data:{
    userId: number;
    sessions: SessionChart[];
  }
};



const LineComponent: React.FC<lineChartComponentProps> = ({ data }) => {
   const CustomizedActiveDot: React.FC<DotProps> = (props) => {
    const { cx, cy } = props;
    return (
      <circle cx={cx} cy={cy} r={6} className="active-dot" />
    );
  };
  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip">
          <span>{`${payload[0].value} min`}</span>
        </div>
      );
    }

    return null;
  };
    if (!data) {
    return <div>No data available</div>;
  }
  return (
    <div className='line-chart-container'>
      <h3>Durée moyenne des <br />sessions</h3>
      <ResponsiveContainer width={"100%"} height={"60%"}>
        <LineChart data={data.sessions} >
        <XAxis dataKey="day" stroke='#FFFFFF' tickLine={false} axisLine={false}/>
        <Tooltip content={<CustomTooltip />} />
          <Line type="monotone" activeDot={<CustomizedActiveDot/>} dataKey="sessionLength" stroke="#FFFFFF" strokeWidth={2} dot={false}/>
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

LineComponent.propTypes = {
  data: PropTypes.shape({
    userId: PropTypes.number.isRequired,
    sessions: PropTypes.arrayOf(
      PropTypes.shape({
        day: PropTypes.string.isRequired,
        sessionLength: PropTypes.number.isRequired,
      }).isRequired,
    ).isRequired
  }).isRequired
}


export default LineComponent;