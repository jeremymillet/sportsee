import { UserPerformanceApi, UserPerformanceChart } from "../types/userPerformanceTypes";

interface IUserPerformanceClass {
    FormatData: (data: UserPerformanceApi) => UserPerformanceChart
}

export class UserPerformanceClass implements IUserPerformanceClass{
    
    FormatData(data: UserPerformanceApi) {
        return{
            userId : data.userId,
            kind : this.translateKind(data.kind),
            data : data.data,
        }as UserPerformanceChart
    }

    private translateKind(kind: { [key: string]: string }): { [key: number]: string } {
        const translatedKind: { [key: string]: string } = {};
        Object.entries(kind).forEach(([key, value]) => {
        const keyNumber = parseInt(key);
        const newKeyNumber = 7 - keyNumber; // Inverse l'ordre des clés

        switch (value) {
        case 'cardio':
            translatedKind[newKeyNumber] = 'Cardio';
            break;
        case 'energy':
            translatedKind[newKeyNumber] = 'Energie';
            break;
        case 'endurance':
            translatedKind[newKeyNumber] = 'Endurance';
            break;
        case 'strength':
            translatedKind[newKeyNumber] = 'Force';
            break;
        case 'speed':
            translatedKind[newKeyNumber] = 'Vitesse';
            break;
        case 'intensity':
            translatedKind[newKeyNumber] = 'Intensité';
            break;
        default:
            translatedKind[newKeyNumber] = value;
        }
        });
        return translatedKind;
    }
}