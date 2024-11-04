import { useEffect, useState } from "react";
import useFetchUserAverageSessions from "../../hooks/useFetchUserAverageSessions";
import { UserAverageSessionsClass } from "../../class/userAverageSessionsClass";
import { UserAverageSessionsChart } from "../../types/userAverageSessionsTypes";
import LineComponent from "../../shared/LineChart/LineChart";

function LineChartComponent() {
  const { fetchUserAverageSessions, userAverageSessionsData, isloaging: isLoadingUserAverageSessions, error: errorUserAverageSessions } = useFetchUserAverageSessions();
  const [data, setData] = useState<UserAverageSessionsChart>({} as UserAverageSessionsChart);
  
  useEffect(() => {
        fetchUserAverageSessions()
  }, []);
  useEffect(() => {
      if (userAverageSessionsData !== null) {
        const test = new UserAverageSessionsClass()
        const userDataFormat = test.FormatData(userAverageSessionsData);
        setData(userDataFormat)
    }
  }, [userAverageSessionsData])
    if ( isLoadingUserAverageSessions|| (Object.keys(data).length === 0 &&!errorUserAverageSessions)) {
        return <p>Chargement</p>
    }
    if (errorUserAverageSessions) {
        return <p>Erreur chargement</p>
    }
    return (
      <LineComponent data={data} />
  )
}
export default LineChartComponent