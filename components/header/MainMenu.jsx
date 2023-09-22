import Link from "next/link";
import {
  menuItems,
  pagesItems,
  portfolioItems,
  blogItems,
} from "../../data/menu";
import {
  isActiveLink,
  isActiveParent,
  isActiveParentChaild,
} from "../../utils/linkActiveChecker";

import { useRouter } from "next/router";

const MainMenu = () => {
  const router = useRouter();
  return (
    <nav className="navbar navbar-expand-lg order-lg-2">
      <button
        className="navbar-toggler d-block d-lg-none"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span />
      </button>
      {/* End mobile collapse menu */}

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="d-block d-lg-none">
            <div className="logo">
              <Link href="/" className="d-block">
                <img src="/images/logo/logo_01.png" alt="" width={95} />
              </Link>
            </div>
          </li>
          {/* End li */}

          {/* <li className="nav-item dropdown mega-dropdown-md active">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              data-bs-auto-close="outside"
              aria-expanded="false"
            >
              Home
            </a> */}

          <li className="nav-item">
            <Link className="nav-link" href="/" role="button">
              Home
            </Link>
          </li>

          {/* <ul className="dropdown-menu">
              <li>
                <div className="row">
                  {menuItems.map((menu, index) => (
                    <div className="col-lg-4" key={index}>
                      <div className="menu-column">
                        <h6 className="mega-menu-title">{menu.title}</h6>
                        <ul className="style-none mega-dropdown-list">
                          {menu.items.map((item, index) => (
                            <li key={index}>
                              <Link href={item.link} className="dropdown-item">
                                <span>{item.title}</span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </li>
            </ul> */}
          {/* </li> */}
          {/* End li (home mega menu) */}

          {/* <li className="nav-item  dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              data-bs-auto-close="outside"
              aria-expanded="false"
            >
              Pages
            </a>
            <ul className="dropdown-menu">
              {pagesItems.map((item, index) => (
                <li className="dropdown-submenu dropdown" key={index}>
                  <a
                    className="dropdown-item dropdown-toggle"
                    data-bs-toggle="dropdown"
                    data-bs-auto-close="outside"
                    aria-expanded="false"
                    href="#"
                  >
                    <span>{item.title}</span>
                  </a>
                  <ul className="dropdown-menu">
                    {item.subItems.map((subMenu, i) => (
                      <li key={i}>
                        <Link href={subMenu.link} className="dropdown-item">
                          <span>{subMenu.title}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}

              <li>
                <Link href="/pages-menu/pricing" className="dropdown-item">
                  <span>Pricing</span>
                </Link>
              </li>
              <li>
                <Link href="/pages-menu/testimonials" className="dropdown-item">
                  <span>Testimonials</span>
                </Link>
              </li>
            </ul>
          </li> */}
          {/* End li (pages) */}

          {/* <li className="nav-item">
            <Link className="nav-link" href="/portfolio/portfolio-v2" role="button">
              Portfolio
            </Link>
          </li> */}

          <li className="nav-item">
            <Link className="nav-link" href="/portfolio/blinds" role="button">
              Blinds
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" href="/portfolio/shutters" role="button">
              Shutters
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" href="/portfolio/drapes" role="button">
              Drapes
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" href="/portfolio/shades" role="button">
              Shades
            </Link>
          </li>

          {/* <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              data-bs-auto-close="outside"
              aria-expanded="false"
            >
              Portfolio
            </a>
            <ul className="dropdown-menu">
              {portfolioItems.map((item, index) => (
                <li key={index}>
                  <Link href={item.link} className="dropdown-item">
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </li> */}
          {/* End li (portfolio) */}

          {/* <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              data-bs-auto-close="outside"
              aria-expanded="false"
            >
              Blog
            </a>
            <ul className="dropdown-menu">
              {blogItems.map((blog, index) => (
                <li key={index}>
                  <Link href={blog.link} className="dropdown-item">
                    <span>{blog.text}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </li> */}
          {/* End li (blog) */}

          <li className="nav-item">
            <Link className="nav-link" href="/contact" role="button">
              Contact
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" href="pages-menu/about-us-v1" role="button">
              About us
            </Link>
          </li>
          {/* End li (contact) */}
        </ul>
        {/* End ul */}

        {/* Mobile Content */}
        {/* <div className="mobile-content d-block d-lg-none">
          <div className="d-flex flex-column align-items-center justify-content-center mt-70">
            <Link href="/contact" className="btn-twentyOne fw-500 tran3s">
              Contact us
            </Link>
          </div>
        </div> */}
        {/* /.mobile-content */}
      </div>
    </nav>
  );
};

export default MainMenu;
