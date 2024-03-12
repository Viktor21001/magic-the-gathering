const { logPlugin } = require('@babel/preset-env/lib/debug');
const React = require('react');

module.exports = function Layout({ children, login }) {
  return (
    <html lang="ru">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Magic: The Gathering</title>
        <link rel="icon" href="/media/favicon.ico" type="image/x-icon" />
        <link
          rel="shortcut icon"
          href="/media/favicon.ico"
          type="image/x-icon"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@300..700&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="/css/style.css" />
        <script defer src="/js/index.js" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
          crossOrigin="anonymous"
        />
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL"
          crossOrigin="anonymous"
        />
        <script
          src="https://api-maps.yandex.ru/2.1/?apikey=92bad04a-63e8-46e6-ac23-b89e6d4ae7d1&lang=ru_RU"
          type="text/javascript"
        />
      </head>
      <header className="header">
        {login ? (
          <nav
            className="navbar navbar-expand-lg bg-body-tertiary"
            style={{ padding: 0 }}
          >
            <div className="container-fluid">
              <a className="navbar-brand" href="/">
                {/* <img src="/assets/house_8ue6x389uk3a.svg" alt="mainLogo" /> */}
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
                  <a className="nav-link" href="/logout">
                    Выйти
                  </a>
                  <a className="nav-link" href={`/user/${login}`}>
                    {login}
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
                {/* <img src="/assets/house_8ue6x389uk3a.svg" alt="mainLogo" /> */}
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
      <body>
        <div className="bodyMainContent">{children}</div>
      </body>
      {login ? (
        <footer className="footer">
          <div>Copyright © 2024</div>
        </footer>
      ) : (
        <footer className="footer">
          <div>Copyright © 2024</div>
        </footer>
      )}
    </html>
  );
};
