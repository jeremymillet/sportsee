import { RadialBarChart, RadialBar } from 'recharts';
import './ScoreChart.css'


type ScoreChartProps = {
  data: {
    userId: number;
    userInfos: {
        firstName: string;
        lastName: string;
        age: number;
    };
    todayScore: number;
    keyData: {
        calorieCount: number;
        proteinCount: number;
        carbohydrateCount: number;
        lipidCount: number;
    };
  }
}

const ScoreChart: React.FC<ScoreChartProps> = ({ data }) => {
  return (
    <div className='score-container'>
      <p className='info'>Score</p>
      <RadialBarChart
        width={260}
        height={200}
        innerRadius={100}
        outerRadius={70}
        barSize={10}
        data={data}
      >
            <RadialBar
            minAngle={0}
            background={false}
            clockWise={true}
            dataKey="todayScore"
          />
      </RadialBarChart>
      <p>
        
      </p>
      <p>
        de votre objectif
      </p>
    </div>
  );
};

export default ScoreChart;