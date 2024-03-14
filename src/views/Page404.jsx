const React = require('react');

module.exports = function Page404() {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@300..700&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="/css/page404.css" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
          crossOrigin="anonymous"
        />
        <title>ErrorPage</title>
      </head>
      <body>
        <section className="page_404">
          <div className="container_404">
            <div className="four_zero_four_bg">
              <h1 className="text-center">404</h1>
            </div>

            <div className="contant_box_404">
              <h3>Упс...</h3>

              <p>Ты свернул на кривую дорожку и мальца заблудился</p>

              <a href="/">
                <button type="button" className="button green">
                  На главную
                </button>
              </a>
            </div>
          </div>
        </section>
      </body>
    </html>
  );
};
