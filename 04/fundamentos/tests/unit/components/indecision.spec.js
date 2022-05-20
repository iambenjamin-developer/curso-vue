import { shallowMount } from "@vue/test-utils";
import Indecision from "@/components/Indecision.vue";

describe('Indecision Component', () => {

    let wrapper;
    let clgSpy;

    global.fetch = jest.fn(() => Promise.resolve({
        json: () => Promise.resolve(
            {
                answer: 'yes',
                forced: false,
                image: 'https://yesno.wtf/assets/yes/8-2f93962e2ab24427df8589131da01a4d.gif'
            }
        )
    }));

    beforeEach(() => {

        wrapper = shallowMount(Indecision);
        clgSpy = jest.spyOn(console, 'log');

        jest.clearAllMocks();
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

    test('al escribir el simbolo de interrogación "?", debemos disparar el getAnswer"', async () => {

        const getAnswerSpy = jest.spyOn(wrapper.vm, 'getAnswer');

        let input = wrapper.find('input');
        await input.setValue('Lloverá el fin de semana?');

        expect(clgSpy).toHaveBeenCalledTimes(1);
        expect(getAnswerSpy).toHaveBeenCalledTimes(1);
    });


    test('pruebas en getAnswer', () => {

    });

    test('pruebas en getAnswer - Fallo en el API', () => {

    });

});