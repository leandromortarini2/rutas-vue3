<template>
  <div class="flex flex-col gap-3">
    <h1 class="text-3xl font-bold">
      Pokemon<small class="text-blue-500"> #{{ id }}</small>
    </h1>
    <img
      :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`"
      alt=""
      class="w-[200px] h-[200px] mt-5"
    />
    <RouterLink
      :to="{ name: 'pokemon', params: { id: id + 1 } }"
      class="bg-blue-500 text-white py-2 px-4 rounded text-center hover:bg-blue-700 mt-5"
      >Siguiente</RouterLink
    >
  </div>
</template>

<script setup lang="ts">
interface Props {
  id: string;
}
defineProps<Props>();
</script>

<style lang="scss" scoped></style>
