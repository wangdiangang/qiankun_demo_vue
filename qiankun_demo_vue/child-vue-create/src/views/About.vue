<template>
  <div class="about">
    <h1>This is an about page</h1>
    <ol>
      <li v-for="i in 300" :key="i">第{{i}}个</li>
    </ol>
  </div>
</template>
