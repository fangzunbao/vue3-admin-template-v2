import { onMounted, onUnmounted, ref } from 'vue'
export default function (element: string) {
  const showMenu = ref(false)
  const x = ref(0)
  const y = ref(0)

  // 注册一个事件函数用来关闭菜单
  function closeMenu() {
    showMenu.value = false
  }

  // 事件处理函数
  const handleContextMenu = (e: MouseEvent) => {
    e.preventDefault() // 阻止浏览器的默认行为
    e.stopPropagation() // 阻止冒泡
    showMenu.value = true
    x.value = e.clientX
    y.value = e.clientY
  }

  onMounted(() => {
    const div = document.getElementById(element) as HTMLDivElement

    // 将事件处理函数传递传入事件中
    div.addEventListener('contextmenu', handleContextMenu)
    // 触发 window 点击事件的时候执行函数
    window.addEventListener('click', closeMenu, true)
    // 处理 window 的 contextmenu 事件，用来关闭之前打开的菜单
    window.addEventListener('contextmenu', closeMenu, true)
  })
  onUnmounted(() => {
    const div = document.getElementById(element) as HTMLDivElement
    div.removeEventListener('contextmenu', handleContextMenu)
    window.removeEventListener('click', closeMenu, true)
    window.removeEventListener('contextmenu', closeMenu, true)
  })
  return {
    showMenu,
    x,
    y,
  }
}
