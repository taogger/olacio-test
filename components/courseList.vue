<template>
  <section class="course-wrap">
    <div class="section-title">
      <h2>今日试听课程</h2>
      <span @click="moreCourse">更多课程</span>
    </div>
     <dl v-for="(item,idex) in courseLists">
      <dt><img :src="item.teacher.coverImageUrl" alt=""></dt>
      <dd>
        <h3>{{item.sessionName}}</h3>
        <p><span>{{item.teacher.nickName}}</span>| <span>班级人数{{item.tfClass.maxStudentNum}}人</span></p>
        <p class="timer">下午12:30-17:00</p>
        <p class="des">限{{item.maxListenerNum}}人试听，已有{{item.userBookingNum}}人预约试听</p>
        <span class="to-class">去上课</span>
      </dd>
    </dl>
  </section>
</template>
<style>
.course-wrap {
  padding: 10px;
  border-top: 10px solid #ddd;
}

.course-wrap dl,
.section-title {
  display: flex;
  position: relative;
  margin-bottom: 10px;
  font-size: 14px;
}
.section-title{
    line-height: 50px;
}
.section-title span {
  position: absolute;
  right: 10px;
}

dt,
dd {
  padding: 0;
  margin: 0;
}

.course-wrap dt {
  flex: 1;
}

.course-wrap dt img {
  max-width: 80%;
}

.course-wrap dd {
  position: relative;
  flex: 2;
}

.course-wrap .to-class {
  position: absolute;
  top: 50%;
  right: 10px;
  display: inline-block;
  padding: 2px 10px;
  background-color: red;
  color: white;
}

</style>
<script>
export default {
  data() {
    return {
      coursesList: [],
    };
  },
  props:['courseLists'],
  created() {
  },
  mounted() {
  },
  methods: {
    moreCourse() {
      this.$router.push({
        path: '/course'
      })

    },
    // async moreCourse() {
    //   //发送ajax
    //   let res = await this.$axios.get('/sessions?tagId=0&pageNum=1&pageSize=3')
    //   //保存数据
    //   this.coursesList = res
    // }
  },
}

</script>
