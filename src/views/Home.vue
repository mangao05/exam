<template>
  <div class="home">
    <v-row>
      <v-col
        cols="12"
      >
        <h1>Teams</h1>
           <div class="my-2 ml-auto">
            <v-btn color="info" light @click="createTeam()">Create Team</v-btn>
          </div>
        <v-data-table
          :headers="headers"
          :items="teams"
          :items-per-page="5"
          class="elevation-1"
        ></v-data-table>

       
      </v-col>
    </v-row>
  </div>
</template>

<script>

import { mapState } from 'vuex';
export default {
  name: 'home',
  components: {
   
  },
   data () {
      return {
        singleSelect: false,
        selected: [],
        headers: [
          {
            text: 'Name',
            align: 'left',
            value: 'name',
          },
          { text: 'Address', value: 'address' },
        ],
      }
    },

    methods : {
      createTeam(){
        this.$router.push('/createTeam');
      },
    },
    created(){
      this.$store.dispatch('loadTeams')
    },

    computed: mapState([
      'teams'
    ])
    
}
</script>
