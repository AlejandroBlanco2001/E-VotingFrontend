import { Link } from 'react-scroll'
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    return (
      <nav id="main-nav">
        <ul>
          <li>
            <Link
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              HOME
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="guide"
              spy={true}
              smooth={true}
              offset={-190}
              duration={500}
            >
              COMO VOTAR
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="two"
              spy={true}
              smooth={true}
              offset={-210}
              duration={500}
            >
              2FA
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="blockchain"
              spy={true}
              smooth={true}
              offset={-240}
              duration={500}
            >
              SMART CONTRACT
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={-270}
              duration={500}
            >
              SOBRE NOSOTROS
            </Link>
          </li>
          <li>
            <a href="https://vot-e-front.herokuapp.com/resultado">
              <em>RESULTADOS</em>
            </a>
          </li>
          <li>
            <Link
              activeClass="active"
              to="vote"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <a href="https://vot-e-front.herokuapp.com/vote">
                <em>VOTA</em>
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    );
}

export default Navbar