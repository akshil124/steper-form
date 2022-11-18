import {NavLink, Outlet} from "react-router-dom";
import "./index.css"
export default function Home() {
    return (
        <div>
            <nav className="Link_routes">
                <ul>
                    <li>
                        <NavLink
                            to="/"
                            className="btn"
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/render"
                            className="btn"
                        >
                            Render
                        </NavLink>
                    </li>
                </ul>
            </nav>
            <Outlet/>
        </div>
    )
}