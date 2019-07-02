<template>
  <span>Some data: {{ name }}</span>
</template>

<script>
export default {
  name: 'ComponentWithoutMixin',
  data() {
    return {
      name: 'ComponentWithoutMixin',
    };
  }
}
</script>
