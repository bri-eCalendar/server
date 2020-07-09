require("dotenv").config();

const port = process.env.PORT || 8675;
const server = require("./api/server.js");
server.listen(port, () => console.log(`\nserver is listening on ${port}`));
