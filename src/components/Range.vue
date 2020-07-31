<template>
  <div>
    <p class="current-value">{{ percent }}%</p>
    <input
      class="slider"
      type="range"
      :min="min"
      :max="max"
      step="0.1"
      :value="value"
      @input="$emit('input', $event.target.value)"
    />
    <br />
    <div class="btns">
      <span
        class="btn"
        v-for="(btn, i) in btns"
        :key="i"
        @click="setValue(btn)"
      >
        {{ btn }}%
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "range",
  props: ["value", "min", "max"],
  data: () => ({
    btns: [25, 50, 75, 100],
  }),
  computed: {
    percent() {
      return (((this.value - this.min) / (this.max - this.min)) * 100).toFixed(
        1
      );
    },
  },
  methods: {
    setValue(percent) {
      let valueToSet = ((this.max - this.min) * percent) / 100 + this.min;
      this.$emit("input", valueToSet);
    },
  },
};
</script>

<style lang="scss" scoped>
.btns {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 20px;
}
.current-value {
  text-align: left;
  font-weight: bold;
  color: #333;
}
.btn {
  display: inline-block;
  cursor: pointer;
  border: none;
  padding: 10px 15px;
  color: white;
  border-radius: 25px;
  margin: 10px 15px;
  background-color: #44af69;
  text-align: center;
  font-weight: bold;
  transition: all 0.2s ease-in;

  &:hover {
    background-color: #f8333c;
  }
}

.slider {
  outline: none;
  width: 100%;
  -webkit-appearance: none;
  appearance: none;
  height: 30px;
  background: linear-gradient(90deg, #44af69, #fcab10, #f8333c);
  border-radius: 25px;
  opacity: 0.7;
  -webkit-transition: 0.2s;
  transition: opacity 0.2s;

  &:hover {
    opacity: 1;
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 25px;
    appearance: none;
    height: 25px;
    border-radius: 50%;
    background-color: #fff;
    vertical-align: center;
  }

  &::-moz-range-thumb {
    -webkit-appearance: none;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background-color: #fff;
    vertical-align: center;
  }
}
</style>
