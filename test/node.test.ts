import Vue from 'vue'
import { mount } from '@vue/test-utils'

import App from './components/TheApp.vue'
import CustomApp from './components/TheCustomApp.vue'
import BaseButton from './components/BaseButton.vue'

describe('Using Long Press Directive', () => {
  jest.useFakeTimers()

  afterEach(() => {
    jest.clearAllTimers()
  })
  describe('native', () => {
    test('success', () => {
      const wrapper = mount(App)

      expect(wrapper.emitted('long-press-start')).toBeUndefined()
      expect(wrapper.emitted('long-press-stop')).toBeUndefined()

      wrapper.find('button').trigger('pointerdown')

      jest.advanceTimersByTime(150)

      expect(wrapper.emitted('long-press-start')).toHaveLength(1)
      expect(wrapper.emitted('long-press-stop')).toBeUndefined()

      document.dispatchEvent(new Event('pointerup'))

      expect(wrapper.emitted('long-press-stop')).toHaveLength(1)
      expect(wrapper.emitted('long-press-start')).toHaveLength(1)
    })

    test('cancel', () => {
      const wrapper = mount(App)

      expect(wrapper.emitted('long-press-start')).toBeUndefined()
      expect(wrapper.emitted('long-press-stop')).toBeUndefined()

      wrapper.find('button').trigger('pointerdown')

      jest.advanceTimersByTime(149)

      expect(wrapper.emitted('long-press-start')).toBeUndefined()
      expect(wrapper.emitted('long-press-stop')).toBeUndefined()

      document.dispatchEvent(new Event('pointerup'))

      expect(wrapper.emitted('long-press-start')).toBeUndefined()
      expect(wrapper.emitted('long-press-stop')).toHaveLength(1)
    })
  })

  describe('custom', () => {
    test('success', () => {
      const wrapper = mount(CustomApp)

      expect(wrapper.emitted('long-press-start')).toBeUndefined()
      expect(wrapper.emitted('long-press-stop')).toBeUndefined()

      wrapper.find(BaseButton).trigger('pointerdown')

      jest.advanceTimersByTime(150)

      expect(wrapper.emitted('long-press-start')).toHaveLength(1)
      expect(wrapper.emitted('long-press-stop')).toBeUndefined()

      document.dispatchEvent(new Event('pointerup'))

      expect(wrapper.emitted('long-press-stop')).toHaveLength(1)
      expect(wrapper.emitted('long-press-start')).toHaveLength(1)
    })

    test('cancel', () => {
      const wrapper = mount(CustomApp)

      expect(wrapper.emitted('long-press-start')).toBeUndefined()
      expect(wrapper.emitted('long-press-stop')).toBeUndefined()

      wrapper.find(BaseButton).trigger('pointerdown')

      jest.advanceTimersByTime(149)

      expect(wrapper.emitted('long-press-start')).toBeUndefined()
      expect(wrapper.emitted('long-press-stop')).toBeUndefined()

      document.dispatchEvent(new Event('pointerup'))

      expect(wrapper.emitted('long-press-start')).toBeUndefined()
      expect(wrapper.emitted('long-press-stop')).toHaveLength(1)
    })
  })
})
