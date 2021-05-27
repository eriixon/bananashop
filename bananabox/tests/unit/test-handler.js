'use strict';

const app = require('../../app.js');
const chai = require('chai');
const expect = chai.expect;
let context;


describe('Tests Endpoints', function () {
    it('verifies successful GET response', async () => {
        const event = { httpMethod: 'GET'}
        const result = await app.lambdaHandler(event, context)

        expect(result).to.be.an('object');
        expect(result.statusCode).to.equal(200);
        expect(result.body).to.be.an('string');

        let response = JSON.parse(result.body);

        expect(response).to.be.an('object');
        expect(response.message).to.be.equal("here is your banana");
    });

    it('verifies successful POST response', async () => {
        const event = { httpMethod: 'POST', body: "{\"message\": \"yellow banana\"}"}
        const result = await app.lambdaHandler(event, context)

        expect(result).to.be.an('object');
        expect(result.statusCode).to.equal(201);
        expect(result.body).to.be.an('string');

        let response = JSON.parse(result.body);

        expect(response).to.be.an('object');
        expect(response.message).to.be.equal("thanks for yellow banana");
    });
});
