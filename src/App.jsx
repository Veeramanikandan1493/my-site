import {NavLink, Route, Routes} from "react-router-dom"
import Home from "./pages/Home.jsx"
import Projects from "./pages/Projects.jsx"
import Contact from "./pages/Contact.jsx"

function NavItem({to, children}) {
    return (
        <NavLink
            to={to}
            end={to === "/"}
            className={({isActive}) => `navlink ${isActive ? "active" : ""}`}
        >
            {children}
        </NavLink>
    )
}

export default function App() {
    return (
        <div className="shell">
            <header className="header">
                <div className="brand">
                    <div className="avatar">V</div>
                    <div>
                        <div className="name">Veeramanikandan</div>
                        <div className="tag">Python • Data Engineering • ML</div>
                    </div>
                </div>

                <nav className="nav">
                    <NavItem to="/">Home</NavItem>
                    <NavItem to="/projects">Projects</NavItem>
                    <NavItem to="/contact">Contact</NavItem>
                </nav>
            </header>

            <main className="main">
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/projects" element={<Projects/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                </Routes>
            </main>

            <footer className="footer">
                <span>© {new Date().getFullYear()} Veeramanikandan</span>
                <span className="dot">•</span>
                <a className="footerLink" href="https://github.com/veeramanikandan1493" target="_blank"
                   rel="noreferrer">
                    GitHub
                </a>
            </footer>
        </div>
    )
}
