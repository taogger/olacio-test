<template>
  <div class="container">
    <div>
      <h1 class="title">
        <img :src="require('~/assets/img/olalogo.png')" class="logo" />
      </h1>
      <div class="links">
        <NuxtLink to="/course"> 课程体系 </NuxtLink>
      </div>

      <div class="links">
        <NuxtLink to="/teacher"> 师资力量 </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.logo {
  max-width: 50%;
}
.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 50px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
