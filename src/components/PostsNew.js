import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
class PostsNew extends Component {
    renderField(field) {
        return (
            <div className="form-group has-danger">
                <label>{field.lable}</label>
                <input
                    className="form-control"
                    type="text"
                    {...field.input}
                />
                <div className = "text-help">
                {field.meta.touched ? field.meta.error: ''}
                </div>
            </div>
        );
    }

    onSubmit(values) {
        console.log(values);
    }
    

    render() {
        const { handleSubmit }  = this.props;

        return (
            <form onSubmit = {handleSubmit(this.onSubmit.bind(this))} >
                <Field
                    lable="Title For Post"
                    name="title"
                    component={this.renderField}
                />
                <Field
                    lable="Categories"
                    name="categories"
                    component={this.renderField}
                />
                <Field
                    lable="Content"
                    name="content"
                    component={this.renderField}
                />
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        );
    }
} 

function validate(values) {
    const errors = {};

    if (!values.title) {
        errors.title = "Enter a title!";
    }

    if (!values.categories) {
        errors.categories = "Enter some categories!";
    }

    if (!values.content) {
        errors.content = "Enter some content!";
    }

    return errors;
}

export default reduxForm({
    validate,
    form: 'PostsNewForm555'
})(PostsNew);