<template>
  <v-container fluid grid-list-md id="theme">
    <v-layout row wrap v-if="success">
      <v-flex d-flex xs12 sm8 md8>
        <v-card>
          <v-card-title primary-title>
            <h1 class="headline mb-0">Mis Vallas a Nivel Nacional</h1>
          </v-card-title>
          <v-container fill-height v-show="loading">
            <v-layout row justify-center align-center>
              <v-progress-circular indeterminate :size="70" :width="7" color="red"></v-progress-circular>
            </v-layout>
          </v-container>
          <div id="map" v-show="!loading"></div>
        </v-card>
      </v-flex>
      <v-flex d-flex xs12 sm4 md4>
        <v-card>
          <v-toolbar color="grey darken-1" dark>
            <v-toolbar-title>Presencia en {{ total }} Dptos.</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn icon>
              <v-icon>location_on</v-icon>
            </v-btn>
          </v-toolbar>
          <v-list
            subheader
            one-line
          >
            <v-subheader>Total de vallas: {{ spaces }}</v-subheader>
            <v-list-tile
              v-for="item in cities"
              :key="item.id"
              @click="loadDetail(item.Slug)"
              :disabled="loading"
            >
              <v-list-tile-content>
              <v-list-tile-title>{{ item.Ciudad }}</v-list-tile-title>
              </v-list-tile-content>

              <v-list-tile-action>
                <v-btn icon>
                  <b>{{ item.Total }}</b>
                </v-btn>
              </v-list-tile-action>
            </v-list-tile>
          </v-list>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import GoogleMapsLoader from 'google-maps'
  import MarkerClusterer from '@google/markerclusterer'
  import { mapGetters } from 'vuex'
  import moment from 'moment'
  export default {
    data() {
      return {
        loading: false,
        success: false,
        markerCoordinates: [],
        map: null,
        markers: [],
        cities: [],
        total: null,
        spaces: null,
        icon: '/img/valla.png'
      }
    },

    computed: {
      ...mapGetters([
        'currentUser'
      ])
    },

    mounted () {
      if (this.currentUser.profile === 1) { 
        this.initCities()
      } else if (this.currentUser.profile === 2) {
        this.initMap()
      }
    },

    methods: {
      CenterControl(controlDiv, map, mapCentre) {
        let controlUI = document.createElement('div');
        controlUI.style.backgroundColor = '#fff';
        controlUI.style.border = '2px solid #fff';
        controlUI.style.borderRadius = '3px';
        controlUI.style.boxShadow = '0 2px 6px rgba(0,0,0,.3)';
        controlUI.style.cursor = 'pointer';
        controlUI.style.marginBottom = '22px';
        controlUI.style.textAlign = 'center';
        controlUI.title = 'Pulse para ver todos los marcadores';
        controlDiv.appendChild(controlUI);
        let controlText = document.createElement('div');
        controlText.style.color = 'rgb(25,25,25)';
        controlText.style.fontFamily = 'Roboto,Arial,sans-serif';
        controlText.style.fontSize = '16px';
        controlText.style.lineHeight = '38px';
        controlText.style.paddingLeft = '5px';
        controlText.style.paddingRight = '5px';
        controlText.innerHTML = 'Inicio';
        controlUI.appendChild(controlText);
        controlUI.addEventListener('click', function() {
          map.setCenter(mapCentre);
          map.setZoom(6);
        });
      },

      initMap() {
        GoogleMapsLoader.KEY = 'AIzaSyBrciONSLZYcR2kEKw24hgZnXIE7-G0me0';
        axios.get(`/api/espacios/${this.currentUser.client_id}`)
        .then((response) => {
          this.$store.dispatch('saveBillboard', response.data.espacios)
          this.markerCoordinates = response.data.espacios
          this.cities = response.data.ciudades
          this.total = response.data.total
          this.spaces = response.data.vallas
          GoogleMapsLoader.load((google) => {
            const element = document.getElementById('map');
            const mapCentre = { lat: -16.395887034238665, lng: -63.5493965 };
            const options = {
              center: new google.maps.LatLng(mapCentre.lat, mapCentre.lng),
              zoom: 6,
              mapTypeId: 'roadmap'
            }
            this.map = new google.maps.Map(element, options);
            const infowindow = new google.maps.InfoWindow();
            this.markerCoordinates.forEach((coord) => {
              const position = new google.maps.LatLng(coord.latitude, coord.longitude);
              const marker = new google.maps.Marker({ 
                position,
                map: this.map,
                icon: this.icon
              });
              this.markers.push(marker);
              google.maps.event.addListener(marker, 'click', (function(marker) {
                return function() {
                  const html = `<div>
                                  <strong>Ciudad:</strong><br />
                                  ${coord.Nombre} <br />
                                  <strong>Dirección:</strong><br />
                                  ${coord.Ubicacion} <br />
                                  <a href="360/${coord.uuid}" target="_blank">Ver 360°</a>
                                </div>`
                  infowindow.setContent(html)
                  infowindow.position = event.latLng
                  infowindow.open(this.map, marker)
                }
              })(marker));
              marker.addListener('dblclick', function() {
                this.map.setZoom(17);
                this.map.setCenter(marker.getPosition());
              });   
            });
            let markerCluster = new MarkerClusterer(this.map, this.markers,
                {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});
            let centerControlDiv = document.createElement('div');
            let centerControl = this.CenterControl(centerControlDiv, this.map, mapCentre);
            centerControlDiv.index = 1;
            this.map.controls[google.maps.ControlPosition.TOP_CENTER].push(centerControlDiv);
          });
          this.success = true
        })
      },

      initCities() {
        axios.get(`api/espacios-general`)
        .then((response) => {
          this.cities = response.data.espacios
          this.total = response.data.total
          this.spaces = response.data.vallas
          this.success = true
        })
      },

      loadDetail(slug) {
        if (this.currentUser.profile === 1) {  
          this.loadMap(slug);
        } else {
          this.redirect(slug);
        }
      },

      loadMap(slug) {
        this.loading = true;
        GoogleMapsLoader.KEY = 'AIzaSyBrciONSLZYcR2kEKw24hgZnXIE7-G0me0';
        this.map = null;
        this.markers = [];
        const url = `/api/detalle-general/${slug}`;
        axios.get(url)
        .then((response) => {
          this.markerCoordinates = response.data.espacios
          GoogleMapsLoader.load((google) => {
            const element = document.getElementById('map');
            const mapCentre = { lat: -16.395887034238665, lng: -63.5493965 };
            const options = {
              center: new google.maps.LatLng(mapCentre.lat, mapCentre.lng),
              zoom: 6,
              mapTypeId: 'roadmap'
            }
            this.map = new google.maps.Map(element, options);
            const infowindow = new google.maps.InfoWindow();
            this.markerCoordinates.forEach((coord) => {
              const position = new google.maps.LatLng(coord.latitude, coord.longitude);
              const marker = new google.maps.Marker({ 
                position,
                map: this.map,
                icon: this.icon
              });
              this.markers.push(marker);
              google.maps.event.addListener(marker, 'click', (function(marker) {
                return function() {
                  const html = `<div>
                                  <strong>Ciudad:</strong><br />
                                  ${coord.Nombre} <br />
                                  <strong>Dirección:</strong><br />
                                  ${coord.Ubicacion} <br />
                                  <a href="360/${coord.uuid}" target="_blank">Ver 360°</a>
                                </div>`
                  infowindow.setContent(html)
                  infowindow.position = event.latLng
                  infowindow.open(this.map, marker)
                }
              })(marker));
              marker.addListener('dblclick', function() {
                this.map.setZoom(17);
                this.map.setCenter(marker.getPosition());
              });   
            });
            let markerCluster = new MarkerClusterer(this.map, this.markers,
                {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});
            let centerControlDiv = document.createElement('div');
            let centerControl = this.CenterControl(centerControlDiv, this.map, mapCentre);
            centerControlDiv.index = 1;
            this.map.controls[google.maps.ControlPosition.TOP_CENTER].push(centerControlDiv);
          });
          this.loading = false;
        })
      },

      redirect(slug) {
        this.$router.push({name: 'ShowCity', params: {slug:slug}})
      }
    }
  }
</script>

<style scoped>
  #map {
    height: 600px;
    position: relative;
    width: 100%;
  }
</style>