import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userSex: '',
    userBirthday: '',
    infoAnswer1: '',
    infoAnswer2: '',
    infoAnswer3: '',
    consultation: ''
  },
  getters: {
    userSexState: state => state.userSex,
    userBirthdayState: state => state.userBirthday,
    infoAnswer1State: state => state.infoAnswer1,
    infoAnswer2State: state => state.infoAnswer2,
    infoAnswer3State: state => state.infoAnswer3,
    consultationText: state => state.consultation
  },
  mutations: {
    changeUserSex(state, sex){
      state.userSex = sex
    },
    changeUserBirthday(state, birthday){
      state.userBirthday = birthday
    },
    changeUserInfoAnswer1(state, infoAnswer1){
      state.infoAnswer1 = infoAnswer1
    },
    changeUserInfoAnswer2(state, infoAnswer2){
      state.infoAnswer2 = infoAnswer2
    },
    changeUserInfoAnswer3(state, infoAnswer3){
      state.infoAnswer3 = infoAnswer3
    },
    changeConsultationText(state, consultation){
      state.consultation = consultation
    }
  },
  actions: {
  },
  modules: {
  }
})
