import React, {Component} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button' //<Button variant="contained"
import Typography from "@material-ui/core/Typography";
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';


class UserDetail extends Component {
    state = {
        formData: {
            firsName: '',
            lastName: '',
            email: '',
            password: '',
            repeatPass: ''
        },
        submitted: false,
    }
    componentDidMount() {
        // Password match
        ValidatorForm.addValidationRule('isPasswordMatch', (value) => {
            const { formData } = this.state;
            if (value !== formData.password) {
                return false;
            }
            return true;
        });
        // New rule for vaildation
        ValidatorForm.addValidationRule('Passer', (value) => {
            let passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
            if (value.match(passw)) {
                return true;
            }


        })
    }


    handleChange = (event) => {
        const { formData } = this.state;
        formData[event.target.name] = event.target.value;
        if (event.target.name === 'password') {
            this.form.isFormValid(false);
        }
        this.setState({ formData });
    }
    handleSubmit = () => {
        this.setState({submitted: true}, () => {
            setTimeout(() => this.setState({submitted: false}), 5000);
        });
    }



    render() {

        const { formData, submitted } = this.state;
        return (
                <React.Fragment>
                    <AppBar position='static'>
                        <Typography variant='h2'>Sign up, dude</Typography>
                    </AppBar>
                    <ValidatorForm
                        ref={r => (this.form = r)}
                        onSubmit={this.handleSubmit}
                    >
                        <Typography variant='h3'>Enter your info</Typography>
                        <TextValidator
                            label="Name"
                            onChange={this.handleChange}
                            name="firstName"
                            value={formData.firstName}
                            validators={['required']}
                            errorMessages={['this field is required', 'field can not be empty!']}
                        />
                        <br/>
                        <TextValidator
                            label="Surname"
                            onChange={this.handleChange}
                            name="lastName"
                            value={formData.lastName}
                            validators={['required']}
                            errorMessages={['this field is required', 'field can not be empty!']}
                        />
                        <br/>
                        <TextValidator
                            label="Email"
                            onChange={this.handleChange}
                            name="email"
                            value={formData.email}
                            validators={['required', 'isEmail']}
                            errorMessages={['this field is required', 'email is not valid']}
                        />
                        <br />
                        <TextValidator
                            label="Password"
                            onChange={this.handleChange}
                            name="password"
                            type="password"
                            validators={['Passer', 'required']}
                            errorMessages={['Too weak password, sry :(', 'this field is required']}
                            value={formData.password}
                        />
                        <br/>
                        <TextValidator
                            label="Repeat password"
                            onChange={this.handleChange}
                            name="repeatPassword"
                            type="password"
                            validators={['isPasswordMatch',  'required']}
                            errorMessages={['password mismatch', 'this field is required']}
                            value={formData.repeatPassword}
                        />
                        <br/>
                        <br/>
                        <Button
                            color="primary"
                            variant="contained"
                            type="submit"
                            disabled={submitted}
                            onClick={this.continue}
                        >
                            {
                                (submitted && 'Signed up!')
                                || (!submitted && 'Submit')
                            }
                        </Button>
                    </ValidatorForm>
                </React.Fragment>
        );
    }
}

export default UserDetail;