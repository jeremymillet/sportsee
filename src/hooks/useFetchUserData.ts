import { useState } from "react";
import { fetchUserMainData } from "../services";
import { UserMainDataApi } from "../types/userMainDataTypes";



function useFetchUserData() {
    const [isloaging, setIsloading] = useState<boolean>(false);
    const [error,setError] = useState<Error>();
    const [userData, setUserData] = useState<UserMainDataApi | null>(null);

    async function fetchUserData() {
        setIsloading(true);
        setError(undefined);
        try {
            const response = await fetchUserMainData(12);
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