import test from 'tape';
import request from 'supertest';

import app from '../src/app';

const url = '/api/user';
const testUser = {
  username: 'mantagen',
  password: '123456',
  email: 'mg@mg.com'
}

test(`GET ${url}`, (assert) => {
  request(app)
  .get(url)
  .end((err, res) => {
    if (err) throw err;

    assert.error(err, 'No error');
    assert.equal(res.status, 200, 'should return 200 status code')
    assert.equal(res.body.username, testUser.username, 'Returns correct username');
    assert.end();
  });
})

test(`POST to ${url} with good credentials`, (assert) => {
  request(app)
  .post(url)
  .send(testUser)
  .end((err, res) => {
    if (err) throw err;

    assert.error(err, 'No error');
    assert.equal(res.status, 200, 'should return 200 status code')
    assert.equal(res.body.username, testUser.username, 'Returns correct username');
    assert.end();
  });
})

test(`POST to ${url} missing credentials`, (assert) => {
  request(app)
  .post(url)
  .send({ username: testUser.username })
  .end((err, res) => {
    if (err) throw err;

    assert.error(err, 'No error');
    assert.equal(res.status, 400, 'should return 400 status code')
    assert.end();
  });
})

test(`POST to ${url} with illegal username`, (assert) => {
  request(app)
  .post(url)
  .send(Object.assign({}, testUser, { username: 'mantagen-'}))
  .end((err, res) => {
    if (err) throw err;

    assert.error(err, 'No error');
    assert.equal(res.status, 400, 'should return 400 status code')
    assert.end();
  });
})

test(`POST to ${url} with short password`, (assert) => {
  request(app)
  .post(url)
  .send(Object.assign({}, testUser, { password: 'abc'}))
  .end((err, res) => {
    if (err) throw err;

    assert.error(err, 'No error');
    assert.equal(res.status, 400, 'should return 400 status code')
    assert.end();
  });
})

test(`POST ${url} with illegal email`, (assert) => {
  request(app)
  .post(url)
  .send(Object.assign({}, testUser, { email: 'abc'}))
  .end((err, res) => {
    if (err) throw err;

    assert.error(err, 'No error');
    assert.equal(res.status, 400, 'should return 400 status code')
    assert.end();
  });
})
