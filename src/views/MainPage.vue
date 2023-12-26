<script setup lang="ts">
import { onMounted } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
// import HelloWorld from './components/HelloWorld.vue'
import $ from 'jquery'
const animations = () => {
  var c = document.getElementsByTagName('canvas')[0],
    x = c.getContext('2d'),
    pr = window.devicePixelRatio || 1,
    w = window.innerWidth,
    h = window.innerHeight,
    f = 90,
    q = [],
    m = Math,
    r = 0,
    u = m.PI * 2,
    v = m.cos,
    z = m.random
  c.width = w * pr
  c.height = h * pr
  x.scale(pr, pr)
  x.globalAlpha = 0.6

  function i() {
    x.clearRect(0, 0, w, h)
    q = [
      { x: 0, y: h * 0.7 + f },
      { x: 0, y: h * 0.7 - f }
    ]
    while (q[1].x < w + f) d(q[0], q[1])
  }

  function d(i, j) {
    x.beginPath()
    x.moveTo(i.x, i.y)
    x.lineTo(j.x, j.y)
    var k = j.x + (z() * 2 - 0.25) * f,
      n = y(j.y)
    x.lineTo(k, n)
    x.closePath()
    r -= u / -50
    x.fillStyle =
      '#' +
      (
        ((v(r) * 127 + 128) << 16) |
        ((v(r + u / 3) * 127 + 128) << 8) |
        (v(r + (u / 3) * 2) * 127 + 128)
      ).toString(16)
    x.fill()
    q[0] = q[1]
    q[1] = { x: k, y: n }
  }

  function y(p) {
    var t = p + (z() * 2 - 1.1) * f
    return t > h || t < 0 ? y(p) : t
  }

  document.onclick = i
  document.ontouchstart = i
  i()
  setInterval(() => {
    i()
  }, 3000)
}
const weClick = () => {
  $('.named').click(function () {
    alert(1)
  })
}
onMounted(() => {
  animations()
  weClick()
  /**
   * @description: 文字跳动动画效果
   * @return {*}
   */
  $('#wrapper h2').textillate({
    loop: true,
    autoStart: true,
    in: {
      shuffle: false,
      effect: 'bounce'
    },
    out: {
      effect: 'hinge',
      delayScale: 1.5,
      delay: 30,
      sync: false,
      shuffle: true,
      reverse: false,
      callback: function () { }
    }
  })
})
</script>

<template>
  <!-- <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView /> -->
  <div>
    <div id="wrapper">
      <h1>王彬</h1>
      <h3 class="named">William</h3>
      <h2>Ideas, Binary & Enthusiasm === Better</h2>
      <p>
        <a href="about:blank" target="_blank">
          <RouterLink to="/blog/ArticleDetails">Blog</RouterLink>
        </a>
      </p>
      <p><a href="about:blank" target="_blank">
          <RouterLink to="/blog/ArticleList">CSDN</RouterLink>
        </a></p>
      <p><a href="about:blank" target="_blank">
          <RouterLink to="/blog/ArticleEdit">github</RouterLink>
        </a></p>
      <p><a href="about:blank" target="_blank">导航</a></p>
      <p><a href="about:blank" target="_blank">工具</a></p>
      <p><a href="about:blank" target="_blank">简历</a></p>
    </div>
    <canvas></canvas>
  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}

#wrapper {
  position: absolute;
  left: 0;
  color: #999;
  width: 365px;
  text-align: center;
  top: 50%;
  left: 50%;
  margin-left: -160px;
  margin-top: -160px;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
}

h1 {
  font-family: 'Montserrat', 'Helvetica Neue', Arial, sans-serif;
  font-weight: 400;
  font-size: 30px;
  color: #00796b;
  letter-spacing: 9px;
  text-transform: none;
  margin: 12px 0;
  left: 4px;
}

h2 {
  color: #00796b;
  font-weight: normal;
  font-size: 15px;
  letter-spacing: 0.12em;
  margin: 20px 0 10px 0;
  left: 3px;
}

h1,
h2 {
  position: relative;
}

p {
  font-size: 14px;
  line-height: 2em;
  margin: 0;
  letter-spacing: 2px;
}

canvas {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

a {
  color: #999;
  text-decoration: none;
  transition: color 0.2s ease;
}

a:hover {
  color: #0000cc;
}</style>
