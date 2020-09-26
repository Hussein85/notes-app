const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const mongoose = require("mongoose");
const keys = require("../config/keys");

// Creates a model instance for a user
const User = mongoose.model("user");

// Serialize user and save to cookie. Note: User id comes from mongoDB and is not profile id
passport.serializeUser((user, done) => {
  done(null, user.id);
});

// Deserialize user from cookie then get user by id from database.
passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});

passport.use(
  "local-login",
  new LocalStrategy(function(username, password, done) {
    console.log("Username test:", username);
    User.findOne({ username: username }, function(err, user) {
      if (err) {
        return done(err);
      }
      if (!user) {
        return done(null, false, { message: "Incorrect username." });
      }

      if (user.password != password) {
        return done(null, false, { message: "Incorrect password." });
      }
      return done(null, user);
    });
  })
);

// =========================================================================
// LOCAL SIGNUP ============================================================
// =========================================================================
// we are using named strategies since we have one for login and one for signup
// by default, if there was no name, it would just be called 'local'. Since name is note included as
// default parameter we need to includ in it req.body. We set passReqToCallback to true.
passport.use(
  "local-signup",
  new LocalStrategy({ passReqToCallback: true }, function(
    req,
    username,
    password,
    done
  ) {
    // find a user whose username is the same as the forms username
    // we are checking to see if the user trying to login already exists

    User.findOne({ username: username }, function(err, user) {
      // if there are any errors, return the error
      if (err) return done(err);

      // check to see if there is already a user with that username
      if (user) {
        return done(null, false, {
          message: "That username is already taken."
        });
      } else {
        // if there is no user with that username
        // create the user
        var newUser = new User();

        // set the user's local credentials
        newUser.name = req.body.name;
        newUser.username = username;
        newUser.password = password;

        // save the user
        newUser.save(function(err) {
          if (err) throw err;
          return done(null, newUser);
        });
      }
    });
  })
);

/*
passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback",
      proxy: true
    },
    async (accessToken, refreshToken, profile, done) => {
      const existingUser = await User.findOne({ googleId: profile.id });

      if (existingUser) {
        // We already have a record with give profile ID
        return done(null, existingUser);
      }

      // We don't have a record with this ID, create a new record
      const user = await new User({
        googleId: profile.id,
        name: profile.displayName
      }).save();
      done(null, user);
    }
  )
);
*/
