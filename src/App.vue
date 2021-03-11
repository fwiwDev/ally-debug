<template>
  <div id="q-app">
    <router-view />
    <p class="text-h4 text-center">{{ currentTime }}</p>
  </div>
</template>

<script>

export default {
  name: 'App',
  created () {
    console.log((new Date()).toString())
    console.log((new Date()).toLocaleString())
    console.log((new Date()).getTimezoneOffset())
    console.log(navigator.userAgent)
    console.log(this.$moment.version)
    this.$moment.locale(this.$i18n.locale)
  },
  computed: {
    currentTime () {
      return this.$moment().format('LL')
    }
  }
}
</script>
