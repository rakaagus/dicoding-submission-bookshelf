const Hapi = require('@hapi/hapi');
const routes = require('./routes');

const initial = async () => {
  const server = Hapi.server({
    port: 5000,
    host: 'localhost',
    routes: {
      cors: {
        origin: ['*'],
      },
    },
  });

  server.route(routes);

  await server.start();
  console.log(`Server Ini berjalan Pada ${server.info.uri}`);
};

initial();
