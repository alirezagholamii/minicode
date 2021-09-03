import { shallowMount } from "@vue/test-utils";
import Home from '@/views/Home.vue';
import SomeItem from '@/components/SomeItem.vue'
describe('Home.vue', () => {
    it('render list', () => {
        const items = ['7','8','9']
        const component =  shallowMount(Home,{
            data(){
                return {
                    items
                }
            }
        });
        const elements =  component.findAllComponents(SomeItem)
        expect(elements).toHaveLength(items.length)
    })
})