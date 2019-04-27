import swaggerUI from './swaggerUI';

exports.handler = (event, context, callback) => {
  const {
    headers: { Host }
  } = event;
  callback(null, {
    statusCode: 200,
    headers: {
      'Content-Type': 'text/html'
    },
    body: swaggerUI({ Host })
  });
};
