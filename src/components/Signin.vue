<template>
  <div class="signin" id="signin">
    <button class="btn-signin">Sign in</button>
    <div class="custom_modal">
      <div class="page_cover">
      </div>
      <div class="box">
        <button @click="twitter()" class="btn-twitter">Twitter</button>
        <button @click="google()" class="btn-google">Google</button>
      </div>
    </div>
  </div>
</template>

<script>
import { googleLogin, current_user, twitter_api, google_auth } from '../main'

export default {
  name: 'Signin',
  data () {
    return {
    }
  },
  created () {
    googleLogin()
  },
  methods: {
    google () {
      google_auth()
    },
    twitter () {
      twitter_api()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}


.btn-signin {
    border-radius: 50px;
    padding: 7px;
    margin-top: 6px;
    padding-left: 30px;
    padding-right: 30px;
}

.custom_modal {
  .page_cover {
    background: #00000087;
    position: fixed;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    z-index: 1;
  }

  .box {
    position: fixed;
    background: white;
    top: 10vh;
    left: 40vw;
    padding: 40px;
    z-index: 4;
  }

  .btn-google {
    width: 100%;
    background: red;
    padding: 9px;
    border-radius: 50px;
    color: white;
    font-weight: 600;
    border: none;

  }
  .btn-twitter {
    width: 100%;
    background: red;
    padding: 9px;
    border-radius: 50px;
    color: white;
    font-weight: 600;
    border: none;
    margin-bottom: 13px;
  }
}
</style>
