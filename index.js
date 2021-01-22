const express = require("express");
const mongoose = require("mongoose");
const keys = require("./config/keys");
const cookieSession = require("cookie-session");
const passport = require("passport");
mongoose.connect(keys.mongoURI);
require("./models/user");
require("./services/passport");
const app = express();
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey],
  })
);

app.use(passport.initialize());
app.use(passport.session());
const PORT = process.env.PORT || 5000;
require("./routes/authRoutes")(app);
app.listen(PORT);
