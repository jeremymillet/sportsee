import { useEffect, useState } from "react";
import useFetchUserActivity from "../../hooks/useFetchUserActivity";
import BarCharte from "../../test/BarChart/BarChart"
import { UserActivityChart } from "../../types/userActivityTypes";
import { UserActivityClass } from "../../class/userActivity";

function BarChartComponent() {
  const { fetchUserActivity, userActivity, isloaging: isLoadingUserActivity, error: errorUserActivity } = useFetchUserActivity();
  const [data, setData] = useState<UserActivityChart>({} as UserActivityChart);
  
  useEffect(() => {
        fetchUserActivity()
  }, []);

  useEffect(() => {
    if (userActivity !== null) {
      const test = new UserActivityClass()
      const userDataFormat = test.FormatData(userActivity);
      setData(userDataFormat)
    }
  }, [userActivity,errorUserActivity])
    if ( isLoadingUserActivity || (Object.keys(data).length === 0 &&!errorUserActivity) ) {
      return <p>Chargement</p>
    }
    if (errorUserActivity) {
      return <p>Erreur chargement</p>
  }
  return (
    <BarCharte data={data.sessions}/>
  )
}
export default BarChartComponent