# Test Driven Development

## Benefits:

- catch bugs
- increase confidence
- speed up quality assurance
- can serve as documentation

## Approach

Test-driven development (TDD) is a software development process that involves writing tests for a piece of code before writing the code itself. The tests are written to specify and validate the desired behavior of the code.

In the case of a React application, TDD would involve writing tests for the components in the application. The tests would ensure that the components are working correctly and producing the expected output.

To implement TDD in a React application, you would follow these steps:

1 Write a test that describes the desired behavior of a component.
Run the test and confirm that it fails. This is because the component has not yet been implemented.
2 Write the code for the component.
3 Run the test again. If the test passes, it means the component is working correctly and meets the desired behavior specified in the test.
4 If the test fails, debug the component and modify the code as needed until the test passes.
TDD can help ensure that your React components are working correctly and reduce the risk of introducing bugs into your application. It also serves as a form of documentation for the behavior of your components.

## Types of testing

There are a few different types of tests that you might write for a React application using test-driven development (TDD). These include:

- Unit tests: These tests focus on a single unit or component of the code, and verify that it is working correctly in isolation. (Jest , React testing library, Enzyme...)

Snapshot tests: These tests take a snapshot of the rendered component and compare it to a reference snapshot. If the component has changed in a way that is not expected, the test will fail.

- Integration tests: These tests verify that different units of the code are working correctly together. (Jest , React testing library, Enzyme...)

- End-to-end (E2E) tests: These tests verify that the application is working correctly from the user's perspective, by simulating user actions and checking that the expected output is produced. (Pupeteer, Cypress...)



[jest](https://jestjs.io/)
[react testing library](https://testing-library.com/docs/)
[cypress](https://docs.cypress.io/guides/overview/why-cypress)

## Caveat of TDD

- Maintainability and resources
- More tests !== better code
- Understanding of what to test, and what for is complex.
