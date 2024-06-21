export type UserPerformanceApi = {
    userId: number;
    kind: {
        [key: number]: string;
    };
    data: {
        value: number;
        kind: number;
    }[];
};
export type UserPerformanceChart = {
    userId: number;
    kind: {
        [key: number]: string;
    };
    data: {
        value: number;
        kind: number;
    }[];
};

export type RadarChartData ={
  value: number;
  subject: string;
}