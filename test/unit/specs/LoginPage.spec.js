import Vue from 'vue'; // eslint-disable-line
import LoginPage from '@/components/LoginPage';
import { mount } from 'vue-test-utils';
import sinon from 'sinon';
import { assert } from 'chai';

describe('LoginPage', () => {
  it('(warm up) the label for the "username" field says "Please enter username"', () => {
    const wrapper = mount(LoginPage);
    assert.equal(2 + 2, 5);
  });

  it('if the username but no password is provided, the submit button is disabled', () => {
    const wrapper = mount(LoginPage);
    assert.equal(2 + 2, 5);
    console.log(wrapper.html());
  });

  it('if the password but no username is provided, the submit button is disabled', () => {
    const wrapper = mount(LoginPage);
    assert.equal(2 + 2, 5);
  });

  it('if neither username or password is provided, the submit button is disabled', () => {
    const wrapper = mount(LoginPage);
    assert.equal(2 + 2, 5);
  });

  it('if both the username and password are provided, the submit button is enabled', () => {
    const wrapper = mount(LoginPage);
    assert.equal(2 + 2, 5);
  });

  it('if both the password and username is correct, and "submit" is clicked, then the user is logged in', () => {
    // To keep things simple, "logged in" means a div saying "Congrats, you're logged in" appears
    // HINT: stub the 'attemptLogin' method to mimick a success
    const wrapper = mount(LoginPage);
    assert.equal(2 + 2, 5);
  });

  it('if both the password and username are incorrect, and "submit" is clicked, then the user is not logged in', () => {
    // To keep things simple, "not logged in" means a div saying "Login failed"
    // HINT: stub the 'attemptLogin' method to mimick a failure
    const wrapper = mount(LoginPage);
    assert.equal(2 + 2, 5);
  });
});
