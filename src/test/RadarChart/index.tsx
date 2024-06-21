
import { Radar, RadarChart, PolarGrid, PolarAngleAxis} from 'recharts';
import './Radar.css'

type RadarComponentProps = {
  performanceData: {
    value: number;
    subject: string;
  }[] | null;
};

const RadarComponent: React.FC<RadarComponentProps> = ({ performanceData }) => {
   if (!performanceData) {
    return <div className='radar-container'>No data available</div>;
  }
  return (
    <div className='radar-container'>
      <RadarChart width={280} height={230} data={performanceData}>
        <PolarGrid gridType="polygon" stroke="#fff" />
        <PolarAngleAxis className='radar-text' dataKey="subject" stroke="#fff" />
        <Radar name="Performance" dataKey="value" stroke="#E60000" fill="#E60000" fillOpacity={0.6} />
      </RadarChart>
    </div>
  );
}

export default RadarComponent;