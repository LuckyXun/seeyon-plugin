/*
 * @Author: XunL
 * @Description: 
 */
import vue from 'vue';


export default {
    install(Vue: typeof vue, options: Object) {
        Vue.component('heek', {
            render(h) {
                return h('div', "lllllx")
            },
        })

    }
}



