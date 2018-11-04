<template>
  <div>
    <!--<div id="map">rewq</div>-->
  </div>
</template>

<script>
let googleMapsClient = require('@google/maps').createClient({
  key: 'AIzaSyCAVWS4_tC_2jFtffVLaa7fdAoKrd2CyOc'
})

export default {
  data () {
    return {
      anim: false
    }
  },
  mounted () {
    googleMapsClient.geocode({
      address: '1600 Amphitheatre Parkway, Mountain View, CA'
    }, function (err, response) {
      if (!err) {
        console.log(response.json.results)
      }
    })
    console.log(googleMapsClient)
  },
  methods: {
    test () {
      this.anim = true
      setTimeout(() => { this.anim = false }, 400)
    }
  }
}
</script>
