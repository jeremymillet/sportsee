import { UserActivityApi, UserActivityChart } from "../types/userActivityTypes";

interface IUserActivityClass {
    FormatData: (data: UserActivityApi) => UserActivityChart
}

export class UserActivityClass implements IUserActivityClass {
    FormatData(data: UserActivityApi) {
        return{
            userId :data.userId,
            sessions : data.sessions.map((session: any) => ({
            day: session.day.substring(session.day.length - 1),
            kilogram: session.kilogram,
            calories: session.calories
            })),
           
        }as UserActivityChart
    }
}