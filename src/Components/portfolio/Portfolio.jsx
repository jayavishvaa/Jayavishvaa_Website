import './portfolio.scss';
import PortfolioList from '../portfolioList/PortfolioList';
import { useState, useEffect } from 'react';
import { MobilePortfolio, WebPortfolio, DesignerPortfolio, BrandingPortfolio } from '../../data';

export default function Portfolio() {

    const [Selected, setSelected] = useState(false);
    const [Data, setData] = useState([])

    const List = [
        {
            id: 'featured',
            title: 'Featured'
        },
        {
            id: 'web',
            title: 'Web App'
        },
        {
            id: 'mobile',
            title: 'Mobile App'
        },
        {
            id: 'designing',
            title: 'Designing'
        },
        {
            id: 'branding',
            title: 'Branding'
        },
    ]

    useEffect(() => {

        switch(Selected){
            case "featured":
                setData(WebPortfolio);
                break;
            case "web":
                setData(MobilePortfolio);
                break;
            case "mobile":
                setData(DesignerPortfolio);
                break;
            case "designing":
                setData(BrandingPortfolio);
                break;
            case "branding":
                setData(WebPortfolio);
                break;
            default:
                setData(MobilePortfolio);
            
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
