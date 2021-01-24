<template>
<div class="user">
  <p>STEP1</p>
  <h3>お客様の情報を入力してください</h3>
  <h4>-性別-</h4>
  <form>
    <label><input type="radio" name="sex" v-model="sex" value="male">男性</label>
    <label><input type="radio" name="sex" v-model="sex" value="female">女性</label>
  </form>
  <h4>-生年月日-</h4>
  <div @change="checkDays(year, month)">
    <select v-model="year">
      <option v-for="(year, index) in years" :value="year" :key="index">
        {{ year }}
      </option>
    </select>年
    <select v-model="month">
      <option v-for="(month, index) in months" :value="month" :key="index">
        {{ month }}
      </option>
    </select>月
    <select v-model="day">
      <option v-for="(day, index) in days" :value="day" :key="index">
        {{ day }}
      </option>
    </select>日
  </div>
  <nav>
    <router-link to="/Questionnaire"><button v-if="sex">次へ進む</button></router-link>
  </nav>
</div>
</template>

<script>
  import { years, months, days31, days30, days29, days28 } from '../helpers/Definition'
  // 年月日入力フォームの初期値
  import { year, month, day } from '../helpers/Definition'

  export default {
    name: 'userInfo',
    data: () => {
      return {
        sex: '',
        years,
        months,
        days31,
        days30,
        days29,
        days28,
        // 年と月を判別後、day28~31のいずれかがdaysに格納される。初期値は1980年１月のためday31。
        days: days31,
        // 年月日入力フォームの初期値
        year, // 1980(昭和55)
        month, // 1
        day // 1
      }
    },
    methods: {
      // 年と月を判別してその月の日数を決める関数
      checkDays: function(year, month){
        const n = year.split(' ');
        const num = Number(n[0]);
        const m = month;
        if(m === 1 || m === 3 || m === 5 || m === 7 || m === 8 || m === 10 || m === 12){
          this.days = this.days31;
        }else if(m === 4 || m === 6 || m === 9 || m === 11){
          this.days = this.days30;
        }else{
          if(num % 400 === 0 || (num % 4 === 0 && num % 100 != 0)){
            if(this.days === this.days31 || this.days === this.days30){
              this.day = 1;
              this.days = this.days29;
            }else{
              this.days = this.days29;
            }
          }else{
            if(this.days === this.days31 || this.days === this.days30 || this.days === this.days29){
              this.day = 1;
              this.days = this.days28;
            }else{
              this.days = this.days28;
            }
          }
        }
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
