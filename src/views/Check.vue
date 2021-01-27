<template>
  <div class="check">
    <p>STEP4</p>
    <h3>以下の内容をご確認ください</h3>
    <h4>性別</h4>
    <p>{{ userSexState }}</p>
    <h4>生年月日</h4>
    <p>{{ userBirthdayState }}</p>
    <h4>現在、生命保険に加入されていますか？</h4>
    {{ infoAnswer1State }}
    <h4>現在入院中ですか。または、最近３ヶ月以内に医師の診察・検査の結果、入院・手術をすすめられたことはありますか？</h4>
    {{ infoAnswer2State }}
    <h4>過去５年以内に、病院やけがで、手術をうけたことまたは継続して７日以上の入院をしたことがありますか？</h4>
    {{ infoAnswer3State }}
    <h4>ご相談内容</h4>
    {{ consultationText }}
    <nav>
      <router-link to="/Consultation"><button>戻る</button></router-link>
      <button>進む</button>
    </nav>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'check',
    computed: {
      ...mapGetters([
        'userSexState',
        'userBirthdayState',
        'infoAnswer1State',
        'infoAnswer2State',
        'infoAnswer3State',
        'consultationText'
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
