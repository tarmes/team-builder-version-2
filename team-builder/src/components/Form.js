import React from 'react'

export default function Form(props) {

    const { values, update, submit } = props
 
    const onChange = evt => {
        const { name, value } = evt.target
        update(name, value)
      // update(evt.target.name, evt.target.value)
    }

    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }

    return (
        <form className='form container'>
            <div className='form-group submit'>
                <h2>Add a Teammate</h2>
                <button onClick={onSubmit} disabled={!values.username || !values.email || !values.role ? true : false}>Submit</button>
            </div>

            <div className='form-group inputs'>
                <h4>General Information</h4>
                <label>Username:&nbsp;
                    <input
                      onChange={onChange}
                      value={values.username}
                      name='username'
                      maxLength='20'
                      type='text'
                    />
                </label>
                <label>E-mail:&nbsp;
                    <input
                      onChange={onChange}
                      value={values.email}
                      name='email'
                      maxLength='20'
                      type='email'
                    />
                </label>
                <label>Role:&nbsp;
                    <select onChange={onChange} value={values.role} name="role">
                      <option value="">-- Select a Role</option>
                      <option value="Student">Student</option>
                      <option value="Team Lead">Team Lead</option>
                      <option value="Alumni">Alumni</option>
                    </select>
                </label>
            </div>
        </form>
    )
}