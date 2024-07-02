
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer, PolarRadiusAxis} from 'recharts';
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
      <ResponsiveContainer width={"100%"} height={"85%"}>
          <RadarChart data={performanceData}>
          <PolarGrid gridType="polygon" className='radar-grid' stroke='#fff' />
          <PolarAngleAxis className='radar-text' dataKey="subject" stroke="#fff" tickLine={false} />
          <PolarRadiusAxis tickCount={6} stroke="none" />
          <Radar name="Performance" dataKey="value" stroke="#E60000" fill="#E60000" fillOpacity={0.6} />
          </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default RadarComponent;