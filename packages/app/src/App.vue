<template>
  <div id="app">
    <div><ComponentWithMixin></ComponentWithMixin></div>
    <div><ComponentWithoutMixin></ComponentWithoutMixin></div>
  </div>
</template>

<script>
import { ComponentWithMixin, ComponentWithoutMixin } from '@issue-reproduction/components';

export default {
  name: 'app',
  components: {
      ComponentWithMixin,
      ComponentWithoutMixin,
  }
}
</script>
