<template>
  <span>Some data from mixin: {{ mixinData }}</span>
</template>

<script>
import { Mixin } from 'mixins-with-simple-package-name';

export default {
  name: 'ComponentWithMixinFromPackageWithSimpleName',
  mixins: [ Mixin ],
}
</script>
