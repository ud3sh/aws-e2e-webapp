# e2e-aws-webapp
E2E AWS App using Lambda

This demonstrates testing in a cloud aplication, that takes an arithmetic expression as input, uses a servlerless architecture to compute things on the backend, send an email as a result.

Unit tests are great for testing edge cases. We can do some basic two layer integration tests using docker containers, or something like localstack.
However, sometimes we just need to ensure that everything is glued to geather. For this we can demonstrate end to end testing.

`e2e-aws-smoke-tests` is an example how to tests this application end to end.

## URL
https://main.d2w6tcyr0gxmy5.amplifyapp.com/


