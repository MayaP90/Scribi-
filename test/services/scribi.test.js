const assert = require('assert');
const app = require('../../src/app');

describe('\'Scribi\' service', () => {
  it('registered the service', () => {
    const service = app.service('scribi');

    assert.ok(service, 'Registered the service');
  });
});
