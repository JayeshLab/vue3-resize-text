import VueResizeText from './VueResizeText.js'

export default {
    install: (app) => {
      app.directive('ResizeText', VueResizeText)
    },
    ResizeText: VueResizeText
}