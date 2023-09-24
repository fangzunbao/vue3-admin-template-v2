import { defineComponent, nextTick } from 'vue'
import JsBarcode from 'jsbarcode'
import props from './barcode.props'

export default defineComponent({
  name: 'ThBarcode',
  props,
  setup(props) {
    const { id, tag, text, options } = props
    nextTick(() => {
      JsBarcode(`#${id}`, text, { ...options })
    })
    return () => (
      <div class="th-barcode">
        {tag === 'canvas' && <canvas id={id}></canvas>}
        {tag === 'img' && <img id={id} />}
        {tag === 'svg' && <svg id={id}></svg>}
      </div>
    )
  },
})
