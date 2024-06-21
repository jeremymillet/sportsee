import './CardStats.css'

type CardStatsProps = {
    logo: string;
    classColor: string;
    data: string;
    type: string;
}


const CardStats: React.FC<CardStatsProps> = ({ logo, classColor, data,type }) => {
    return (
        <div className="card">
            <div className={`logo-container ${classColor}`}>
                <img src={logo} alt="" />
            </div>
            <div className="text-container">
                <p className="text-number">{data}</p>
                <p>{type}</p>
            </div>
        </div>
    )
}


export default CardStats