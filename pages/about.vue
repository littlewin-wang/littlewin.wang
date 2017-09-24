<template>
  <div class="about">
    <div class="grid-container">
      <Grid></Grid>
    </div>
    <div class="basic container">

    </div>

    <div class="experience container">

    </div>

    <div class="hobby container">

    </div>
  </div>
  </div>
</template>

<script>
import Grid from '~/components/rotator/grid.vue'

export default {
  components: {
    Grid
  },
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
.about {
  .grid-container {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .container {
    width: 100%;
    height: 300px;
  }

  .basic {
    background-color: rgba(44, 213, 175, .5);
  }

  .experience {
    background-color: rgba(0, 200, 255, .5);
  }

  .hobby {
    background-color: rgba(217, 85, 80, .5);
  }
}
</style>
