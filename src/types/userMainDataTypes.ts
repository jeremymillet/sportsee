export type UserInfo = {
    firstName: string;
    lastName: string;
    age: number;
};

export type UserMainDataApi = {
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

export type UserMainDataChart = {
    userId: number;
    userInfos: UserInfo;
    todayScore: number;
    keyData: {
        calorieCount: number;
        proteinCount: number;
        carbohydrateCount: number;
        lipidCount: number;
    };
};
