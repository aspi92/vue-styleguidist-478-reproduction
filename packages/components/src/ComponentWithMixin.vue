<template>
  <span>Some data from mixin: {{ mixinData }}</span>
</template>

<script>
import { Mixin } from '@issue-reproduction/mixins';

export default {
  name: 'ComponentWithMixin',
  mixins: [ Mixin ],
}
</script>
