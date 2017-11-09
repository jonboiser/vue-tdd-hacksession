<template>

  <div>
    <form>
      <label for="username">
        Plz ender yousername
      </label>
      <input
        type="text"
        id="username"
        v-model="username"
      />
      <label for="password">
        Password
      </label>
      <input
        type="password"
        id="password"
        v-model="password"
      />
      <button
        type="submit"
        name="login"
      >
          Submit
      </button>
    </form>

    <div
      v-if="loginSucessful"
      id="login-successful"
    >
      Congrats, you're logged in!
    </div>

    <div
      v-if="loginFailed"
      id="login-failed"
    >
      Login failed
    </div>
  </div>

</template>


<script>

  export default {
    data() {
      return {
        loginSucessful: false,
        loginFailed: false,
        password: '',
        username: '',
      };
    },
    computed: {

    },
    methods: {
      attemptLogin() {
        return Promise.resolve();
      },
      logUserIn() {
        this.attemptLogin()
          .then(() => {})
          .catch(() => {});
      },
    },
  };

</script>


<style scoped></style>
