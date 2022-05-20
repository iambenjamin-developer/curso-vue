import { shallowMount } from "@vue/test-utils";
import Indecision from "@/components/Indecision.vue";

describe('Indecision Component', () => {

    let wrapper;
    let clgSpy;

    beforeEach(() => {

        wrapper = shallowMount(Indecision);
        clgSpy = jest.spyOn(console, 'log');
    });



    test('debe hacer match con el snapshot', () => {

        expect(wrapper.html()).toMatchSnapshot();
    })

    test('escribir en el input "No debe disparar nada(console.log)"', async () => {

        console.log(wrapper)
        const getAnswerSpy = jest.spyOn(wrapper.vm, 'getAnswer');
        let input = wrapper.find('input');
        await input.setValue('Hola Papee');

        // expect(clgSpy).toHaveBeenCalledTimes(2);
        expect(clgSpy).toHaveBeenCalled();
        // expect(getAnswerSpy).toHaveBeenCalledTimes(0);
        expect(getAnswerSpy).not.toHaveBeenCalled();

        // console.log(wrapper.vm);
    });

    test('al escribir el simbolo de interrogación "?", debemos disparar el fetch(console.log)"', () => {

    });

    test('pruebas en getAnswer', () => {

    });

    test('pruebas en getAnswer - Fallo en el API', () => {

    });

});