let response;

/**
 * @param {Object} event - API Gateway Lambda Proxy Input Format
 *
 * @param {Object} context
 *
 * @returns {Object} object - API Gateway Lambda Proxy Output Format
 * 
 */
exports.lambdaHandler = async (event, context) => {

    let response = {'headers': {'Content-Type': 'application/json'}}
    switch (event.httpMethod) {
        case "GET":
            response.statusCode = 200
            response.body = JSON.stringify({ message: 'here is your banana' });
            break;
        case "POST":
            response.statusCode = 201
            response.body = JSON.stringify({  message: `thanks for ${JSON.parse(event.body).message}` });
            break;
    }

    return response;
};
