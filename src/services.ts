type UserInfo = {
    firstName: string;
    lastName: string;
    age: number;
};

type UserMainData = {
    id: number;
    userInfos: UserInfo;
    todayScore?: number;
    score?: number;
    keyData: {
        calorieCount: number;
        proteinCount: number;
        carbohydrateCount: number;
        lipidCount: number;
    };
};

type UserActivity = {
    UserId: number;
    sessions: {
        day: string;
        kilogram: number;
        calories: number;
    }[];
};

type UserAverageSessions ={
    userId: number;
    sessions: {
        day: number;
        sessionLength: number;
    }[];
}

type UserPerformance ={
    userId: number;
    kind: {
        [key: number]: string;
    };
    data: {
        value: number;
        kind: number;
    }[];
}

// Fetching user main data
export async function fetchUserMainData(userId: number): Promise<UserMainData | null> {
    try {
        const response = await fetch(`http://localhost:3000/user/${userId}`);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        return data.data|| null;
    } catch (error:any) {
        console.error('Error fetching user main data:', error);
        return error;
    }
}

export async function fetchUserActivityData(userId: number): Promise<UserActivity | null> {
   try {
        const response = await fetch(`http://localhost:3000/user/${userId}/activity`);
        if (!response.ok) {
            throw new Error(`Erreur HTTP! Statut: ${response.status}`);
        }
        const data = await response.json();

        return data.data || null;
    } catch (error:any) {
        console.error('Erreur lors de la récupération des activités de l\'utilisateur:', error);
        return error;
    }
}

// Fetching user average sessions
export async function fetchUserAverageSessionsData(userId: number): Promise<UserAverageSessions | null> {
    try {
        const response = await fetch(`http://localhost:3000/user/${userId}/average-sessions`);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        
        return data.data || null;
    } catch (error:any) {
        console.error('Error fetching user average sessions:', error);
        return error;
    }
}

// Fetching user performance
export async function fetchUserPerformanceData(userId: number): Promise<UserPerformance | null> {
    try {
        const response = await fetch(`http://localhost:3000/user/${userId}/performance`);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        return data.data || null;
    } catch (error:any) {
        console.error('Error fetching user performance:', error);
        return error;
    }
}