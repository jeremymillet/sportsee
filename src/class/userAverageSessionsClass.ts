import { UserAverageSessionsApi, UserAverageSessionsChart,SessionChart, Session } from "../types/userAverageSessionsTypes";

interface IUserAverageSessionsClass {
    FormatData: (data: UserAverageSessionsApi) => UserAverageSessionsChart
}

export class UserAverageSessionsClass implements IUserAverageSessionsClass {
  FormatData(data: UserAverageSessionsApi): UserAverageSessionsChart {
    const daysOfWeek = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];

    return {
      userId: data.userId,
      sessions: data.sessions.map((session: Session) => ({
        day: daysOfWeek[session.day - 1],
        sessionLength: session.sessionLength,
      })) as SessionChart[],
    };
  }
}