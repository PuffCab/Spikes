# Test Driven Development

## Benefits

- catch bugs
- increase confidence
- speed up quality assurance
- can serve as documentation

## Approach

Test-driven development (TDD) is a software development methodology that emphasizes
writing tests before writing the actual code. The primary goal of TDD is to ensure that the codebase is reliable, maintainable, and correctly implements the desired functionality.

In the case of a React application, TDD would involve writing tests for the components in the application. The tests would ensure that the components are working correctly and producing the expected output.

To implement TDD in a React application, you would follow these steps:

__Write a Test__: In this step, a developer writes a test case that defines the expected behavior of a specific piece of functionality. This test initially fails because the code to fulfill that functionality hasn't been implemented yet.

__Write the Code__: Once the test is in place, the developer writes the minimum amount of code required to make the test pass. The focus is on making the test case pass, rather than creating a complete solution at this stage.

__Refactor__: After the test case passes, the developer can refactor the code to improve its design, structure, and efficiency, while ensuring that all tests still pass. Refactoring helps maintain the code's quality and readability.

This cycle repeats for every new feature, bug fix, or enhancement that needs to be implemented. By continuously writing tests and then implementing code to satisfy those tests,
TDD can help ensure that your React components are working correctly and reduce the risk of introducing bugs into your application. It also serves as a form of documentation for the behavior of your components.

## TDD Benefits

__Better Code Quality__: TDD encourages developers to thoroughly think through requirements
before writing code, resulting in more well-designed and well-structured solutions.

__Improved Test Coverage__: TDD ensures that most if not all of the codebase is covered by
tests. This helps identify and fix issues early in the development process.

__Early Bug Detection__: Since tests are written before the code, any bugs or discrepancies
are detected early in the development cycle, making them easier and less costly to fix.

__Clearer Specifications__: Writing tests acts as a form of documentation and serves as clear
specifications for the desired behavior of the code.

__Confidence in Refactoring__: With a comprehensive test suite, developers can confidently
refactor and modify code without fear of introducing new bugs or breaking existing functionality.

__Support for Collaboration__:TDD provides a common language between developers, testers, and
stakeholders, as the tests act as a common reference for expected behavior.
While TDD can have a learning curve and might appear slower initially due to writing tests first, it can lead to faster development, reduced debugging time, and more maintainable code in the long run.

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
- Learning curve
- Might be slower
