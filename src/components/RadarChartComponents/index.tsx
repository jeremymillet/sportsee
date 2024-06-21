
import useFetchUserPerformance from "../../hooks/useFetchUserPerformance";
import { useEffect, useState } from "react";
import RadarComponent from "../../test/RadarChart";
import { RadarChartData} from "../../types/userPerformanceTypes";
import { UserPerformanceClass } from "../../class/userPerformanceClass";




function RadarChartComponents() {
    const { fetchUserPerformance, userPerformance, isloaging: isLoadingUserPerformance, error: errorUserPerformance } = useFetchUserPerformance();
    const [data, setData] = useState<RadarChartData[]>([]);
    useEffect(() => {
        fetchUserPerformance()
    }, []);
    
    useEffect(() => {
        if (userPerformance !== null) {
            const test = new UserPerformanceClass()
            const userDataFormat = test.FormatData(userPerformance);
            const dataChartRadar = userDataFormat.data.map(item => ({
                value: item.value,
                subject: userDataFormat.kind[item.kind]
            }));
            setData(dataChartRadar)
        }
    },[userPerformance])
    if (isLoadingUserPerformance) {
        return <p>Chargement</p>
    }
    if (errorUserPerformance) {
        return <p>Erreur chargement</p>
    }
    return (
        <RadarComponent performanceData={data}/>
    )
}

export default RadarChartComponents