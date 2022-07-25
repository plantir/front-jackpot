<style scoped></style>
<template>
  <section>
    <div class="jackpot">
      <div class="col"><JackpotCol :val="val1" :spin="isSpin1" /></div>
      <div class="col"><JackpotCol :val="val2" :spin="isSpin2" /></div>
      <div class="col"><JackpotCol :val="val3" :spin="isSpin3" /></div>
    </div>
    <div>
      <button @click="$emit('start')" class="btn">start game</button>
    </div>
  </section>
</template>
<script>
import JackpotCol from "./JackpotCol.vue";
export default {
  props: {
    result: {},
    startSpin: {},
  },
  components: {
    JackpotCol,
  },
  watch: {
    result: {
      deep: true,
      handler: function () {
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
