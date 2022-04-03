# e2e-aws-app
E2E AWS App using Lambda



This demonstrates testing in a cloud aplication, that takes an arithmetic expression as input, uses a servlerless architecture to compute things on the backend, send an email as a result.

While unit tests are great for testing edge cases.
We can do some basic two layer integration tests using docker containers, or something like localstack.

However, sometimes we just need to ensure that everything is glued to geather. For this we can demonstrate end to end testing.


## TODO
1. Add email address and expression.
2. Add a lambda to do some calculation.
3. Add a lambda to send out email [or just send it from the lambda].
4. Add a cypress test linked to circleci ideally.
5. Make sure screensharing works.