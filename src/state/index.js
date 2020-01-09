import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
Vue.use(Vuex)



export const store = new Vuex.Store({
    state : {
        teams: [],
    },
  
    actions : {
        loadTeams({ commit }){
            axios.get('http://127.0.0.1:8000/api/teams')
                .then(data => {
                    commit('SET_TEAMS', data.data)
                })
        },
        saveTeam({ commit, state }){
            const team = {
                name : state.name,
                address : state.address
            }

            axios.post('http://127.0.0.1:8000/api/teams', team).then(() => {
                commit('ADD_TEAM', team)
            })
        }
      
    },
    mutations : {
        SET_TEAMS(state, teams) {
            teams.forEach(team => {
                state.teams.push({
                    name : team.name,
                    address : team.address
                })
            });
        },
        ADD_TODO (state, teamObject) {
            state.teams.push(teamObject)
        }
        
    },
    getters : {
        getTeamDetails : state => {
            
        }
    }

    
}) 