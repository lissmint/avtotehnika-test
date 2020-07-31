<template>
  <div class="container">
    <p class="current-value">{{ value }}%</p>
    <input
      class="slider"
      type="range"
      min="0"
      max="100"
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
  props: ["value"],
  data: () => ({
    btns: [25, 50, 75, 100],
  }),
  methods: {
    setValue(value) {
      this.$emit("input", value);
    },
  },
};
</script>

<style lang="scss" scoped>
.btns {
  display: flex;
  justify-content: center;
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
  margin: 30px 15px;
  background-color: #44af69;
  text-align: center;
  font-weight: bold;
  transition: all 0.2s ease-in;
}

.btn:hover {
  background-color: #f8333c;
}

.slider {
  outline: none;
  width: 100%;
  -webkit-appearance: none;
  appearance: none;
  height: 30px;
  background: linear-gradient(90deg, #44af69, #fcab10, #f8333c);
  border-radius: 25px;
  padding: 2px 3px;
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
