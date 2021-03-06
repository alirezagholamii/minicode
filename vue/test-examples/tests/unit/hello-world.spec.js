import { shallowMount, RouterLinkStub } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg },
      global: {
        components: {
          'router-link': RouterLinkStub
        }
      }
    })
    expect(wrapper.text()).toContain(msg)
  })

  it('inside tag with hello class', () => {
    const msg = 'new message'

    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg },
      global: {
        components: {
          'router-link': RouterLinkStub
        }
      }
    })
    const message = wrapper.find('#message')
    expect(message.text()).toBe(msg)
  })
})


