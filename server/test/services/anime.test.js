const app = require('../../src/app');

describe('\'anime\' service', () => {
  it('registered the service', () => {
    const service = app.service('anime');
    expect(service).toBeTruthy();
  });
});
