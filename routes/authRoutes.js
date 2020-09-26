const passport = require("passport");

module.exports = app => {
  app.post("/api/signup", (req, res, next) => {
    passport.authenticate("local-signup", (err, user, info) => {
      if (err) {
        return next(err); // will generate a 500 error
      }
      if (!user) {
        res.send(info.message);
      }

      res.redirect("/");
    })(req, res, next);
  });

  app.post("/api/login", (req, res, next) => {
    passport.authenticate("local-login", (err, user, info) => {
      if (err) {
        return next(err); // will generate a 500 error
      }
      if (!user) {
        res.send(info.message);
      }

      res.redirect("/notesApp");
    })(req, res, next);
  });

  // Logout
  app.get("/api/logout", (req, res) => {
    // kill the cookie
    req.logout();
    res.redirect("/");
  });

  // Get current user
  app.get("/api/current_user", (req, res) => {
    res.send(req.user);
  });
};