import { useState } from "react";
import { fetchUserActivityData } from "../services";
import { UserActivityApi } from "../types/userActivityTypes";
import { getUrlId } from "../helpers";


function useFetchUserActivity() {
    const [isloaging, setIsloading] = useState<boolean>(false);
    const [error,setError] = useState<Error>();
    const [userActivity, setUserActivity] = useState<UserActivityApi | null>(null);
    /**
     * Fonction asynchrone pour récupérer l'activité utilisateur.
     */
    async function fetchUserActivity() {
        setIsloading(true);
        setError(undefined);
        try {
            const urlId = getUrlId()
            const response = await fetchUserActivityData(urlId);
            setUserActivity(response);
            
        } catch (err:any) {
            console.error('Erreur lors de la récupération des données de l\'utilisateur:', err);
            setError(err);
        } finally {
            setIsloading(false);
        }
    }
    return { fetchUserActivity, userActivity, isloaging,error}
}


export default useFetchUserActivity