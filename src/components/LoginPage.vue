<template>

  <div>
    <form>
      <label for="username">
        Username
      </label>
      <input
        type="text"
        id="username"
        v-model="username"
      />
      <label for="username">
        Pasword
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

    <div v-if="loginSucessful">
      Congrats, you're logged in!
    </div>

    <div v-if="loginFailed">
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
