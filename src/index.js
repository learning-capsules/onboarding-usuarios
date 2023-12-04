const express = require("express");
const morgan = require("morgan");
const pkg = require("../package.json");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 3000;

app.set("pkg", pkg);
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

// Importa y monta el enrutador principal
const mainRouter = require("./routes/index");
const users = require("./routes/users");
const authRoutes = require("./routes/authRoutes");
const videos = require("./routes/videos");
const comments = require("./routes/comments");

app.use("/", mainRouter);
app.use("/users", users);
app.use("/auth", authRoutes);
app.use("/videos", videos);
app.use("/comments", comments);

app.listen(port, () => {
  console.log("Server listening on", port);
});
