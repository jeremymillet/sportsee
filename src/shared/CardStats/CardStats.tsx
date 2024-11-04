import './CardStats.css'
import PropTypes from 'prop-types';

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

CardStats.propTypes = {
    logo: PropTypes.string.isRequired,
    classColor: PropTypes.string.isRequired,
    data: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
}

export default CardStats