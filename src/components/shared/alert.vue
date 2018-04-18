<template>
  <v-alert type="error" dismissible @input="onClose" :value="true">
    {{ text }}
  </v-alert>
</template>

<script>
export default {
  name: 'alert',
  props: {
    text: {
      type: String,
      required: true
    }
  },
  methods: {
    onClose() {
      this.$emit('dismissed')
    }
  }
}
</script>