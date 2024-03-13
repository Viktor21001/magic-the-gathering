const React = require('react');

function Navbar({ login }) {
  return (
    <header className="header">
      {login ? (
        <nav
          className="navbar navbar-expand-lg bg-body-tertiary"
          style={{ padding: 0 }}
        >
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              Magic: The Gathering
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <a className="nav-link" href="/basket">
                  Корзина
                </a>
                <a className="nav-link" href={`/user/${login}`}>
                  Личный кабинет
                </a>
                <a className="nav-link" href="/logout">
                  Выйти
                </a>
              </div>
            </div>
          </div>
        </nav>
      ) : (
        <nav
          className="navbar navbar-expand-lg bg-body-tertiary"
          style={{ padding: 0 }}
        >
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              Magic: The Gathering
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <a className="nav-link" href="/login">
                  Войти
                </a>
                <a className="nav-link" href="/reg">
                  Зарегистрироваться
                </a>
              </div>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}

module.exports = Navbar;
