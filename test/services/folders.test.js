const assert = require('assert');
const app = require('../../src/app');

describe('\'folders\' service', () => {
  it('registered the service', () => {
    const service = app.service('folders');

    assert.ok(service, 'Registered the service');
  });
});
