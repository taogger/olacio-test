<template>
  <div class="container">
    <div class="back" @click="back">返回</div>
    <div>课程列表</div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    back() {
      this.$router.back(-1);
    },
  },
  head() {
    return {
      title:
        "欧那法语官网- 中法教师小班授课，DELF/DALF课程，法语培训留学一站式学习平台",
      meta: [
        {
          hid: "indexDesc",
          name: "description",
          content:
            "欧那法语是国内专业法语培训机构，采用学生和老师真人互动的方式解决了开口说法语的难题，欧那法语的中法教研中心聚集了北京外国语、上海外国语、巴黎索邦大学等国内外知名学府的老师，经过大量的教学案例推出了涵盖法语入门到精通的6个阶段课程，满足留学、商务、旅游、移民、兴趣多项需求，欧那独创的场景化学习让法语学习更加生动有效，在线申请免费体验课程，TEL：400-808-1648",
        },
        {
          hid: "indexKey",
          name: "keywords",
          content:
            "法语培训,法语学习,法语入门,法语专业,法语课程,法语在线,法语,欧那法语",
        },
      ],
      script: [
        {
          src:
            "https://s3.pstatp.com/cdn/expire-1-M/jquery/3.3.1/jquery.min.js",
        }
      ],
    };
  },
};
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
.back {
  position: absolute;
  top: 1rem;
  left: 1rem;
}
</style>
