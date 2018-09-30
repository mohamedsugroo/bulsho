<template>
  <div id="app">
    <div id="nav">
      <div class="container-fluid">
        <div class="row">
          <ul class="col left-nav">
            <router-link to="/" class="navbar-brand" href="#">
              <img src="https://getbootstrap.com/docs/4.1/assets/brand/bootstrap-solid.svg" width="30" height="30" class="d-inline-block align-top" alt="">
              Bulsho
            </router-link>
            <router-link to="/"> 
              <li class="link_item">
                Browse
              </li>
            </router-link>
            <router-link to="/about"> <li class="link_item">About</li> </router-link>
          </ul>
          <div class="col">
            <input type="search" class="searchbox form-control" >
          </div>
          <div class="col-md-3 right">
            <ul class="navBar ml-3">
              <li id="avatar"></li>
              <li id="username"></li>
              <Signin />
            </ul>
          </div>
        </div>
        </div>

    </div>
    <router-view/>
  </div>
</template>

<script>
import Signin from '@/components/Signin.vue'

export default {
  components: {
    Signin
  },
  data () {
    return {
    }
  }
}
</script>


<style lang="scss">
#app {
  color: #2c3e50;
}

.navbar-brand {
    float: left;
    padding: 14px;
    background: #f5f5f5;
    color: black !important;
}

#nav {
  background: white;
  box-shadow: 36px -15px 50px -8px rgba(0, 0, 0, 0.5215686274509804);
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

#avatar {
  width: 44px;
  height: 44px;
  background-size: cover;
  background-position: center;
  border-radius: 50px;
}

.searchbox {
    padding: 20px;
    margin-top: 7px;
    margin-bottom: 5px;
}

.right {
  ul {
    padding: 0;
    margin: 0;
    text-align: left;

    li {
      list-style: none;
      float: right;
      padding: 10px;
      margin-top: 5px;
      margin-bottom: 5px;
    }
  }
}

.left-nav {
  padding: 0;
  margin: 0;
  text-align: left;

  li {
    padding: 0;
    margin: 0;
    list-style: none;
    float: left;
    padding: 17px;
  }

}
</style>
