import './works.scss';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { useState } from 'react';

export default function Works() {

    const [CurrSlide, setCurrSlide] = useState(0);

    const data = [

        {
            id: 1,
            icon: "./assets/MyPhoto.jpeg",
            title: "Web Design",
            describ: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.alias eaque facere asperiores ea incidunt deleniti obcaecati",
            img: "./assets/MyPhoto.jpeg"
        },
        {
            id: 2,
            icon: "./assets/MyPhoto.jpeg",
            title: "Mobile Design",
            describ: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.alias eaque facere asperiores ea incidunt deleniti obcaecati!",
            img: "./assets/MyPhoto.jpeg"
        },
        {
            id: 3,
            icon: "./assets/MyPhoto.jpeg",
            title: "Branding",
            describ: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.alias eaque facere asperiores ea incidunt deleniti obcaecati!",
            img: "./assets/MyPhoto.jpeg"
        }
    ]

    const handleClick = (way) => {
        way === 'left' 
        ? setCurrSlide(CurrSlide > 0 ? CurrSlide-1 : 2) 
        : setCurrSlide(CurrSlide < data.length-1 ?  CurrSlide + 1 : 0);
    }

    return (
        <div className="works" id="works">
            <div className="slider" style={{  transform: `translateX(-${CurrSlide * 100}vw)` }}>
                {data.map((d) => (
                    <div className="container">
                        <div className="item">
                            <div className="left">
                                <div className="leftContainer">
                                    <div className="imgContainer">
                                        <img src={d.icon} alt=""/>
                                    </div>
                                    <h2>{d.title}</h2>
                                    <p>
                                        {d.describ}
                                    </p>
                                    <span>Projects</span>
                                </div>
                            </div>
                            <div className="right">
                                <img src="assets/MyPhoto.jpeg" alt=""/>
                            </div>
                        </div>
                    </div>
                ))
                } 
            </div>
            <ArrowBackIosIcon 
                className="arrow left" 
                style={{color:'white',fontSize:50}}
                onClick={() => handleClick("left")}
            />
            <ArrowForwardIosIcon 
                className="arrow right" 
                style={{color:'white',fontSize:50}}
                onClick={() => handleClick( )}
            />
        </div>
    )
}
