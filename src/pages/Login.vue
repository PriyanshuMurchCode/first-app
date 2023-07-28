<template>
    <div class="d-flex align-items-center py-4 bg-body-tertiary vh-100">
        <main class="form-signin w-100 m-auto">
            <form>
                <img class="mb-4" src="https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57">
                <h1 class="h3 mb-3 fw-normal">Please sign in</h1>

                <div class="form-floating">
                    <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" v-model="formValue.email">
                    <label for="floatingInput">Email address</label>
                </div>
                <div class="form-floating">
                    <input type="password" class="form-control" id="floatingPassword" placeholder="Password" v-model="formValue.password">
                    <label for="floatingPassword">Password</label>
                </div>

                <div class="form-check text-start my-3">
                    <input class="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault">
                    <label class="form-check-label" for="flexCheckDefault">
                        Remember me
                    </label>
                </div>
                <button class="btn btn-primary w-100 py-2" type="button" @click="onSubmit">Sign in</button>
                <p class="mt-5 mb-3 text-body-secondary">© 2017–2023</p>
            </form>
        </main>
    </div>
</template>
<script>
let isAuthenticated = true;
export default {
    name: "LoginComponent",
    data(){
        return {
            formValue :{
                email: "",
                password: ""
            }
        }
    },methods:{
        onSubmit(){
            if(this.formValue.email == 'priyanshu@murchcode.com'){
                this.$router.push('/');
            }
        }
    },mounted(){
    console.log(isAuthenticated)
    if (isAuthenticated != true) {
        this.$router.push('/login');
      }
  }
}
</script>
<style>
html,
body {
  height: 100%;
}

.form-signin {
  max-width: 330px;
  padding: 1rem;
}

.form-signin .form-floating:focus-within {
  z-index: 2;
}

.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
</style>