import { useEffect, useState } from "react";
import useFetchUserData from "../../hooks/useFetchUserData";
import ScoreChart from "../../shared/ScoreChart/ScoreChart";
import { UserMainDataChart } from "../../types/userMainDataTypes";
import { UserMainDataClass } from "../../class/userMainData";





const ScoreChartComponents = () => {
  const { fetchUserData, userData, isloaging: isLoadingUserData, error: errorUserData } = useFetchUserData();
  const [data, setData] = useState<UserMainDataChart>({}as UserMainDataChart);
  useEffect(() => {
    fetchUserData()
  }, []);

  useEffect(() => {
    if (userData !== null) {
      const test = new UserMainDataClass()
      const userDataFormat = test.FormatData(userData);
      setData(userDataFormat)
    }
  }, [userData])
  
  if (isLoadingUserData|| (Object.keys(data).length === 0 &&!errorUserData)) {
      return <p>Chargement</p>
  }
  if (errorUserData) {
      return <p>Erreur chargement</p>
  }
  const score = data.todayScore; 
  const dataChart = [
  { value: score },
  { value: 1 - score },
  
  ];
  return (
    <ScoreChart data={dataChart} score={score} />
  );
};

export default ScoreChartComponents;