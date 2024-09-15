import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import Button from '@/components/ui/button/Button.vue'

describe('Button.vue', () => {
  it('renders default slot content', () => {
    const wrapper = mount(Button, {
      slots: {
        default: 'Click me'
      }
    })
    expect(wrapper.text()).toContain('Click me')
  })

  it('applies variant and size classes', () => {
    const wrapper = mount(Button, {
      props: {
        variant: 'default',
        size: 'default'
      }
    })
    console.log(wrapper.classes())
    expect(wrapper.classes()).toContain('bg-primary')
    expect(wrapper.classes()).toContain('h-10')
  })

  it('renders as a different element when "as" prop is provided', () => {
    const wrapper = mount(Button, {
      props: {
        as: 'a'
      },
      slots: {
        default: 'Link'
      }
    })
    expect(wrapper.element.tagName).toBe('A')
    expect(wrapper.text()).toBe('Link')
  })
})
