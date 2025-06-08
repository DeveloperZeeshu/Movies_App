import { NavLink } from "react-router-dom";

export const Header = () => {
    const getNavLinkStyle = ({ isActive }) => {
        return {
            color: isActive ? '#535bf2' : 'black',
        };
    };
    return (
        <>
            <header className="section-navbar">
                <section className="top_txt">
                    <div className="head container">
                        <div className="head_txt">
                            <p>Get Zeeshu Membership, 30-day return or refund guarantee.</p>
                        </div>
                        <div className="sing_in_up">
                            <NavLink to="#">SIGN IN</NavLink>
                            <NavLink to="#">SIGN UP</NavLink>
                        </div>
                    </div>
                </section>

                <div className="container">
                    <div className="navbar-brand">
                        <NavLink to="index"><p>ZeeshuFlix</p></NavLink>
                    </div>
                    <nav className="navbar">
                        <ul>
                            <li className="nav-item">
                                <NavLink to="/" className='nav-link' style={getNavLinkStyle}>Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/movie" className='nav-link' style={getNavLinkStyle}>Movie</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/contact" className='nav-link' style={getNavLinkStyle}>Contact</NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    );
};