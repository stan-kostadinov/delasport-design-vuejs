<template>
  <Header />
  <Content />
  <Footer />
</template>

<script>
import Header from './components/Header.vue'
import Content from './components/Content.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Content,
    Footer
  }
}
</script>

<style>
html, body {
  margin: 0 auto;
  padding: 0;
}
body {
  background-color: #232a34;
}
.inner {
    width: 1200px;
    max-width: 100%;
    margin: 0 auto;
}
p, li {
  color: #889790;
}

h1, h2, h3, h4 {
  color: #fff;
}

</style>