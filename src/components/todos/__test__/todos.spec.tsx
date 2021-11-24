
import TodosList from '../todos';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import store from '../../../store';

const setup = () => {
    const wrapper = mount(<Provider store={store}><TodosList /></Provider>);
    
    return {
        wrapper
    }
}

describe('should render elements', () => {
    const { wrapper } = setup();

    test('should contain div.todos wrapper', () => {
        expect(wrapper.exists('.todos')).toEqual(true);
        
    })

    test('should contain rendered todos and done rendered todos', () => {
        expect(wrapper.exists('.renderedTodos')).toEqual(true);
        expect(wrapper.exists('.renderedDoneTodos')).toEqual(true);
    })
})

describe('todos fuctionality', () => {
    const { wrapper } = setup();
    console.log(wrapper.debug())

    test('should render wrapper for todo item when button is clicked', () => {
        const addTodoButton = wrapper.find('.todos__addButton');
        expect(wrapper.exists('.todoItem')).toEqual(false);
        addTodoButton.simulate('click');
        expect(wrapper.exists('.todoItem')).toEqual(true);
    })

    test('should delete all todo items when clear button is clicked', () => {
        const deleteAllTodosButton = wrapper.find('.todos__deleteAllButton');
        expect(wrapper.find('.todoItem').length).toBe(1)
        deleteAllTodosButton.simulate('click');
        expect(wrapper.find('.todoItem').length).toBe(0);
    })

    test('should render a todo item with the same text as it was written in input', () => {
        const addTodoButton = wrapper.find('.todos__addButton');
        const addTodoInput = wrapper.find('.todos__input');
        addTodoInput.simulate('change', { target: { value: 'should be in todo item' }});
        addTodoButton.simulate('click');
        const todoItemP = wrapper.find('.todoItem__text');
        expect(todoItemP.text()).toEqual('should be in todo item')
    })

    test('todo item should be tarnsfered to done todos when checkbox is clciked', () => {
        expect(wrapper.exists('.todoItem__text')).toEqual(true);
        const checkbox = wrapper.find('.todoItem__checkbox');
        checkbox.simulate('click');
        expect(wrapper.exists('.todoItem')).toEqual(false);
        expect(wrapper.exists('.doneTodoItem')).toEqual(true);
    })
})

