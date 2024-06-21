import { UserMainDataApi, UserMainDataChart } from "../types/userMainDataTypes";

interface IUserMainDataClass {
    FormatData: (data: UserMainDataApi) => UserMainDataChart
}
export class UserMainDataClass implements IUserMainDataClass{
    FormatData(data: UserMainDataApi) {
        return{
            userId :data.id,
            userInfos : {
                firstName: data.userInfos.firstName,
                lastName: data.userInfos.lastName,
                age: data.userInfos.age
            },
            todayScore : data.todayScore ?? data.score,
            keyData : {
                calorieCount: data.keyData.calorieCount,
                proteinCount: data.keyData.proteinCount,
                carbohydrateCount: data.keyData.carbohydrateCount,
                lipidCount: data.keyData.lipidCount
            },
        }as UserMainDataChart
    }
}