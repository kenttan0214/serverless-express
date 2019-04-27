import health from './documentation/health';

const swaggerConfiguration = ({ Host }) => {
  const stage = process.env.STAGE;

  let basePath = '/';
  if (/.+\.amazonaws\.com$/.test(Host)) {
    basePath = `/${stage}`;
  } else if (/localhost/.test(Host)) {
    basePath = '';
  }
  return {
    swagger: '2.0',
    info: {
      title: 'kiihoii',
      contact: {
        email: ''
      }
    },
    basePath,
    paths: {
      ...health
    }
  };
};

export default swaggerConfiguration;
