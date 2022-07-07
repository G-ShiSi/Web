const mixin = {
    methods: {
        show() {
            alert(this.name);
        },
    },
    mounted() {
        console.log('挂载完毕')
    },
}
export default mixin