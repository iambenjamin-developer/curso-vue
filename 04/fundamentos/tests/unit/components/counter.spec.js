import { shallowMount } from '@vue/test-utils'
import Counter from '@/components/Counter'

describe('Counter Component', () => {

    // test('debe hacer match con el snapshot', () => {

    //     const wrapper = shallowMount(Counter);

    //     expect(wrapper.html()).toMatchSnapshot();
    // })

    // test('h2 debe de tener el valor por defecto "Titulo por defecto!"', () => {

    //     const wrapper = shallowMount(Counter);

    //     expect(wrapper.find('h2').exists()).toBeTruthy();

    //     // expect(wrapper.find('h20').exists()).toBe(true);

    //     const h2Value = wrapper.find('h2').text();

    //     expect(h2Value).toBe("Titulo por defecto!")

    // })

    test('El valor por defecto debe de ser 100 en el <p> (con findAll)', () => {

        //Wrapper
        const wrapper = shallowMount(Counter);

        //pTags
        const pTags = wrapper.findAll('p');

        // console.log(pTags[0].text())
        //expect segundo p = 100
        expect(pTags[1].text()).toBe('100');

    })

    test('El valor por defecto debe de ser 100 en el <p> (con data attribute)', () => {

        const wrapper = shallowMount(Counter);

        const value = wrapper.find('[data-testid="counter"]').text();

        expect(value).toBe('100');

    })

    test('Debe de incrementar y decrementar en 1 el valor del contador', async () => {

        //incremento
        const wrapper = shallowMount(Counter);

        const buttons = wrapper.findAll('button');
        const increaseBtn = buttons[0];
        const decreaseButton = buttons[1];

        await increaseBtn.trigger('click');
        await increaseBtn.trigger('click');
        await increaseBtn.trigger('click');

        await decreaseButton.trigger('click');
        await decreaseButton.trigger('click');

        let value = wrapper.find('[data-testid="counter"]').text();

        expect(value).toBe('101');
    })
})