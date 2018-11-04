<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <div class="navigation">
      <div @click="graph">home</div>
      <div>{{message}}</div>
    </div>
    <div class="navigation navigation-down">
      <div @click="$router.push('/')">home</div>
      <div @click="$router.push('/jade')">my map</div>
      <div @click="$router.push('/less')">connection</div>
      <div @click="$router.push('/stylus'); test()">mapbots<i :class="anim ? 'active' : ''"></i></div>
      <div @click="$router.push('/map')">settings</div>
    </div>
    <div id="map" style="width: 100%; height: 300px;"></div>
    <transition name="fade">
      <router-view/>
    </transition>
  </div>
</template>

<script>
import gql from 'graphql-tag'
//  import { ApolloClient } from 'apollo-client'
//  import { HttpLink } from 'apollo-link-http'
//  import { InMemoryCache } from 'apollo-cache-inmemory'
//
//  const client = new ApolloClient({
//  link: new HttpLink({ uri: 'http://localhost:3001/graphql' }),
//  cache: new InMemoryCache()
//  })
export default {
  name: 'App',
  mounted () {

  },
  apollo: {
    alligatorGraphQL: {
      query: gql`
        query alligatorQuery($id: ID!) {
          User(id: $id) {
            _id
            name
            email
          }
        }
      `,
      variables: {
        id: `5aa5347768b0426beeb9f8d1`
      },
      update: result => result.User
    },
    ping: {
      query: gql`
        query alligatorQuery($id: ID!) {
          User(id: $id) {
            _id
            name
            email
          }
        }
      `,
      variables: {
        id: `5aa5347768b0426beeb9f8d1`
      },
      update (res) {
        console.log('res', res)
      },
      result (result) {
        console.log('result', result)
      },
      skip () {
        return true
      }
    }
  },
  methods: {
    test () {
      this.anim = true
      setTimeout(() => { this.anim = false }, 400)
    },
    graph () {
      //      client.query({
      //        query: gql`
      //      query {
      //          User(id: "5aa5347768b0426beeb9f8d1") {
      //            _id
      //            name
      //            email
      //          }
      //        }
      //  `
      //      })
      //          .then(data => console.log(data))
      //          .catch(error => console.error(error));
      window.apolloClient.query({
        query: gql`query {User(id: "5aa3e79162e91a044cbcfe42") {_id name email} Me}`
      })
        .then(data => console.log(data))
        .catch(error => console.error(error))
    }
  },
  data () {
    return {
      anim: false,
      alligatorGraphQL: null,
      message: '',
      ping: null
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  /*color: #2c3e50;*/
  min-height: 100vh;
  /*margin-top: 60px;*/
  background-color: black;
  color: white;
  padding-bottom: 100px;
  /*overflow-y: scroll;*/
}
body{
  margin: 0;
}
.fade-enter-active {
  animation: opacity-in .8s;
}
.fade-leave-active {
  animation: opacity-out .4s;
}
@keyframes opacity-in {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes opacity-out {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>
