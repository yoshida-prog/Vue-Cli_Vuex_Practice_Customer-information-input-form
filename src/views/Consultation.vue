<template>
  <div class="consultation">
    <p>STEP3</p>
    <h3>ご相談内容をご記入ください</h3>
    <p>ご相談内容</p>
    <textarea rows="8" cols="80"></textarea>
    <nav>
      <router-link to="/Questionnaire"><button>戻る</button></router-link>
      <button>進む</button>
    </nav>
  </div>
</template>

<script>
  export default {
    name: 'consultations',
    data: () => {
      return{

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
<template>
  <div class="consultation">
    <p>STEP3</p>
    <h3>ご相談内容をご記入ください</h3>
    <p>ご相談内容</p>
    <textarea rows="8" cols="80" v-model="textContent" @input="checkText"></textarea>
    <nav>
      <router-link to="/Questionnaire"><button>戻る</button></router-link>
      <router-link to="/Check"><button>進む</button></router-link>
    </nav>
  </div>
</template>

<script>
  export default {
    name: 'consultations',
    data: () => {
      return{
        textContent: ''
      }
    },
    methods: {
      checkText: function(){
        this.$store.state.consultation = this.textContent;
      }
    },
    computed: {
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
