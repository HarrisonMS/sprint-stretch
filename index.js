const server = require("./api/server");

const PORT = process.env.PORT || 5111;

server.listen(PORT, () => console.log(`server listening on port ${PORT}`));
