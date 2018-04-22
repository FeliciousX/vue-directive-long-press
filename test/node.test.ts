import { mount } from '@vue/test-utils'

import App from './components/TheApp.vue'

describe('Using Long Press', () => {
  test.skip('button', () => {
    const wrapper = mount(App)
    console.log(wrapper.html())
  })
})
