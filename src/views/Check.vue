<template>
  <div class="check">
    <p>STEP4</p>
    <h3>以下の内容をご確認ください</h3>
    <h4>性別</h4>
    <p>{{ userSex }}</p>
    <h4>生年月日</h4>
    <p>{{ userBirthday }}</p>
    <h4>現在、生命保険に加入されていますか？</h4>
    {{ infoAnswer1 }}
    <h4>現在入院中ですか。または、最近３ヶ月以内に医師の診察・検査の結果、入院・手術をすすめられたことはありますか？</h4>
    {{ infoAnswer2 }}
    <h4>過去５年以内に、病院やけがで、手術をうけたことまたは継続して７日以上の入院をしたことがありますか？</h4>
    {{ infoAnswer3 }}
    <h4>ご相談内容</h4>
    {{ consultation }}
    <nav>
      <router-link to="/Consultation"><button>戻る</button></router-link>
      <button>進む</button>
    </nav>
  </div>
</template>

<script>
  export default {
    name: 'check',
    computed: {
      userSex(){
        return this.$store.state.userSex;
      },
      userBirthday(){
        return this.$store.state.userBirthday;
      },
      infoAnswer1(){
        return this.$store.state.infoAnswer1;
      },
      infoAnswer2(){
        return this.$store.state.infoAnswer2;
      },
      infoAnswer3(){
        return this.$store.state.infoAnswer3;
      },
      consultation(){
        return this.$store.state.consultation;
      }
    }
  }
</script>

<style>
  button{
    width: 70px;
    height: 40px;
  }
</style>
