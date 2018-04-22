import Vue from 'vue'
import { mount } from '@vue/test-utils'

import App from './components/TheApp.vue'
import CustomApp from './components/TheCustomApp.vue'
import BaseButton from './components/BaseButton.vue'

describe('Using Long Press Directive', () => {
  describe('native', () => {
    test('success', done => {
      const wrapper = mount(App)

      expect(wrapper.emitted('long-press-start')).toBeUndefined()
      expect(wrapper.emitted('long-press-stop')).toBeUndefined()

      wrapper.find('button').trigger('mousedown')

      setTimeout(() => {
        expect(wrapper.emitted('long-press-start')).toHaveLength(1)
        expect(wrapper.emitted('long-press-stop')).toBeUndefined()

        document.dispatchEvent( new Event('mouseup'))

        expect(wrapper.emitted('long-press-stop')).toHaveLength(1)
        expect(wrapper.emitted('long-press-start')).toHaveLength(1)
        done()
      }, 50)
    })

    test('cancel', done => {
      const wrapper = mount(App)

      expect(wrapper.emitted('long-press-start')).toBeUndefined()
      expect(wrapper.emitted('long-press-stop')).toBeUndefined()

      wrapper.find('button').trigger('mousedown')

      setTimeout(() => {
        expect(wrapper.emitted('long-press-start')).toBeUndefined()
        expect(wrapper.emitted('long-press-stop')).toBeUndefined()

        document.dispatchEvent( new Event('mouseup'))

        expect(wrapper.emitted('long-press-start')).toBeUndefined()
        expect(wrapper.emitted('long-press-stop')).toHaveLength(1)
        done()
      }, 49)
    })
  })

  describe('custom', () => {
    test('success', done => {
      const wrapper = mount(CustomApp)

      expect(wrapper.emitted('long-press-start')).toBeUndefined()
      expect(wrapper.emitted('long-press-stop')).toBeUndefined()

      wrapper.find(BaseButton).trigger('mousedown')

      setTimeout(() => {
        expect(wrapper.emitted('long-press-start')).toHaveLength(1)
        expect(wrapper.emitted('long-press-stop')).toBeUndefined()

        document.dispatchEvent( new Event('mouseup'))

        expect(wrapper.emitted('long-press-stop')).toHaveLength(1)
        expect(wrapper.emitted('long-press-start')).toHaveLength(1)
        done()
      }, 50)
    })

    test('cancel', done => {
      const wrapper = mount(CustomApp)

      expect(wrapper.emitted('long-press-start')).toBeUndefined()
      expect(wrapper.emitted('long-press-stop')).toBeUndefined()

      wrapper.find(BaseButton).trigger('mousedown')

      setTimeout(() => {
        expect(wrapper.emitted('long-press-start')).toBeUndefined()
        expect(wrapper.emitted('long-press-stop')).toBeUndefined()

        document.dispatchEvent( new Event('mouseup'))

        expect(wrapper.emitted('long-press-start')).toBeUndefined()
        expect(wrapper.emitted('long-press-stop')).toHaveLength(1)
        done()
      }, 49)
    })
  })
})
