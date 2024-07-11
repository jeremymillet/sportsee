import { useState } from "react";
import { fetchUserAverageSessionsData } from "../services";
import { UserAverageSessionsApi } from "../types/userAverageSessionsTypes";
import { getUrlId } from "../helpers";




function useFetchUserAverageSessions() {
    const [isloaging, setIsloading] = useState<boolean>(false);
    const [error,setError] = useState<Error>();
    const [userAverageSessionsData, setUserAverageSessionsData] = useState<UserAverageSessionsApi| null>(null);
    /**
     * Fonction asynchrone pour récupérer les sessions moyennes de l'utilisateur.
     */
    async function fetchUserAverageSessions() {
        setIsloading(true);
        setError(undefined);
        try {
            const urlId = getUrlId()
            const response = await fetchUserAverageSessionsData(urlId);
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