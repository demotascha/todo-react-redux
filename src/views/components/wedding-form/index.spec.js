import { Simulate } from 'react-addons-test-utils';
import { findDOMNode } from 'react-dom';
import { createTestComponent } from 'test/utils';
import WeddingForm from './index';
import { reduxForm } from 'redux-form';


// describe('WeddingForm', () => {
//   let weddingForm;
//
//
//   beforeEach(() => {
//     weddingForm = createTestComponent(reduxForm(WeddingForm), {
//       createTask: sinon.spy()
//     });
//   });
//
//
//   describe('Instantiation:', () => {
//     it('should set #state with an empty string', () => {
//       expect(weddingForm.state.name).toEqual('');
//       expect(weddingForm.state.email).toEqual('');
//     });
//   });
//
//
//   describe('Component methods:', () => {
//     describe('#clearInput', () => {
//       it('should set #state.name with an empty string', () => {
//         weddingForm.state.name = 'foo';
//         weddingForm.state.email = 'foo@bar.com';
//         expect(weddingForm.state.name).toEqual('foo');
//         expect(weddingForm.state.email).toEqual('foo@bar.com');
//
//         weddingForm.clearInput();
//         expect(weddingForm.state.name).toEqual('');
//         expect(weddingForm.state.email).toEqual('');
//       });
//     });
//
//
//     describe('#onChangeName', () => {
//       it('should set #state.name with event.target.value', () => {
//         const event = {target: {value: 'value'}};
//         weddingForm.onChangeName(event);
//         expect(weddingForm.state.name).toEqual(event.target.value);
//       });
//     });
//
//     describe('#onChangeEmail', () => {
//       it('should set #state.email with event.target.value', () => {
//         const event = {target: {value: 'value'}};
//         weddingForm.onChangeEmail(event);
//         expect(weddingForm.state.email).toEqual(event.target.value);
//       });
//     });
//
//
//     describe('#onKeyUp', () => {
//       describe('with escape key', () => {
//         it('should set #state with an empty string', () => {
//           weddingForm.state.name = 'foo';
//           weddingForm.onKeyUp({keyCode: 27});
//           expect(weddingForm.state.name).toEqual('');
//         });
//       });
//     });
//
//
//     describe('#onSubmit', () => {
//       it('should prevent the default action of the event', () => {
//         const event = {preventDefault: sinon.spy()};
//         weddingForm.onSubmit(event);
//         expect(event.preventDefault.callCount).toEqual(1);
//       });
//
//       it('should call taskActions#createTask with #state', () => {
//         const event = {preventDefault: sinon.spy()};
//
//         weddingForm.state.name = 'weihao';
//         weddingForm.state.email = 'gn30272@gmail.com';
//         weddingForm.onSubmit(event);
//
//         expect(weddingForm.props.createTask.callCount).toEqual(2);
//         expect(weddingForm.props.createTask.calledWith('weihao')).toEqual(true);
//         expect(weddingForm.props.createTask.calledWith('gn30272@gmail.com')).toEqual(true);
//       });
//
//       it('should set #state.name with an empty string', () => {
//         const event = {preventDefault: sinon.spy()};
//
//         weddingForm.state.name = 'foo';
//         weddingForm.state.email = 'gn30272@gmail.com';
//         weddingForm.onSubmit(event);
//
//         expect(weddingForm.state.name).toEqual('');
//         expect(weddingForm.state.email).toEqual('');
//       });
//
//       it('should not save if name evaluates to an empty string', () => {
//         const event = {preventDefault: sinon.spy()};
//
//         weddingForm.state.name = '';
//         weddingForm.state.email = '';
//         weddingForm.onSubmit(event);
//
//         expect(weddingForm.props.createTask.callCount).toBe(0);
//
//         weddingForm.state.name = '    ';
//         weddingForm.state.email = '';
//         weddingForm.onSubmit(event);
//
//         expect(weddingForm.props.createTask.callCount).toBe(0);
//       });
//     });
//   });
//
//
//   describe('DOM:', () => {
//     describe('`keyup` event triggered on text field with escape key', () => {
//       it('should set #state.name with an empty string', () => {
//         weddingForm.setState({name: 'foo', 'email': 'gn30272@gmail.com'});
//         Simulate.keyUp(weddingForm.nameInput, {keyCode: 27});
//         Simulate.keyUp(weddingForm.emailInput, {keyCode: 27});
//         expect(weddingForm.state.name).toEqual('');
//         expect(weddingForm.state.email).toEqual('');
//       });
//
//       it('should set text field value with an empty string', () => {
//         weddingForm.setState({name: 'foo', 'email': 'gn30272@gmail.com'});
//         Simulate.keyUp(weddingForm.nameInput, {keyCode: 27});
//         Simulate.keyUp(weddingForm.emailInput, {keyCode: 27});
//         expect(weddingForm.nameInput.value).toEqual('');
//         expect(weddingForm.emailInput.value).toEqual('');
//       });
//     });
//
//
//     describe('`change` event triggered on text field', () => {
//       it('should set #state.name with the value from the text field', () => {
//         weddingForm.nameInput.value = 'foo';
//         expect(weddingForm.state.name).toEqual('');
//         Simulate.change(weddingForm.nameInput);
//         expect(weddingForm.state.name).toEqual('foo');
//       });
//     });
//
//
//     describe('`submit` event triggered on form', () => {
//       it('should prevent the default action of the event', () => {
//         const event = {preventDefault: sinon.spy()};
//         Simulate.submit(findDOMNode(weddingForm), event);
//         expect(event.preventDefault.callCount).toEqual(1);
//       });
//
//       it('should set text field value with an empty string', () => {
//         const event = {preventDefault: sinon.spy()};
//         weddingForm.setState({name: 'foo'});
//         Simulate.submit(findDOMNode(weddingForm), event);
//         expect(weddingForm.nameInput.value).toEqual('');
//       });
//     });
//   });
// });
