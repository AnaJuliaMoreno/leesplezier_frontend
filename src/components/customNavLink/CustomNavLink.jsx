import './CustomNavLink.css'
import {NavLink} from "react-router-dom";


function CustomNavLink({to, children}){
    const scrollToTop = () => {
        window.scrollTo(0, 0)
    }
    return(
        <div onClick={scrollToTop}>
        <NavLink
        to={to}
    className={({ isActive }) => isActive ? 'active-link nav-item' : 'default-link nav-item'}
    > {children}
        </NavLink>
        </div>
)
}
export default CustomNavLink;