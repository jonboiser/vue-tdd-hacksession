# vue-tdd-hacksession

A short TDD exercise focused on Vue

## Instructions

Go to `test/unit/specs/LoginPage.spec.js` to see the test file. The source file is in `src/components/LoginPage.vue`. Some of the boilerplate has already been written for you.

Start the test runner with `npm run unit:watch`, which starts Karma/Mocha in a continuous watch mode.

All the tests will fail because I put a silly assertion in there.

Each test has a written description: first implement a failing test that tests for the described functionality; next, implement the feature to get it to green. Use vue-test-utils, sinon, and chai to write your assertions.

If you have to, you can break the Red-Green-Refactor recycle to get a feeling for the test utilities. But once you get a hang of things, start over and do TDD in the intended way.

## Links

* [vue-test-utils doc](https://vue-test-utils.vuejs.org/en/)
* [chai assert API docs](http://chaijs.com/api/assert/)
* [sinon docs](http://sinonjs.org/releases/v4.1.2/)

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
