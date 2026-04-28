import iwc from '../assets/general/iwc.svg'

export default function Navbar() {

    return (

      <nav className="topbar" aria-label="Primary">
            <img src={iwc} alt="" style={{width: 100}} />
            <a className="brand" href="#home">
            Ian Campbell
            </a>
            <div className="nav-links">
            <a href="#projects">Projects</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
            </div>
        </nav>
    )
}