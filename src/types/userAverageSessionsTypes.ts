export type Session = {
    day: number;
    sessionLength: number;
};
export type SessionChart = {
  day: string;
  sessionLength: number;
};
export type UserAverageSessionsApi = {
    userId: number;
    sessions: Session[];
};
export type UserAverageSessionsChart = {
    userId: number;
    sessions: SessionChart[];
};