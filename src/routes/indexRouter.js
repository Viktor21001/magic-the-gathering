const router = require("express").Router();

const renderTemplate = require("../lib/renderTemplate");

const Main = require("../views/Main");
const Page404 = require("../views/Page404");
const Order = require("../views/Order");

router.get("/", async (req, res) => {
  const { login } = req.session;
  try {
    renderTemplate(Main, { login }, res);
  } catch (error) {
    console.log("Ошибка на сервере", error);
  }
});

router.get("/404", async (req, res) => {
  renderTemplate(Page404, {}, res);
});

router.get("/logout", (req, res) => {
  req.session.destroy(() => {
    res.clearCookie("cooks");
    res.redirect("/");
  });
});

router.get("/basket", async (req, res) => {
  const { login } = req.session;
  try {
    renderTemplate(Order, {}, res);
  } catch (error) {
    console.log("Ошибка на сервере", error);
  }
});

module.exports = router;
