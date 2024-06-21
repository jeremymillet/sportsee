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
        const response = await fetch(`http://localhost:3000/USER_MAIN_DATA/${userId}`);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data: UserMainData = await response.json();
        return data;
    } catch (error:any) {
        console.error('Error fetching user main data:', error);
        return error;
    }
}

export async function fetchUserActivityData(userId: number): Promise<UserActivity | null> {
   try {
        const response = await fetch(`http://localhost:3000/USER_ACTIVITY/?userId=${userId}`);
        if (!response.ok) {
            throw new Error(`Erreur HTTP! Statut: ${response.status}`);
        }
        const data: UserActivity[] = await response.json();
        const userActivity = data.find(activity => activity.UserId === userId);

        return userActivity || null;
    } catch (error:any) {
        console.error('Erreur lors de la récupération des activités de l\'utilisateur:', error);
        return error;
    }
}

// Fetching user average sessions
export async function fetchUserAverageSessionsData(userId: number): Promise<UserAverageSessions | null> {
    try {
        const response = await fetch(`http://localhost:3000/USER_AVERAGE_SESSIONS/?userId=${userId}`);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data: UserAverageSessions[] = await response.json();
        const userAverageSessions = data.find(AverageSessions => AverageSessions.userId === userId);
        return userAverageSessions || null;
    } catch (error:any) {
        console.error('Error fetching user average sessions:', error);
        return error;
    }
}

// Fetching user performance
export async function fetchUserPerformanceData(userId: number): Promise<UserPerformance | null> {
    try {
        const response = await fetch(`http://localhost:3000/USER_PERFORMANCE/?userId=${userId}`);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data: UserPerformance[] = await response.json();
        const userPerformance = data.find(performance => performance.userId === userId);
        return userPerformance || null;
    } catch (error:any) {
        console.error('Error fetching user performance:', error);
        return error;
    }
}