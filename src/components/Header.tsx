import { navLinks } from "@/data/navLinks";
import Link from "next/link";

export default function Header() {
  return (
    <>
      {/* -=============== HEADER =============== */}
      <header className="header" id="header">
        <nav className="nav container">
          <Link href="#" className="nav__logo">
            Nazmul
          </Link>

          <div className="nav__menu">
            <ul className="nav__list">
              {navLinks.map((link, index) => (
                <li key={index} className="nav__item">
                  <Link href={`#${link.id}`} className="nav__link">
                    <i className={link.icon}></i>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* =============== theme change button =============== */}
          <i
            className="bx bx-moon change-theme change-theme-button"
            id="theme-button"
          ></i>
        </nav>
      </header>
    </>
  );
}
