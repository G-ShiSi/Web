const obj = {
    install(Vue) {
        Vue.filter('mySlice', function (value) {
            return value.slice(0, 4)

        }),
            Vue.directive('fbinds', {
                bind(element, binding) {
                    element.value = binding.value
                },
                inserted(element, binding) {
                    element.focus()
                },
                update(element, binding) {
                    element.value = binding.value
                    element.focus()
                }
            }),
            Vue.mixin({
                data() {
                    return {
                        userName: '辜十四'
                    }
                },
                methods: {
                    show() {
                        alert(this.name);
                    },
                },
                mounted() {
                    console.log('挂载完毕')
                },

            })

    }
}
export default obj