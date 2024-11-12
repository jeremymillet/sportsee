import { UserActivityApi } from "./types/userActivityTypes";
import { UserAverageSessionsApi } from "./types/userAverageSessionsTypes";
import { UserMainDataApi } from "./types/userMainDataTypes";
import { UserPerformanceApi } from "./types/userPerformanceTypes";



/**
 * Fetching user main data
 * @param {number}userId  id of the user
 * @returns {object} with user main data
 */
export async function fetchUserMainData(userId: number): Promise<UserMainDataApi | null> {
    try {
        const response = await fetch(`https://sportsee-api-t48q.onrender.com/user/${userId}`);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        return data.data|| null;
    } catch (error:any) {
        console.error('Error fetching user main data:', error);
        throw error;
    }
}

/**
 * Fetching user activity data
 * @param {number}userId  id of the user
 * @returns {object} with user activity data
 */
export async function fetchUserActivityData(userId: number): Promise<UserActivityApi | null> {
   try {
        const response = await fetch(`https://sportsee-api-t48q.onrender.com/user/${userId}/activity`);
        if (!response.ok) {
            throw new Error(`Erreur HTTP! Statut: ${response.status}`);
        }
        const data = await response.json();

        return data.data || null;
    } catch (error:any) {
        console.error('Erreur lors de la récupération des activités de l\'utilisateur:', error);
        throw error;
    }
}

/**
 * Fetching user average sessions
 * @param {number}userId  id of the user
 * @returns {object} with user average data
 */
export async function fetchUserAverageSessionsData(userId: number): Promise<UserAverageSessionsApi | null> {
    try {
        const response = await fetch(`https://sportsee-api-t48q.onrender.com/user/${userId}/average-sessions`);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        
        return data.data || null;
    } catch (error:any) {
        console.error('Error fetching user average sessions:', error);
        throw error;
    }
}


/**
 * Fetching user performance
 * @param {number}userId  id of the user
 * @returns {object} with user performance data
 */
export async function fetchUserPerformanceData(userId: number): Promise<UserPerformanceApi | null> {
    try {
        const response = await fetch(`https://sportsee-api-t48q.onrender.com/user/${userId}/performance`);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        return data.data || null;
    } catch (error:any) {
        console.error('Error fetching user performance:', error);
        throw error;
    }
}
