const Navbar = () => {
    return (
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
                <i className="fas fa-bars"></i>
                <div>
                    
                </div>
            </nav>
        </div>
    )
}

export default Navbar