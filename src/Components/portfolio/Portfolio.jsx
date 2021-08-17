import './portfolio.scss';
import PortfolioList from '../portfolioList/PortfolioList';
import { useState, useEffect } from 'react';
import { OsaPortfolio, FleetPortfolio, WhenBusPortfolio, } from '../../data';

export default function Portfolio() {

    const [Selected, setSelected] = useState(false);
    const [Data, setData] = useState([])

    const List = [
        {
            id: 'Fleet',
            title: 'Driver Assitance App'
        },
        {
            id: 'WhenBus',
            title: 'Real-time Tracking App'
        },
    
        {
            id: 'shopping',
            title: 'Shopping App'
        },
        
    ]    

    useEffect(() => {

        switch(Selected){
            case "Fleet":
                setData(FleetPortfolio);
                break;
            case "WhenBus":
                setData(WhenBusPortfolio);
                break;
            case "shopping":
                setData(OsaPortfolio);
                break;
            default:
                setData(FleetPortfolio);
            
        }
        
    }, [Selected])

    return (
        <div className="portfolio" id="portfolio">
            <h1>Portfolio</h1>
            <ul>
                {List.map((item) => (
                    <PortfolioList 
                        title={item.title} 
                        active={Selected ===  item.id}
                        setSelected={setSelected }
                        id={item.id}
                    />
                ))}
            </ul>
            <div className="container">
                {
                    Data.map((d) => (
                        <div className="item">
                            <img src={d.img} alt=" "/>
                            <h3>{d.title}</h3>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
