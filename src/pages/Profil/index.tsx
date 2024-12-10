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
        return (
            <div>
                <Header />
                <div className='main'>
                    <Sidebar />
                    <div className='container-loader'>
                        <svg className="spinner" width="65px" height="65px" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
                            <circle className="path" fill="none" stroke-width="6" stroke-linecap="round" cx="33" cy="33" r="30"></circle>
                        </svg>
                        <p>chargement des données</p>
                    </div>
                </div>
            </div>
        )
    }
    if (errorUserData) {
        return(
        <div>
            <Header />
            <div className='main'>
                    <Sidebar />
                    <div className='user-card-container'>
                        <div className='user-card'>
                            <a href="/?id=12">
                                <p>utilisateur 12</p>
                            </a>
                        </div>
                        <div className='user-card'>
                            <a href="/?id=18">
                                <p>utilisateur 18</p>
                            </a>
                        </div>
                    </div>
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