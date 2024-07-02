import { useState } from "react";
import { fetchUserPerformanceData } from "../services";
import { UserPerformanceApi } from "../types/userPerformanceTypes";
import { getUrlId } from "../helpers";




function useFetchUserPerformance() {
    const [isloaging, setIsloading] = useState<boolean>(false);
    const [error,setError] = useState<Error>();
    const [userPerformance, setUserPerformance] = useState<UserPerformanceApi| null>(null);

    async function fetchUserPerformance() {
        setIsloading(true);
        setError(undefined);
        try {
            const urlId = getUrlId()
            const response = await fetchUserPerformanceData(urlId);
            setUserPerformance(response);
           
        } catch (err:any) {
            console.error('Erreur lors de la récupération des données de l\'utilisateur:', err);
            setError(err);
        } finally {
            setIsloading(false);
        }
    }
    return { fetchUserPerformance, userPerformance, isloaging,error}
}


export default useFetchUserPerformance