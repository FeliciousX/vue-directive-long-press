import { VNode, VNodeDirective } from 'vue/types/vnode'

interface LongPressHTMLElement extends HTMLElement {
  $_long_press_mousedown_handler : () => void;
  dataset : {
    longPressTimeoutId : string;
  };
}

const longPressStop = new CustomEvent('long-press-stop')
const longPressStart = new CustomEvent('long-press-start')

export const directiveOption = {
  bind (el: LongPressHTMLElement, binding: VNodeDirective, vnode: VNode) {
    el.dataset.longPressTimeoutId = null

    const onmouseup = () => {
      clearTimeout(parseInt(el.dataset.longPressTimeoutId))

      if (vnode.componentInstance) {
        vnode.componentInstance.$emit('long-press-stop')
      } else {
        el.dispatchEvent(longPressStop)
      }

      document.removeEventListener('mouseup', onmouseup)
    }

    const onmousedown = () => {
      document.addEventListener('mouseup', onmouseup)

      const timeout = setTimeout(() => {
        if (vnode.componentInstance) {
          vnode.componentInstance.$emit('long-press-start')
        } else {
          el.dispatchEvent(longPressStart)
        }
      }, binding.value)

      el.dataset.longPressTimeoutId = timeout.toString()
    }

    el.$_long_press_mousedown_handler = onmousedown;
    el.addEventListener('mousedown', onmousedown)
  },
  /**
   * NOTE: since unbind usually involes removing the element
   * just remove all mousedown listener on the element
   *
   * If you are using the mousedown event and unbinding this directive,
   * your mousedown event may be removed
   */
  unbind (el : LongPressHTMLElement) {
    clearTimeout(parseInt(el.dataset.longPressTimeoutId))
    el.removeEventListener('mousedown', el.$_long_press_mousedown_handler)
  }
}

export default directiveOption
