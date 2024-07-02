import { useState } from "react";
import { fetchUserMainData } from "../services";
import { UserMainDataApi } from "../types/userMainDataTypes";
import { getUrlId } from "../helpers";



function useFetchUserData() {
    const [isloaging, setIsloading] = useState<boolean>(false);
    const [error,setError] = useState<Error>();
    const [userData, setUserData] = useState<UserMainDataApi | null>(null);

    async function fetchUserData() {
        setIsloading(true);
        setError(undefined);
        try {
            const urlId = getUrlId()
            const response = await fetchUserMainData(urlId);
            setUserData(response);
            
        } catch (err:any) {
            console.error('Erreur lors de la récupération des données de l\'utilisateur:', err);
            setError(err);
        } finally {
            setIsloading(false);
        }
    }
    return { fetchUserData, userData, isloaging,error}
}


export default useFetchUserData