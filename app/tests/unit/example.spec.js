import { shallowMount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'

describe('HelloWorld.vue', () => {
  it('inputが存在する', () => {
    const wrapper = shallowMount(HelloWorld);
    const input = wrapper.findAll('[data-test="input');
    expect(input.exists()).toBe(true);
  })

  it('inputの初期値は空', () => {
    const wrapper = shallowMount(HelloWorld);
    const inputValue = wrapper.vm.$data.inputValue;
    expect(inputValue).toBe('');
  })

  it('inputのvalueが変化すればバインディングされたデータも変化する', () => {
    const wrapper = shallowMount(HelloWorld);
    const input = wrapper.findAll('[data-test="input"]');
    input.setValue('Python');
    const inputValue = wrapper.vm.$data.inputValue;
    expect(inputValue).toBe('Python');
  })

  it('inputのvalueが空の場合はエンターしても処理を実行しない', () => {
    const wrapper = shallowMount(HelloWorld);
    const input = wrapper.findAll('[data-test="input"]');
    input.setValue('');
    input.trigger('keyup.enter');
    expect(wrapper.emitted().search).toBeFalsy();
  })

  it('inputのvalueが存在する場合、Enterを押したら親コンポーネントにメソッドを伝達する。その後valueはからになる', () => {
    const wrapper = shallowMount(HelloWorld);
    const input = wrapper.findAll('[data-test="input"]');
    input.setValue('Python');
    input.trigger('keyup.enter');
    expect(wrapper.emitted().search).toBeTruthy();
    expect(wrapper.vm.$data.inputValue).toBe('');
  })
})
