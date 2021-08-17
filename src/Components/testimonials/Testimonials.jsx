import './testimonials.scss';

export default function Testimonials() {

    const data = [

        {
            id: 1,
            icon: "./assets/MyPhoto.jpeg",
            title: "Mechanical Student IIT Madras",
            describ: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.alias eaque facere asperiores ea incidunt deleniti obcaecati",
            img: "./assets/MyPhoto.jpeg",
            name: 'Jayavishvaa'
        },
        {
            id: 2,
            icon: "./assets/MyPhoto.jpeg",
            title: "Web Developer IIT Madras",
            describ: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.alias eaque facere asperiores ea incidunt deleniti obcaecati!",
            img: "./assets/MyPhoto.jpeg",
            name: 'Jayabal',
            featured: true
        },
        {
            id: 3,
            icon: "./assets/MyPhoto.jpeg",
            title: "Mobile Developer IIT Madras",
            describ: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.alias eaque facere asperiores ea incidunt deleniti obcaecati!",
            img: "./assets/MyPhoto.jpeg",
            name: 'Jvishvaa'
        }
    ]

    return (
        <div className="testimonials" id="testimonials">
            <h1>Testimonials</h1>
            <div className="container">
                {data.map((p) => (
                    <div className={p.featured ? "card featured" : "card"}>
                        <div className="top">
                            <img src="assets/downArrow.png" className="left" alt=""/>
                            <img src={p.img} className="user" alt=""/>
                            <img src="assets/Left_arrow.png" className="right" alt=""/>
                        </div>
                        <div className="Center">
                            {p.describ}
                        </div>
                        <div className="Bottom">
                            <h3>{p.name}</h3>
                            <h4>{p.title}</h4>
                        </div>
                    </div>
                ))
                }
            </div>
        </div>
    )
}
