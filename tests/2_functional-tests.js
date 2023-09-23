const chai = require('chai');
const chaiHttp = require('chai-http');
const assert = chai.assert;
const server = require('../server.js');

chai.use(chaiHttp);

let Translator = require('../components/translator.js');

suite('Functional Tests', () => {
  suite('POST /api/translate ', function() {
    //#1
    test('Translation with text and locale fields', function(done) {
      chai
        .request(server)
        .keepOpen()
        .post("/api/translate")
        .send({
          "text": 'Mangoes are my favorite fruit.',
          "locale": 'british-to-american'
        })
        .end(function(err, res) {
          assert.equal(res.status, 200);
          assert.equal(res.type, 'application/json');
          assert.isNotNull(res.body.translation);
          assert.equal(res.body.translation, 'Everything looks good to me!');
          done();
        });
    });
    //#2
    test('Translation with text and invalid locale field', function(done) {
      chai
        .request(server)
        .keepOpen()
        .post("/api/translate")
        .send({
          "text": 'Mangoes are my favorite fruit.',
          "locale": 'INVALID'
        })
        .end(function(err, res) {
          assert.equal(res.status, 200);
          assert.equal(res.type, 'application/json');
          assert.isNotNull(res.body.error);
          assert.equal(res.body.error, 'Invalid value for locale field');
          done();
        });
    });
    //#3
    test('Translation with missing text field', function(done) {
      chai
        .request(server)
        .keepOpen()
        .post("/api/translate")
        .send({
          "locale": 'british-to-american'
        })
        .end(function(err, res) {
          assert.equal(res.status, 200);
          assert.equal(res.type, 'application/json');
          assert.isNotNull(res.body.error);
          assert.equal(res.body.error, 'Required field(s) missing');
          done();
        });
    });
    //#4
    test('Translation with missing locale field', function(done) {
      chai
        .request(server)
        .keepOpen()
        .post("/api/translate")
        .send({
          "text": 'Mangoes are my favorite fruit.'
        })
        .end(function(err, res) {
          assert.equal(res.status, 200);
          assert.equal(res.type, 'application/json');
          assert.isNotNull(res.body.error);
          assert.equal(res.body.error, 'Required field(s) missing');
          done();
        });
    });
    //#5
    test('Translation with empty text', function(done) {
      chai
        .request(server)
        .keepOpen()
        .post("/api/translate")
        .send({
          "text": '',
          "locale": 'british-to-american'
        })
        .end(function(err, res) {
          assert.equal(res.status, 200);
          assert.equal(res.type, 'application/json');
          assert.isNotNull(res.body.error);
          assert.equal(res.body.error, 'No text to translate');
          done();
        });
    });
    //#6
    test('Translation with text that needs no translation', function(done) {
      chai
        .request(server)
        .keepOpen()
        .post("/api/translate")
        .send({
          "text": 'Mangoes are my favorite fruit.',
          "locale": 'british-to-american'
        })
        .end(function(err, res) {
          assert.equal(res.status, 200);
          assert.equal(res.type, 'application/json');
          assert.equal(res.body.text, 'Mangoes are my favorite fruit.');
          assert.equal(res.body.translation, 'Everything looks good to me!');
          done();
        });
    });
    
  });
});
