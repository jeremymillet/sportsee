export type UserActivityApi = {
    userId: number;
    sessions: {
        day: string;
        kilogram: number;
        calories: number;
    }[];
};
export type UserActivityChart = {
    userId: number;
    sessions: {
        day: string;
        kilogram: number;
        calories: number;
    }[];
};