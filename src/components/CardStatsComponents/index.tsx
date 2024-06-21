import CardStats from "../../test/CardStats/CardStats"
import apple from '../../assets/apple.png';
import cheeseburger from '../../assets/cheeseburger.png';
import chicken from '../../assets/chicken.png';
import energy from '../../assets/energy.png';
import useFetchUserData from "../../hooks/useFetchUserData";
import { useEffect } from "react";

function CardStatsComponent() {

    const { fetchUserData, userData, isloaging: isLoadingUserData, error: errorUserData } = useFetchUserData();

    useEffect(() => {
        fetchUserData()
    },[]);

    if (isLoadingUserData) {
        return <p>Chargement</p>
    }
    if (errorUserData) {
        return <p>Erreur chargement</p>
    }
    return (
        <div className='stats-container'>
            <CardStats logo={energy} classColor="red" data={`${userData?.keyData.calorieCount}kCal`} type="Calories" />
            <CardStats logo={chicken} classColor="blue" data={`${userData?.keyData.proteinCount}g`} type="Proteines" />
            <CardStats logo={apple} classColor="yellow" data={`${userData?.keyData.carbohydrateCount}g`} type="Glucides" />
            <CardStats logo={cheeseburger} classColor="pink" data={`${userData?.keyData.lipidCount}g`} type="Lipides" />
        </div>
    )

}

export default CardStatsComponent