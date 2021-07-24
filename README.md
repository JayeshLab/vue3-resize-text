# Vue3 Resize Text

A vue3 directive which automatically resize font size based on element width.

It makes the font-size flexible on fluid or responsive layout.


[![npm](https://img.shields.io/npm/v/vue3-resize-text.svg?style=flat-square)](https://www.npmjs.com/package/vue3-resize-text)
[![npm](https://img.shields.io/npm/dt/vue3-resize-text.svg?style=flat-square)](https://www.npmjs.com/package/vue3-resize-text)
[![Build Status](https://www.travis-ci.com/JayeshLab/vue3-resize-text.svg?branch=master&status=passed)](https://travis-ci.org/JayeshLab/vue3-resize-text)
[![npm](https://img.shields.io/npm/l/vue3-resize-text.svg?style=flat-square)](http://opensource.org/licenses/MIT)

[Live Demo](https://jayeshlab.github.io/vue3-resize-text/index.html): Resize the browser viewport to see the effect in action

For vue.js 2.x see the [vue-resize-text](https://github.com/JayeshLab/vue-resize-text "vue-resize-text")



![vue-resize-text](https://user-images.githubusercontent.com/36194663/48419503-21935780-e77e-11e8-8a2f-6a1c9e33f740.gif)

## Installation

Install via NPM

`$ npm install vue3-resize-text --save`

Install via CDN

```html
<script src="https://unpkg.com/vue"></script>
<script src="https://unpkg.com/vue3-resize-text"></script>
```

#### Global

Register VueResizeText globally:

### Use
```javascript
import { createApp } from "vue"
import App from "./App.vue"
import VueResizeText from "vue3-resize-text"

const app = createApp(App)
app.use(VueResizeText)
```
or using directive

```javascript
import { createApp } from "vue"
import App from "./App.vue"
import VueResizeText from "vue3-resize-text"

const app = createApp(App)
app.directive('ResizeText', VueResizeText.ResizeText);
```


Directive ```v-resize-text``` then can be used in any of Component

```html
<template>
  <div v-resize-text>Hello Vue</div>
</template>
```

#### Local

Include the VueResizeText  directive directly into your component using import:

```html
<template>
  <div v-resize-text>Hello Vue</div>
</template>
<script>
import VueResizeText from 'vue3-resize-text'
export default {
 directives: {
    ResizeText: VueResizeText.ResizeText
 }
}
</script>
```

### Usage

#### Basic usage

```html
<template>
  <div>
    <div v-resize-text="{ratio:1.3, minFontSize: '30px', maxFontSize: '100px', delay: 200}">Hello Vue</div>
  </div>
</template>

<script>
  import VueResizeText from 'vue3-resize-text'
  export default {
    directives: {
        ResizeText: VueResizeText.ResizeText
     }
  };
</script>
```

### Directive Arguments
`v-resize-text="{ratio:1.5, minFontSize: '30px', maxFontSize: '100px', delay: 200}"`

| Argument         | Description                 |  Type         |  Default     | 
| -----------      | ---------------             | ------------  | ------------ | 
|  ratio           |  Font Ratio is the tweek to make the text resize properly, greater then `1` makes the font smaller and less then `1` make the font bigger | Number        |     1       |
|  minFontSize     |  Minimum font-size threshold in px| Number/String |     16px or 16       |      -            |
|  maxFontSize     |  Maximum font-size threshold in px| Number/String  |     500px  or 500      |      -         |
|  delay           |  Debound time delay on window resize | Number        |  200   |      -        |

## License

MIT
