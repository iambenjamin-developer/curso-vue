import { shallowMount } from "@vue/test-utils";
import Indecision from "@/components/Indecision.vue";

describe('Indecision Component', () => {

    let wrapper;

    beforeEach(() => {

        wrapper = shallowMount(Indecision);
    });



    test('debe hacer match con el snapshot', () => {

        expect(wrapper.html()).toMatchSnapshot();
    })

    test('escribir en el input "No debe disparar nada(console.log)"', () => {

    });

    test('al escribir el simbolo de interrogación "?", debemos disparar el fetch(console.log)"', () => {

    });

    test('pruebas en getAnswer', () => {

    });

    test('pruebas en getAnswer - Fallo en el API', () => {

    });

});