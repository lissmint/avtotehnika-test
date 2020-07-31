<template>
  <div>
    <p class="current-value">{{ value }}%</p>
    <div class="slider" ref="slider" @click="onClick">
      <button
        @mousedown="onMouseDown"
        class="slider-thumb"
        ref="thumb"
        :style="{ 'margin-left': margin }"
      ></button>
    </div>
    <div class="btns">
      <span
        class="btn"
        v-for="(btn, i) in btns"
        :key="i"
        @click="$emit('input', btn)"
      >
        {{ btn }}%
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "CustomRange",
  props: ["value"],
  data: () => ({
    margin: 0,
    btns: [25, 50, 75, 100],
  }),
  watch: {
    value() {
      this.thumbMargin();
    },
  },
  mounted() {
    this.thumbMargin();
  },
  methods: {
    thumbMargin() {
      let slider = this.$refs.slider.offsetWidth;
      let thumb = this.$refs.thumb.offsetWidth;
      this.margin = (this.value * (slider - thumb)) / 100 + "px";
    },
    onClick(evt) {
      let slider = this.$refs.slider;
      let sliderCoords = this.getCoords(slider);
      let value = ((evt.pageX - sliderCoords.left) / slider.offsetWidth) * 100;
      this.$emit("input", value.toFixed(1));
    },
    onMouseDown(evt) {
      let slider = this.$refs.slider;
      let thumb = this.$refs.thumb;
      let sliderCoords = this.getCoords(slider);
      let thumbCoords = this.getCoords(thumb);
      let shift = evt.pageX - thumbCoords.left;

      document.onmousemove = (evt) => {
        let left = evt.pageX - shift - sliderCoords.left;
        let right = slider.offsetWidth - thumb.offsetWidth;

        if (left < 0) left = 0;
        if (left > right) left = right;

        let per = (left * 100) / (slider.offsetWidth - thumb.offsetWidth);
        this.$emit("input", per.toFixed(1));

        document.onmouseup = () => {
          document.onmousemove = document.onmouseup = null;
        };
      };
    },
    getCoords(ref) {
      let box = ref.getBoundingClientRect();
      return {
        top: box.top + pageYOffset,
        left: box.left + pageXOffset,
      };
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
  position: relative;
  outline: none;
  width: 100%;
  height: 30px;
  background: linear-gradient(90deg, #44af69, #fcab10, #f8333c);
  border-radius: 25px;
  opacity: 0.7;
  -webkit-transition: 0.2s;
  transition: opacity 0.2s;
  padding: 0;

  &:hover {
    opacity: 1;
  }

  .slider-thumb {
    position: absolute;
    top: 50%;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background-color: #fff;
    vertical-align: center;
    cursor: move;
    transform: translateY(-50%);
    border: none;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  }
}
</style>
