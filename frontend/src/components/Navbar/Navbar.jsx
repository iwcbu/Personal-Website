import { useState } from "react";
import iwc from "../../assets/general/iwc.svg";
import "./navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="topbar" aria-label="Primary">
      <a className="nav-logo" href="#home">
        <img src={iwc} alt="" />
      </a>

      <a className="brand" href="#home">
        Ian Campbell
      </a>

      <button
        className="menu-button"
        type="button"
        onClick={() => setOpen(!open)}
        aria-label="Toggle navigation menu"
        aria-expanded={open}
      >
        ☰
      </button>

      <div className={`nav-links ${open ? "is-open" : ""}`}>
        <a href="#projects" onClick={() => setOpen(false)}>Projects</a>
        <a href="#about" onClick={() => setOpen(false)}>About</a>
        <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
      </div>
    </nav>
  );
}