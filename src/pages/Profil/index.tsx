import Header from '../../components/Header/index';
import { useEffect } from 'react';

import Sidebar from '../../components/SideBar/index';
import CardStatsComponent from '../../components/CardStatsComponents/index';
import './Profil.css';
import BarChartComponent from '../../components/BarChartComponents';
import ScoreChartComponents from '../../components/ScoreChartComponents';
import RadarChartComponents from '../../components/RadarChartComponents';


import useFetchUserData from '../../hooks/useFetchUserData';
import LineChartComponent from '../../components/LineChart';

function Profil() {
    const { fetchUserData, userData, isloaging: isLoadingUserData, error: errorUserData } = useFetchUserData();
    

    useEffect(() => {
        fetchUserData()
    }, []);
    if (isLoadingUserData) {
        return <p>Chargement</p>
    }
    if (errorUserData) {
        return(
        <div>
            <Header />
            <div className='main'>
                <Sidebar />
                <h1>UTILISATEUR INCONNUE</h1>
            </div>
            </div>
        )
    }
    return (
        <div>
            <Header />
            <div className='main'>
                <Sidebar />
                <div className='dashboard-container'>
                    <div className='name-container'>
                        <h1>Bonjour <span>{userData?.userInfos.firstName}</span></h1>
                        <h2>Félicitations ! Vous avez explosé vos objectifs hier 👏</h2>
                    </div>
                    <div className='graph-stats-container'>
                        <div className='graph-container'>
                            <div>
                                <BarChartComponent/>
                            </div>
                            <div className='square-graph-container'>
                                <LineChartComponent/>
                                <RadarChartComponents/>
                                <ScoreChartComponents/>
                            </div>
                        </div>
                        <CardStatsComponent/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profil;