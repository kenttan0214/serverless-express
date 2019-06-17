import serverless from 'serverless-http';
import express from 'express';
import bodyParser from 'body-parser';

import health from './health';

const app = express();

app.use(bodyParser.json({ strict: false }));

// endpoint without authentication
app.get('/health', health);

exports.handler = serverless(app);
