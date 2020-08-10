import Immutable from 'immutable'

const CreateUserDTO = Immutable.Record({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    repeatPass: ''
})

export default CreateUserDTO