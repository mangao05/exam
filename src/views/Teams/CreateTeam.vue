<template>
<v-container fluid>
    {{teams}}
    <v-alert v-show="error.messages" :type="error.typeMessage">
      {{ error.message }}
    </v-alert>
    <v-form
    ref="form"
    v-model="valid"
    lazy-validation
    method="post" 
    @submit.prevent="createTeam()" 
    id="nativeForm"
  >
    <!-- <v-text-field
      v-model="name"
      :counter="10"
      :rules="nameRules"
      label="Name"
      required
    ></v-text-field>

    <v-text-field
      v-model="address"
      :rules="addressRules"
      label="Address"
      required
    ></v-text-field>

    <v-btn
      color="error"
      class="mr-4"
      @click="reset"
    >
      Reset Form
    </v-btn> -->

    <v-btn
      color="success"
      type="submit"
    >
      Submit
    </v-btn>
  </v-form>
</v-container>
    
</template>
<script>
// import axios from 'axios';
// import { store } from '../../store';

export default {
    data: () => ({
      valid: true,
      name: '',
      address : '',
      error : {
          messages : false,
          typeMessage: 'success',
          message : ''
      }, 
      nameRules: [
        v => !!v || 'Name is required',
      ],
      addressRules : [
        v => !!v || 'Address is required'
      ]

      
    }),

    methods: {
      reset () {
        this.$refs.form.reset()
      },
      createTeam () {
        let team = {
          name : 'Raptors',
          address : 'Toronto'
        }
        // this.$store.dispatch('createTeamAction', team);
        // if(this.$refs.form.validate()){
        //     axios.post('http://127.0.0.1:8000/api/teams', {
        //         name : this.name,
        //         address : this.address
        //     }).then(data => {
        //         if(data == 'success'){
        //             this.error.messages = true;
        //             this.error.message = 'Successfully Created Team';
        //             this.error.typeMessage = 'success';
        //         }
        //     }).catch(() => {
        //         this.error.messages = true;
        //         this.error.message = 'Error Creating Team';
        //         this.error.typeMessage = 'error';
        //     });
        // }
      },
    }
}
</script>