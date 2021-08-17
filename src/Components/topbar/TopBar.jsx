import './topBar.scss';
import {Person,Mail} from '@material-ui/icons';

export default function TopBar({menuOpen, setMenuOpen}) {
    return (
        <div className={"topbar " + (menuOpen && "active")} >
            <div className="wrapper"> 
                <div className="left">
                    <a href="#intro" className="logo">Jayavishvaa</a>
                    <div className="itemContainer">
                        <Person className="icon"/>
                        <span>+91 6379024835</span>
                    </div>
                    <div className="itemContainer">
                        <Mail className="icon"/>
                        <span>jvishvaa2001@gmail.com</span>
                    </div>
                </div>
                <div className="right">
                    <div className="hamBurger" onClick={() => setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3 "></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
