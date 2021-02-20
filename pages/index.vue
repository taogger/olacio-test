<template>
    <div>
     <!--  <h1 class="title">
        <img :src="require('~/assets/img/olalogo.png')" class="logo" />
      </h1> -->
      <navMenu/>
     <courseList :courseLists="coursesList"/>
    </div>
</template>

<script>
import courseList from '../components/courseList.vue';
import nav from '../components/nav.vue';
export default {
  data(){
    return {
      coursesList:[]
    }
  },
  components: {
    courseList:courseList,
    navMenu:nav
  },
  async asyncData({ $axios }) {
    let res = await $axios.get('/sessions?tagId=0&pageNum=1&pageSize=10')
    return {
      coursesList: res
    }
  },
};
</script>
<style>
ul,li,body,html{
    padding:0;
    margin:0;
    list-style: none;
  }

.logo {
  max-width: 50%;
}
.title {
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
