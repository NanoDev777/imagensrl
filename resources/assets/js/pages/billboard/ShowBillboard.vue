<template>
  <div id="photosphere"></div>
</template>

<script>
  import GoogleMapsLoader from 'google-maps'

  export default {
    props: ["uuid"],
    data() {
      return {
        url: '/img/360/',
        options: null,
        panorama: null
      }
    },

    mounted() {
      this.initStreetView()
    },

    methods: {
      initStreetView() {
        GoogleMapsLoader.KEY = 'AIzaSyBrciONSLZYcR2kEKw24hgZnXIE7-G0me0';
        const url = `/api/photosphere/${this.uuid}`;
        axios.get(url)
        .then((response) => {
          this.options = response.data
          GoogleMapsLoader.load((google) => {
            this.panorama = new google.maps.StreetViewPanorama(
              document.getElementById('photosphere'),{pano: this.options.uuid, pov: {heading: 110, pitch: 0}, visible: true});
            this.panorama.registerPanoProvider(this.getCustomPanorama);
          });
        });
      },

      getCustomPanoramaTileUrl(pano, zoom, tileX, tileY) {
        return `/img/360/${this.options.photosphere}`;
      },

      getCustomPanorama() {
        return {
          location: {
            pano: this.options.uuid, 
            description: this.options.Ubicacion,
            latLng: new google.maps.LatLng(this.options.Latitude, this.options.Longitude)
          },
          links: [],
          copyright: 'IMAGEN S.R.L © 2018',
          tiles: {
            tileSize: new google.maps.Size(5472, 2736),
            worldSize: new google.maps.Size(5472, 2736),
            centerHeading: 105,
            getTileUrl: this.getCustomPanoramaTileUrl
          }
        };
      }
    }
  }
</script>
<style lang="css" scoped>
  html, body{
    height:100%;
  },
  #photosphere {
    height:100%;
    width: 100%;
  }
</style>
