<template>
  <header class="head">
    <div class="inner">
      <Logo />
      <select name="langSelector" id="lang">
        <option value="English">English</option>
        <option value="Not english">Not english</option>
      </select>
    </div>
  </header>
</template>

<script>
import Logo from './Logo.vue'

export default {
  name: 'Header',
  components: {
    Logo
  },
  props: {
    msg: String
  }
}
</script>


<style scoped>
    .head {
        background-color: #1a212b;
        padding: 10px;
    }

    .head .inner {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .head select#lang {
      display: block;
      border: 1px solid dimgray;
      border-radius: 20px;
      padding: 10px 15px;
      background: transparent;
      color: dimgray;
    }

    .head select#lang:focus {
      outline: none;
    }

</style>