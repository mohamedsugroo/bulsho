<template>
<div class="container">
<br>
  <div class="row">
    <div class="col"></div>
    <div class="col-md-4">
      <!-- trendding communities -->
      <div class="tc">
        <label> TRENDING COMMUNITIES</label>
        <hr>
        <div class="list" v-for="com in communities">
          <div id="community_avatar"></div>
          {{com.name}}
          {{com.avatar}}
          {{com.score}}
        </div>
      </div>

    </div>
  </div>
</div>
  
</template>

<script>
// @ is an alias to /src
import { db } from '../main'

export default {
  name: 'home',
  data () {
    return {
      communities: []
    }
  },
  created () {
    const ref = db.ref().child('communities')
    ref.on('value', this.getData, this.getErr)
  },
  methods: {
    getData (data) {
      console.log(data.val())
      this.communities = data.val()
    },
    getErr (err) {
      console.log(err)
    }
  }
}
</script>
<style lang="scss">
.tc {
  background: white;
  padding: 13px;
  box-shadow: 0px 0px 14px 1px rgba(0, 0, 0, 0.04);
  label {
    font-weight: 600;
  }

  hr {
    padding: 0;
    margin: 0;
    margin-bottom: 12px;
  }
}
</style>
