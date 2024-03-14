const React = require('react');

function Navbar({ login }) {
  return (
    <header className="header">
      <nav className="navbar navbar-expand-lg navbar-custom">
        <div className="container-fluid">
          <a className="navbar-brand navbar-brand-custom" href="/">
            Magic: The Gathering
          </a>
          <button
            className="navbar-toggler navbar-toggler-custom"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse navbtn" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              {login ? (
                <>
                  <a className="nav-link nav-link-custom" href="/basket">
                    Корзина
                  </a>
                  <a
                    className="nav-link nav-link-custom"
                    href={`/user/${login}`}
                  >
                    Личный кабинет
                  </a>
                  <a className="nav-link nav-link-custom" href="/logout">
                    Выйти
                  </a>
                </>
              ) : (
                <>
                  <a className="nav-link nav-link-custom" href="/login">
                    Войти
                  </a>
                  <a className="nav-link nav-link-custom" href="/reg">
                    Зарегистрироваться
                  </a>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

module.exports = Navbar;
