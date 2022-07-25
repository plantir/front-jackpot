<style scoped>
.spin-wrapper {
  width: 40px;
  overflow: hidden;
}
.column-wrapper {
  display: flex;
}
.column-wrapper.spin {
  animation: spin 0.4s infinite;
}
.column-wrapper div {
  font-size: 33px;
  width: 40px;
  display: flex;
  justify-content: center;
  flex: 0 0 40px;
}
@keyframes spin {
  0% {
    transform: translateX(0);
  }
  25% {
    transform: translateX(-40px);
  }
  50% {
    transform: translateX(-80px);
  }
  75% {
    transform: translateX(-120px);
  }
  100% {
    transform: translateX(0);
  }
}
</style>
<template>
  <section class="spin-wrapper">
    <div :class="{ spin }" :style="style" class="column-wrapper">
      <div>C</div>
      <div>L</div>
      <div>O</div>
      <div>W</div>
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
          this.style = { transform: "translateX(0)" };
        }
        if (this.val == "L") {
          this.style = { transform: "translateX(-40px)" };
        }
        if (this.val == "O") {
          this.style = { transform: "translateX(-80px)" };
        }
        if (this.val == "W") {
          this.style = { transform: "translateX(-120px)" };
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
