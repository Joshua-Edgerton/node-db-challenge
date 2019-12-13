const server = require('./server');

const port = process.env.PORT || 4700;

server.listen(port, () => console.log(`\n*** Server running on port ${port}! ***\n`))