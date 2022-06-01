const Navbar = () => {
    return (
      <nav id="main-nav">
        <ul>
          <li>
            <a href="#stepsBlock">COMO VOTAR</a>
          </li>
          <li>
            <a href="#2fa">2FA</a>
          </li>
          <li>
            <a href="#smart">SMART CONTRACT</a>
          </li>
          <li>
            <a href="#test">SOBRE NOSOTROS</a>
          </li>
          <li>
            <a href="/resultado">
              <em>RESULTADOS</em>
            </a>
          </li>
          <li>
            <a href="/vote">
              <em>VOTA</em>
            </a>
          </li>
        </ul>
      </nav>
    );
}

export default Navbar
