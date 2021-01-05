import { useState } from "react"

const Navbar = () => {

    const [statusmenu, setStatusmenu] = useState(false)
    const [statusslidebtn, setStatusslidebtn] = useState(false)

    return (
        <>
            <div className="header-topbar">
                <img src="/static/images/profile.jpg" alt="" className="logo" />
                <nav className="navbar-pc">
                    <ul className="nav-area">
                        <li><a href="#">Profile</a></li>
                        <li><a href="#">Education</a></li>
                        <li><a href="#">Skill</a></li>
                        <li><a href="#">Achievement</a></li>
                    </ul>
                </nav>

                <nav className="navbar-mobile">
                    <i className="fas fa-bars" onClick={() => setStatusmenu(!statusmenu)}></i>
                    <div className={`list-mobile ${statusmenu ? "" : "close"}`}>
                        <ul>
                            <li><a href="#">Profile</a></li>
                            <li><a href="#">Education</a></li>
                            <li><a href="#">Skill</a></li>
                            <li><a href="#">Achievement</a></li>
                        </ul>
                    </div>
                </nav>
            </div>
            <div className={`container-trade `}>
                <div className="toggle-btn">
                    <div className="box-rotate">
                        <a onClick={() => setStatusslidebtn(!statusslidebtn)}>
                            SET INDEX
                        <i className={`fas fa-caret-right ${statusslidebtn ? "arrow-open" : "arrow-close"}`}></i>
                        </a>
                    </div>
                </div>
                <div className={`content-trade ${statusslidebtn ? "" : "close"}`}>Content</div>
            </div>


        </>
    )
}

export default Navbar