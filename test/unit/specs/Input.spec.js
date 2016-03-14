import Vue from 'vue'
import FormBuild from 'src/components/Form-Module/FormBuild'

describe('FormBuild', () => {
  it('should produce an input form', () => {
    const vm = new Vue({
      template: '<div><form-build></form-build></div>'
    }).$mount()
    expect(vm.$el.querySelector('.form-group input').val()).toBe('email')
  })
})

