<template>
  <div>
    <h1>Parent value: {{ value }}</h1>
    <h2>Input-based component:</h2>
    <range :min="min" :max="max" v-model="value" />
    <h2>Custom component:</h2>
    <c-range :min="min" :max="max" v-model="value" />
  </div>
</template>
<script>
import Range from "@/components/Range";
import CustomRange from "@/components/CustomRange";

export default {
  name: "CustomComponent",
  components: {
    range: Range,
    "c-range": CustomRange,
  },
  data: () => ({
    value: 32.5,
    min: 0,
    max: 350,
  }),
};
</script>
