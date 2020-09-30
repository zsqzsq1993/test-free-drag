<template>
  <div id="app">
    <h1 class="title">free-drag功能展示</h1>
    <ul class="list">
      <router-link to="/basic" class="link" tag="div">基础功能：拖拽小球、限制边界</router-link>
      <router-link to="/passby" class="link" tag="div">处理拖拽元素的通过及离开元素</router-link>
      <router-link to="/slider" class="link" tag="div">限制运动方向和边界：滑块</router-link>
      <router-link to="/moveHandler" class="link" tag="div">拖拽开始、进行、结束时的事件处理函数及函数节流</router-link>
      <router-link to="/multiple" class="link" tag="div">组合示例</router-link>
    </ul>
    <div class="display">
      <router-view></router-view>
    </div>
  </div>
</template>

<style>
  html, body {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    font-size: 14px;
    user-select: none;
  }

  ul {
    margin: 0;
    padding: 0;
  }

  @media screen and (max-width: 400px) {
    html {
      font-size: 10px;
    }
  }

  h1 {
    font-size: 3rem;
  }

  .link {
    margin: .5rem 0;
    list-style: none;
    font-size: 1.2rem;
    transition: ease-out .8s;
  }

  .link:hover {
    cursor: pointer;
    text-decoration: underline;
    color: #3eaf7c;
  }

  #app {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    vertical-align: center;
  }

  .title {
    flex: 0 0 auto;
  }

  .list {
    flex: 0 0 auto;
  }

  .display {
    flex: 1;
    margin: 20px 40px;
    border: 2px solid #2c3e50;
  }
</style>
