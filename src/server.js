import serverless from 'serverless-http';
import express from 'express';
import bodyParser from 'body-parser';

import auth from './util/auth';
import health from './health';

const app = express();

app.use(bodyParser.json({ strict: false }));

// endpoint without authentication
app.get('/health', health);

app.use(auth);
// endpont need authentication under here

exports.handler = serverless(app);
