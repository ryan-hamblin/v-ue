<template>
 <h1>GitHub user Information</h1>
  <div>
    <form>
      <input type="text" v-model='user'></input>
      <button class='btn btn-default' type="submit" v-on:click="getGitInfo(user)">Get Users</button>
    </form>  
  </div>
  <div v-for="user of users">
    
    <h1>{{user.email}}</h1>
    <div class="image">
      <img class="avatar" src="{{user.avatar_url}}" alt="User Image">
    </div>
    <h3><a href="{{user.html_url}}">{{user.login}}</a></h3>
  </div>
  <div>
    <h1>GitHub Followers: </h1>
        <div class="row">
          <div class="col-md-4 card" v-for=" follower of followers " >
            <img class="image card-img-top" src="{{follower.avatar_url}}" alt="User Image">
            <div class="card-block">
              <h4>{{follower.login}}</h4>
              <p class="car-text"><a href="{{follower.html_url}}">Follower Github Page</a></p>
            </div>
          </div>
        </div>
  </div>
  
</template>

<script>
  export default {
    data () {
      return {
        users: [],
        followers: {},
        user: ''
      }
    },
    methods: {
      getGitInfo (user) {
        this.$http.get('https://api.github.com/users/' + this.user)
          .then((response) => {
            this.users.push(response.data)
          })
        this.$http.get('https://api.github.com/users/' + this.user + '/followers')
          .then((response) => {
            this.followers = response.data
          })
      }
    }
  }
</script>

<style>
  .image{
    height: 100px;
    width: 89px;
  }
  .avatar {
    height: 100%;
  }


</style>