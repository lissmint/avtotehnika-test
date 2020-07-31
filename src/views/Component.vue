<template>
  <div>
    <h1>Parent value: {{ value }}</h1>
    <range v-model="value" />
  </div>
</template>
<script>
import Range from "@/components/Range";

export default {
  name: "CustomComponent",
  components: {
    range: Range,
  },
  data: () => ({
    value: 32.5,
  }),
};
</script>
