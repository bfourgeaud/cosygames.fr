<template>
  <v-container>
    <v-row>
      <v-col
        v-for="game in games"
        :key="game.id"
        cols="12"
        sm="6"
        md="4"
      >
        <game
          :value="game"
          :understate="!game.installed"
          dense
          static
          show-action
        />
      </v-col>
    </v-row>
    <v-btn
      @click="getGames"
    >
      Fetch from Server
    </v-btn>
  </v-container>
</template>

<script>
  // Utilities
  import {
    mapGetters,
    mapActions,
  } from 'vuex'

  export default {
    name: 'LibraryGames',

    components: {
      Game: () => import('@/components/Game'),
    },

    computed: {
      ...mapGetters('library', ['games']),
    },

    methods: {
      ...mapActions('games', ['getGames']),
    },
  }
</script>

<style scoped>
.v-sheet {
  cursor: pointer;
}
</style>
