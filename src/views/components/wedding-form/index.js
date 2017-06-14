import _ from 'lodash';
import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';

const FIELDS = {
  name: {
    type: 'input',
    label: '請輸入您的大名',
    example: '如：黃威豪'
  },
  email: {
    type: 'input',
    label: '請輸入您的電子郵件信箱',
    example: '如：gn30272@gmail.com'
  }
};

class WeddingForm extends Component {
  static propTypes = {
    createTask: PropTypes.func.isRequired
  };

  constructor(props, context) {
    super(props, context);

    this.state = { name: '', email: '' };

    this.onChangeName = ::this.onChangeName;
    this.onChangeEmail = ::this.onChangeEmail;
    this.onKeyUp = ::this.onKeyUp;
    this.onSubmit = ::this.onSubmit;
  }

  clearInput() {
    this.setState({name: ''});
    this.setState({email: ''});
  }

  onChangeName(event) {
    this.setState({name: event.target.value});
  }

  onChangeEmail(event) {
    this.setState({email: event.target.value});
  }

  onKeyUp(event) {
    if (event.keyCode === 27) {
      this.clearInput();
    }
  }

  onSubmit(props) {
    console.log(this.state.name);
    console.log(this.state.email);
    alert('Wedding Submitted');
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <div className="g-row">
        <div className="g-col">
          <h1 className="sign-in__heading">Wedding Page</h1>
          <form className="wedding-form" onSubmit={handleSubmit(props => this.onSubmit(props))} >
            <div>
              <label>{FIELDS.name.label}</label>
            <input
                autoComplete="off"
                autoFocus
                className="wedding-form__input"
                maxLength="64"
                onChange={this.onChangeName}
                onKeyUp={this.onKeyUp}
                placeholder={FIELDS.name.example}
                value={this.state.name}
              />
            </div>
            <div>
              <label>{FIELDS.email.label}</label>
            <input
                autoComplete="off"
                autoFocus
                className="wedding-form__input"
                maxLength="64"
                onChange={this.onChangeEmail}
                onKeyUp={this.onKeyUp}
                placeholder={FIELDS.email.example}
                value={this.state.email}
              />
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    );
  }

}

function validate(values) {
  const errors = {};
  _.each(FIELDS, (type, field) => {
    if (!values[field]) {
      errors[field] = field.label;
    }
  });
  return errors;
}

// export default connect(null)(Wedding);
export default reduxForm({
  form: 'weddingForm',
  fields: _.keys(FIELDS),
  validate
})(WeddingForm);
