import test from 'tape';
import request from 'supertest';

import app from '../src/app';

test('GET /', (assert) => {

  request(app)
  .get('/')
  .expect('Content-Type', /text\/html/)
  .expect('Content-Length', '11')
  .expect(200)
  .end(function(err, res) {
    if (err) throw err;

    assert.error(err, 'No error');
    assert.same(res.text, 'Hello World', 'Receive Hello World string');
    assert.end();
  });
})
