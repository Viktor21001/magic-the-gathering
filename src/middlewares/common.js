function secureRoute(req, res, next) {
  if (!req.session.login) {
    next();
  } else {
    res.redirect('/');
  }
}

function checkUser(req, res, next) {
  if (req.session.login) {
    next();
  } else {
    res.redirect('/404');
  }
}

module.exports = { secureRoute, checkUser };
