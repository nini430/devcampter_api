const http = require('http');

const app = require('./app');

const PORT = process.env.PORT || 5000;

const server = http.createServer(app);

const startServer = async () => {
  server.listen(
    PORT,
    console.log(
      `Server running in ${process.env.NODE_ENV} mode on port ${process.env.PORT}`
    )
  );
};

startServer();
