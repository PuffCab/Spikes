
Tests.
Edge cases, we don always know how users are gonna use it.

-You might want to create a new feature, and that affects other feature from the same component. Easy. We fix it.  But that can screw a feature from component 2 , we fix it, and while doing so, fuck another feature from other component.

`data-testid="myId"` is an attribute to identify DOM nodes for testing : <https://www.educative.io/answers/what-is-the-data-testid-attribute-in-testing>

-`screen` represents the whole document we are rendering, comes from the React testing library.

-Run the test.
-Change something and run it again  

-Add new elements in `<App/>` , like 3 `<li></li>` , and create a new test by copy pasting.
-Go to <https://testing-library.com/docs/queries/byrole>

-We can define the role, but let's use the predefined ones: <https://www.w3.org/TR/html-aria/#docconformance>

-we use role=listitem.

-we change the test description. Create a new variable, use `getAllByRole` ... and then we "expect" different things. Check the methods from JEST in <https://jestjs.io/docs/expect>

-We create additional tests and try them. We mess with the test and see how they fail and the messages.
That should lead us to think how complicated could be with very big components and many tests.
An extension that can help us to see things right away in the window is

## REACT testing Library Vs Jest

it is not one or the other. To reach DOM elements we need to use React Testing library, and to interact with those elements (js events: click, mouseover).

If we don't need any DOM process? we work with JEST

you can test any that runs JS , vainilla , react, etc...
Allow us to run our tests, takes our expectations, compare with the results , and tell us the results of that.

## Real life example of test

we will create a login component and test what happens when there is no fields, when there is no values in imputs, what happens when we fetch

**MOCK from JEST and FETCH** , when testing a request, it might be that the server is down. Test will fail even if it is correct. Therefore we have this MOCK from JEST to fake a request
