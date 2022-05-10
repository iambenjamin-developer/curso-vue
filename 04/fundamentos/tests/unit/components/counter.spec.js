import { shallowMount } from '@vue/test-utils'
import Counter from '@/components/Counter'

describe('Counter Component', () => {

    // test('debe hacer match con el snapshot', () => {

    //     const wrapper = shallowMount(Counter);

    //     expect(wrapper.html()).toMatchSnapshot();
    // })

    test('h2 debe de tener el valor por defecto "Titulo por defecto!"', () => {

        const wrapper = shallowMount(Counter);


        expect(wrapper.find('h2').exists()).toBeTruthy();

        // expect(wrapper.find('h20').exists()).toBe(true);

        const h2Value = wrapper.find('h2').text();

        expect(h2Value).toBe("Titulo por defecto!")

    })
})