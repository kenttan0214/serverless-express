const responseSchema = {
  type: 'object',
  properties: {
    status: {
      type: 'string'
    }
  }
};

const demo = {
  '/health': {
    get: {
      tags: ['health'],
      summary: 'Endpoint health check',
      produces: ['application/json'],
      parameters: [],
      responses: {
        200: {
          description: 'Successful operation.',
          schema: responseSchema
        }
      }
    }
  }
};

export default demo;
