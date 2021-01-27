<template>
  <div class="questionnaire">
    <p>STEP2</p>
    <h3>お客様の情報を入力してください</h3>
    <div @change="answer()">
      <div>
        <p>現在、生命保険に加入されていますか？</p>
        <form>
          <label><input type="radio" name="q1" v-model="q1Value" value="はい">はい</label>
          <label><input type="radio" name="q1" v-model="q1Value" value="いいえ">いいえ</label>
        </form>
      </div>
      <div v-if="q1Value">
        <p>現在入院中ですか。または、最近３ヶ月以内に医師の診察・検査の結果、入院・手術をすすめられたことはありますか？</p>
        <form>
          <label><input type="radio" name="q2" v-model="q2Value" value="はい">はい</label>
          <label><input type="radio" name="q2" v-model="q2Value" value="いいえ">いいえ</label>
        </form>
      </div>
      <div v-if="q2Value">
        <p>過去５年以内に、病院やけがで、手術をうけたことまたは継続して７日以上の入院をしたことがありますか？</p>
        <form>
          <label><input type="radio" name="q3" v-model="q3Value" value="はい">はい</label>
          <label><input type="radio" name="q3" v-model="q3Value" value="いいえ">いいえ</label>
        </form>
      </div>
    </div>
    <nav>
      <router-link to="/"><button>戻る</button></router-link>
      <router-link to="/Consultation"><button v-if="q3Value">次へ進む</button></router-link>
    </nav>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'questions',
  data: () => {
    return{
      q1Value: '',
      q2Value: '',
      q3Value: ''
    }
  },
  methods: {
    answer(){
      this.$store.commit('changeUserInfoAnswer1', this.q1Value);
      this.$store.commit('changeUserInfoAnswer2', this.q2Value);
      this.$store.commit('changeUserInfoAnswer3', this.q3Value);
    }
  },
  computed: {
    ...mapGetters([
      'infoAnswer1State',
      'infoAnswer2State',
      'infoAnswer3State'
    ])
  }
}
</script>

<style>
  button{
    width: 70px;
    height: 40px;
  }
</style>
