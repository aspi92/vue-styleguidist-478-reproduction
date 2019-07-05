<template>
  <span>A component with an external mixin hoisted in root node_modules</span>
</template>

<script>
import { validationMixin } from 'vuelidate';

export default {
  name: 'ValidationComponent',
  mixins: [ validationMixin ],
}
</script>
