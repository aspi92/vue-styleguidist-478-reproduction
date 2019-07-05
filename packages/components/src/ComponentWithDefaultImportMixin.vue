<template>
  <span>Some data from mixin: {{ mixinData }}</span>
</template>

<script>
import * as mixins from '@issue-reproduction/mixins';

export default {
  name: 'ComponentWithDefaultImportMixin',
  mixins: [ mixins.Mixin ],
}
</script>
