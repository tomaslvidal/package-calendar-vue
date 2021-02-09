<template>
    <div>
        <v-calendar></v-calendar>
    </div>
</template>

<script>
    import VCalendar from 'v-calendar/lib/components/calendar.umd'

    export default {
        components: [
            VCalendar
        ]
    }
</script>

<style lang="postcss">
  $color-brand: darkgrey;

  $font-size: 1em;

  body {
    color: $color-brand;
    font-size: $font-size;
  }
</style>