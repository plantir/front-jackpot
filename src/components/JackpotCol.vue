<style scoped>
.spin-wrapper {
  width: 80px;
  height: 120px;
  box-shadow: inset 0 0 10px;
  overflow: hidden;
  position: relative;
}
.column-wrapper {
  display: flex;
  flex-direction: column;
  position: absolute;
}
.column-wrapper.spin {
  animation: spin 0.2s infinite;
}
.column-wrapper div {
  font-size: 33px;
  width: 80px;
  padding: 20px 0;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 80px;
}
.column-wrapper div img {
  width: 100%;
}
@keyframes spin {
  0% {
    top: 0;
  }
  25% {
    top: -120px;
  }
  50% {
    top: -240px;
  }
  75% {
    top: -360px;
  }
  100% {
    top: 0;
  }
}
</style>
<template>
  <section class="spin-wrapper">
    <div :class="{ spin }" :style="style" class="column-wrapper">
      <div><img src="@/assets/img/cherry.png" alt="" /></div>
      <div><img src="@/assets/img/lemon.png" alt="" /></div>
      <div><img src="@/assets/img/orange.png" alt="" /></div>
      <div><img src="@/assets/img/watermallon.png" alt="" /></div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    spin: {},
    val: {},
  },
  watch: {
    val: {
      handler: function () {
        if (this.val == "C") {
          this.style = { top: "0" };
        }
        if (this.val == "L") {
          this.style = { top: "calc(-1 * 120px)" };
        }
        if (this.val == "O") {
          this.style = { top: "calc(-2 * 120px)" };
        }
        if (this.val == "W") {
          this.style = { top: "calc(-3 * 120px)" };
        }
      },
    },
  },
  data: () => {
    return {
      style: {},
    };
  },
};
</script>
