<style scoped>
#app {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}
#app img {
  width: 100%;
  height: 100%;
}
#app .jackpot-box {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 600px;
  height: 450px;
  border-radius: 16px;
  padding: 16px;
  background: #fff;
  color: #333;
  border: 2px solid #ddd;
}
#app .jackpot-box .credit {
  font-size: 22px;
  text-align: center;
}
</style>
<template>
  <div id="app">
    <img src="@/assets/img/background.png" alt="" />
    <div class="jackpot-box">
      <div class="credit">your credit is: {{ credit }}</div>
      <Jackpot @start="onStart" :result="result" :startSpin="start_spin" />
    </div>
    <div>
      <CashOut @cashout="onCashOut" />
    </div>
  </div>
</template>

<script>
import CashOut from "./components/CashOut.vue";
import Jackpot from "./components/Jackpot.vue";
export default {
  components: { CashOut, Jackpot },
  data: () => {
    return {
      credit: 10,
      result: ["C", "C", "C"],
      start_spin: false,
    };
  },
  methods: {
    onCashOut() {
      alert(`you cash out ${this.credit}`);
      this.credit = 0;
    },
    onStart() {
      if (this.start_spin) return;
      if (this.credit < 1) {
        return alert("your credit is 0 please refresh the page");
      }
      this.start_spin = true;
      let result = this.rollAll();
      let is_win = result[0] == result[1] && result[1] == result[2];
      if (!is_win) {
        this.result = result;
      } else {
        // if credit is under 40 no cheat
        if (this.credit < 40) {
          this.result = result;
        }
        // if credit is between 40 and 60 and user is winer 30% change to roll again
        else if (
          this.credit > 40 &&
          this.credit < 60 &&
          is_win &&
          Math.random() < 0.3
        ) {
          this.result = this.rollAll();
        }
        // if credit is above 60 and user is winer 60% change to roll again
        else if (this.credit > 60 && is_win && Math.random() < 0.6) {
          this.result = this.rollAll();
        }
      }
      setTimeout(() => {
        this.start_spin = false;
        if (is_win) {
          if (this.result[0] == "C") {
            this.credit += 10;
          }
          if (this.result[0] == "L") {
            this.credit += 20;
          }
          if (this.result[0] == "O") {
            this.credit += 30;
          }
          if (this.result[0] == "W") {
            this.credit += 40;
          }
        }
      }, 3000);
      this.credit--;
    },
    rollAll() {
      let col1 = this.rollCol();
      let col2 = this.rollCol();
      let col3 = this.rollCol();
      return [col1, col2, col3];
    },
    rollCol() {
      let random_number = Math.random();
      if (random_number < 0.25) {
        return "C";
      }
      if (random_number < 0.5) {
        return "L";
      }
      if (random_number < 0.75) {
        return "O";
      }
      return "W";
    },
  },
};
</script>
