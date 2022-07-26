<style scoped>
.jackpot {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  right: 50%;
  transform: translate(50%, -50%);
}
.jackpot.active .col {
  position: relative;
  background: #fff;
}
.jackpot.active .col::before,
.jackpot.active .col::after {
  content: "";
  position: absolute;
  left: -2px;
  top: -2px;
  background: linear-gradient(
    45deg,
    #fb0094,
    #0000ff,
    #00ff00,
    #ffff00,
    #ff0000,
    #fb0094,
    #0000ff,
    #00ff00,
    #ffff00,
    #ff0000
  );
  background-size: 400%;
  width: calc(100% + 4px);
  height: calc(100% + 4px);
  z-index: -1;
  animation: steam 20s linear infinite;
}
.jackpot.active .col::after {
  filter: blur(10px);
}
.col + .col {
  margin-left: 50px;
}
.btn {
  position: absolute;
  right: 50%;
  background: red;
  border: none;
  box-shadow: none;
  color: #fff;
  width: 200px;
  height: 60px;
  border-radius: 20px;
  bottom: 10px;
  cursor: pointer;
  font-size: 20px;
  text-shadow: 0 0 12px #333;
  transform: translateX(50%);
  transition: 0.4s;
}
.btn:active {
  transform: translateX(50%) scale(0.9);
}
@keyframes steam {
  0% {
    background-position: 0 0;
  }
  50% {
    background-position: 400% 0;
  }
  100% {
    background-position: 0 0;
  }
}
</style>
<template>
  <section>
    <div class="jackpot" :class="{ active: winner }">
      <div class="col"><JackpotCol :val="val1" :spin="isSpin1" /></div>
      <div class="col"><JackpotCol :val="val2" :spin="isSpin2" /></div>
      <div class="col"><JackpotCol :val="val3" :spin="isSpin3" /></div>
    </div>
    <div>
      <button @click="$emit('start')" class="btn">Spin</button>
    </div>
  </section>
</template>
<script>
import JackpotCol from "./JackpotCol.vue";
export default {
  props: {
    result: {},
    startSpin: {},
    winner: false,
  },
  components: {
    JackpotCol,
  },
  watch: {
    result: {
      deep: true,
      handler: function () {
        this.winner = false;
        setTimeout(() => {
          this.val1 = this.result[0];
          this.isSpin1 = false;
        }, 1000);
        setTimeout(() => {
          this.val2 = this.result[1];
          this.isSpin2 = false;
        }, 2000);
        setTimeout(() => {
          this.val3 = this.result[2];
          this.isSpin3 = false;
          if (this.val1 == this.val2 && this.val2 == this.val3) {
            this.winner = true;
          }
        }, 3000);
      },
    },
    startSpin: {
      handler: function (val) {
        if (val) {
          this.isSpin1 = true;
          this.isSpin2 = true;
          this.isSpin3 = true;
        }
      },
    },
  },
  data: () => {
    return {
      isSpin1: false,
      isSpin2: false,
      isSpin3: false,
      val1: "C",
      val2: "C",
      val3: "C",
    };
  },
};
</script>
