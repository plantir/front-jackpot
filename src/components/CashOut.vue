<style scoped>
.btn {
  position: fixed;
  top: calc(100% - 100px);
  left: 50%;
  background: red;
  color: #fff;
  font-size: 22px;
  border: none;
  width: 150px;
  height: 50px;
  border-radius: 12px;
  box-shadow: 0 0 6px #fff;
}
.disabled {
  opacity: 0.5;
}
</style>
<template>
  <section>
    <button
      ref="button"
      class="btn"
      @click.prevent="onClick"
      @mouseover="onMouseOver"
      :class="{ disabled: disabled }"
      :style="button_style"
    >
      Cash Out!
    </button>
  </section>
</template>

<script>
export default {
  data: () => {
    return {
      disabled: false,
      button_position: {},
      button_style: {
        left: "50%",
        top: "calc(100% - 100px)",
      },
    };
  },
  methods: {
    onClick() {
      if (this.disabled) {
        return;
      }
      this.$emit("cashout");
    },
    onMouseOver() {
      this.disabled = false;
      let random_number = Math.random();
      let rect = this.$refs.button.getBoundingClientRect();
      console.log(random_number);
      let button_position = { x: rect.left, y: rect.top };
      console.log(button_position);
      if (random_number < 0.5) {
        let direction = Math.random() < 0.5 ? "+" : "-";
        let side = Math.random() < 0.5 ? "x" : "y";
        if (side == "x") {
          if (
            (direction == "+" || button_position.x < 300) &&
            button_position.x < window.innerWidth - 300
          ) {
            button_position.x += 300;
          } else {
            button_position.x -= 300;
          }
          this.button_style.left = button_position.x + "px";
        } else {
          if (
            (direction == "+" || button_position.y < 300) &&
            button_position.y < window.innerHeight - 300
          ) {
            button_position.y += 300;
          } else {
            button_position.y -= 300;
          }
          this.button_style.top = button_position.y + "px";
        }

        return;
      } else if (random_number < 0.9) {
        this.disabled = true;
      }
    },
  },
};
</script>
