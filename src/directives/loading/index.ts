import type { Directive, DirectiveBinding } from 'vue'

export const loading: Directive = {
  mounted(el: HTMLElement, binding: DirectiveBinding) {
    let isLoading = binding.value
    if (isLoading === undefined) isLoading = true
    isLoading ? el.classList.add('loading') : el.classList.remove('loading')
  },
  updated(el: HTMLElement, binding: DirectiveBinding) {
    let isLoading = binding.value
    if (isLoading === undefined) isLoading = true
    isLoading ? el.classList.add('loading') : el.classList.remove('loading')
  },
}
