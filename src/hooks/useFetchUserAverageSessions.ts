import { useState } from "react";
import { fetchUserAverageSessionsData } from "../services";
import { UserAverageSessionsApi } from "../types/userAverageSessionsTypes";




function useFetchUserAverageSessions() {
    const [isloaging, setIsloading] = useState<boolean>(false);
    const [error,setError] = useState<Error>();
    const [userAverageSessionsData, setUserAverageSessionsData] = useState<UserAverageSessionsApi| null>(null);

    async function fetchUserAverageSessions() {
        setIsloading(true);
        setError(undefined);
        try {
            const response = await fetchUserAverageSessionsData(12);
            setUserAverageSessionsData(response);
            
        } catch (err:any) {
            console.error('Erreur lors de la récupération des données de l\'utilisateur:', err);
            setError(err);
        } finally {
            setIsloading(false);
        }
    }
    return { fetchUserAverageSessions, userAverageSessionsData, isloaging,error}
}


export default useFetchUserAverageSessions