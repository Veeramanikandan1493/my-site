import {NavLink, Route, Routes, useLocation} from "react-router-dom"
import Home from "./pages/Home.jsx"
import Projects from "./pages/Projects.jsx"
import profileData from "./data/profile.json"


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
    const {personal, social} = profileData;
    const location = useLocation();
    const isHomePage = location.pathname === "/";
    const isProjectsPage = location.pathname === "/projects";

    return (
        <div className="shell">
            <header className="header">
                <div className="brand">
                    <div className="avatar">{personal.avatar || "V"}</div>
                    <div>
                        <div className="name">{personal.name}</div>
                        <div className="tag">{personal.title}</div>
                        {personal.email && (
                            <div className="p dim" style={{fontSize: '0.875rem'}}>
                                📧 {personal.email}
                            </div>
                        )}
                        {personal.phone && (
                            <div className="p dim" style={{fontSize: '0.875rem'}}>
                                📱 {personal.phone}
                            </div>
                        )}
                    </div>
                </div>

                <nav className="nav">
                    {!isHomePage && <NavItem to="/">Home</NavItem>}
                    {!isProjectsPage && <NavItem to="/projects">Projects</NavItem>}
                    {social.map((link, index) => (
                        <a
                            key={index}
                            href={link.href}
                            target="_blank"
                            rel="noreferrer"
                            className="navlink"
                            style={{display: 'flex', alignItems: 'center', gap: '4px'}}
                        >
                            {link.type === 'github' && (
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                                    <path
                                        d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48.54 2.19 0 3.05-2.47 5.52-5.52 5.52z"/>
                                </svg>
                            )}
                            {link.type === 'linkedin' && (
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                                    <path
                                        d="M0 1.146C0 .513.526 0 1.175v13.65C0 15.474.526 16 1.146 16h13.65c.63 0 1.146-.526 1.146-1.175V1.175C15.746.526 15.22 0 14.65 0H1.146zm4.943 12.248V6.169H2.517v7.225h2.571zm-1.285-8.2c-.836 0-1.458-.604-1.458-1.458 0-.855.622-1.458 1.458-1.458.837 0 1.458.603 1.458 1.458zm2.89 8.2h-2.571V8.79c0-.778.022-1.7-.145-2.15-.145-.549 0-.89.208-1.112.487-.3.279-.279.575-.637.575-.965 0-.557-.216-1.043-.575-1.446.396-.267.75-.634 1.055-.634.396 0 .795.149 1.055.634.403.403.575.889.575 1.446 0 .328-.149.686-.575.965-.279.279-.563.487-1.112.487-.45 0-.836-.145-2.15.145v3.604z"/>
                                </svg>
                            )}
                            {link.title}
                        </a>
                    ))}
                </nav>
            </header>

            <main className="main">
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/projects" element={<Projects/>}/>
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
