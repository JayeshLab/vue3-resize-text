<template>
  <div id="app">
      <div class="container" v-resize-text>
          <h1><b><span style="color:#3eaf7c">vue-resize-text</span></b></h1>
          <h6> A vue directive which automatically resize font size based on element width.</h6>
          <h6><u>Resize the browser viewport to see the effect in action.</u></h6>
      </div>
      <hr>
      <div v-resize-text="{ratio: 0.6}">Hello Vue</div>
      <pre><code>&lt;div v-resize-text="{ratio: 0.6}"&gt;Hello Vue&lt;/div&gt;</code></pre>
      <br>
      <hr>
      <div v-resize-text="{minFontSize: '50px', maxFontSize: '100px'}">Hello Vue</div>
<pre><code>&lt;div v-resize-text="{minFontSize: '50px', maxFontSize: '100px'}"&gt;Hello Vue&lt;/div&gt;</code></pre>
      <br>
      <hr>
      <div v-resize-text="{ratio: 1.5, delay: 500}">Hello Vue</div>
      <pre><code>&lt;div v-resize-text="{ratio: 1.5, delay: 500}"&gt;Hello Vue&lt;/div&gt;</code></pre>
      <br>
      <br>
      <a href="https://github.com/JayeshLab/vue-resize-text" target="_blank"><div v-resize-text="{ratio: 3}">Fork me on GitHub</div></a>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>
<style>
body {
    font-size: 16px;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 30px;
}
h1 {
    font-size: 1em;
    margin: 20px 0;
}
h6 {
    font-size: .26em;
    margin: 10px;
}
p {
    font-size: .5em;
}
pre {
    font-size: 12px;
    overflow-x: auto;
    white-space: pre-wrap;
    white-space: -moz-pre-wrap;
    white-space: -pre-wrap;
    white-space: -o-pre-wrap;
    word-wrap: break-word;
}
</style>
