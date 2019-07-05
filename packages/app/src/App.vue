<template>
  <div id="app">
    <div><ComponentWithMixin></ComponentWithMixin></div>
    <div><ComponentWithoutMixin></ComponentWithoutMixin></div>
    <div><ComponentWithDefaultImportMixin></ComponentWithDefaultImportMixin></div>
    <div><ComponentWithSimplePackageMixin></ComponentWithSimplePackageMixin></div>
    <div><ValidationComponent></ValidationComponent></div>
  </div>
</template>

<script>
import {
    ComponentWithMixin,
    ComponentWithoutMixin,
    ComponentWithDefaultImportMixin,
    ComponentWithSimplePackageMixin,
    ValidationComponent,
} from '@issue-reproduction/components';

export default {
  name: 'app',
  components: {
      ComponentWithMixin,
      ComponentWithoutMixin,
      ComponentWithDefaultImportMixin,
      ComponentWithSimplePackageMixin,
      ValidationComponent,
  }
}
</script>
