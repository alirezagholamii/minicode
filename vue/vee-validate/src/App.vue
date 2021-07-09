<template>
  <vee-form class="sign-up" :validation-schema="schema"
   @submit="signUp" :initial-values="userData">
    <div class="sign-up__input">
      <label for="firstName">first name</label>
      <vee-field name="firstName" id="firstName" type="text" />
      <error-message class="input-error" name="firstName" />
    </div>
    <div class="sign-up__input">
      <label for="lastName">last name</label>
      <vee-field name="lastName" id="lastName" type="text" />
      <error-message class="input-error" name="lastName" />
    </div>
    <div class="sign-up__input">
      <label for="age">age</label>
      <vee-field name="age" id="age" type="number" />
      <error-message class="input-error" name="age" />
    </div>
    <div class="sign-up__input">
      <label for="email">email</label>
      <vee-field name="email" id="email" type="text" />
      <error-message class="input-error" name="email" />
    </div>
    <div class="sign-up__input">
      <label for="password">pasword</label>
      <vee-field type="password" name="password" id="password" />
      <error-message class="input-error" name="password" />
    </div>
    <div class="sign-up__input">
      <label for="confirmPassword">confirm pass </label>
      <vee-field type="password" name="confirmPassword" id="confirmPassword" />
      <error-message class="input-error" name="confirmPassword" />
    </div>

    <div class="sign-up__input">
      <label class="inline-block mb-2">Country</label>
      <vee-field as="select" name="country">
        <option value="USA">USA</option>
        <option value="Mexico">Mexico</option>
        <option value="Germany">Germany</option>
        <option value="Antarctica">Antarctica</option>
      </vee-field>
      <error-message class="input-error" name="country" />
    </div>
    <div class="sign-up__input">
      <vee-field
        type="checkbox"
        name="tos"
        value="1"
        class="w-4 h-4 float-left -ml-6 mt-1 rounded inline-block"
      />
      <label class="inline-block">Accept terms of service</label>
      <error-message class="input-error" name="tos" />
    </div>
    <button>submit</button>
  </vee-form>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      schema: {
        firstName: "required|min:3|max:50|alphaSpaces",
        lastName: "required|min:3|max:50|alphaSpaces",
        email: "required|email",
        age: "required|minValue:10|maxValue:100",
        password: "required|min:3|max:100",
        confirmPassword: "required|confirmed:@password",
        country: "required|excluded:Antarctica",
        tos: "tos",
      },
      userData: {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        age: "",
        country: "USA",
        tos: "",
        
      },
    };
  },
  methods: {
    signUp(values) {
      console.log(values);
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  display: flex;
  justify-content: center;
}

.sign-up {
  width: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.sign-up__input {
  width: 80%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.5rem;
  position: relative;
}

.input-error {
  position: absolute;
  top: 1.3rem;
  color: red;
}
</style>
