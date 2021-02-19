<template>
  <div class="container">
    <div class="back" @click="back">返回</div>
    <div>师资力量</div>
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
      title: "欧那俄语官网-俄罗斯专业外教，俄语培训俄语留学一站式平台",
      meta: [
        {
          hid: "indexDesc",
          name: "description",
          content:
            "欧那俄语为学员提供专业俄罗斯语网络培训课程，采用小班式线上互动授课，涵盖俄罗斯语入门到精通多个阶段，满足学员商务、外贸、留学、移民、兴趣、旅游多项需求。欧那俄语提供免费试听课服务。",
        },
        {
          hid: "indexKey",
          name: "keywords",
          content:
            "俄语培训,俄语学习,俄语入门,俄语专业,俄语课程,俄语在线,俄语,欧那俄语",
        },
      ],
      script: [
        {
          src: "http://cdn.jsdelivr.net/npm/aplayer@1.10.1/dist/APlayer.min.js",
        },
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
