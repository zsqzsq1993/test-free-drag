<template>
  <div id="app">
    <h1>free-drag功能展示</h1>
    <ul @click="switchName($event)">
      <li data-name="basic">基础功能：拖拽小球</li>
      <li data-name="pass">处理拖拽元素的通过及离开元素</li>
      <li data-name="limit">限制运动方向和边界：滑块</li>
      <li data-name="handler">拖拽开始、进行、结束时的事件处理函数及函数节流</li>
      <li data-name="multiple">组合示例</li>
    </ul>
    <div class="display">
      <component :is="componentName"></component>
    </div>
  </div>
</template>

<script>
  import basic from "./components/basic"
  import pass from "./components/pass"
  import limit from "./components/limit"
  import handler from "./components/handler"
  import multiple from "./components/multiple"

  export default {
    name: 'App',

    components: {
      basic,
      pass,
      limit,
      handler,
      multiple
    },

    methods: {
      switchName(event) {
        this.componentName = event.target.dataset.name
      }
    },

    data() {
      return {
        componentName: 'basic'
      }
    }


  }
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
    font-size: 14px;
  }
  h1 {
    font-size: 3rem;
  }

  li {
    margin: .5rem 0;
    list-style: none;
    font-size: 1.2rem;
    transition: ease-out .8s;
  }

  li:hover {
    cursor: pointer;
    text-decoration: underline;
    color: #3eaf7c;
  }
  .display {
    height: 350px;
    margin: 20px 40px;
    border: 2px solid #2c3e50;
  }
</style>
