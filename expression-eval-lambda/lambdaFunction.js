const AWS = require('aws-sdk');
let dynamodb = new AWS.DynamoDB.DocumentClient();


exports.handler = async (event) => {
    // Extract values from event and format as strings
    let name = JSON.stringify(`Hello from Lambda, ${event.firstName} ${event.lastName}`);
    // Create a JSON object with our response and store it in a constant
    
    // Create JSON object with parameters for DynamoDB and store in a variable
    let date = new Date();
    let now = date.toISOString();

    let params = {
        TableName:'ExpressionEvalDatabase',
        Item: {
            'id': name,
            'LatestGreetingTime': now,
        }
    };
    // Using await, make sure object writes to DynamoDB table before continuing execution
    await dynamodb.put(params).promise();
    // Create a JSON object with our response 
    
    
    const response = {
        statusCode: 200,
        body: name
    };
    // Return the response constant
    return response;
};
