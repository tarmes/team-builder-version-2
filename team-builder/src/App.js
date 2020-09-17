import React, { useState, useEffect } from 'react';
import './App.css';
import Form from './components/Form';
import Teammate from './components/Teammate';
import { v4 as uuid } from 'uuid';

const initialTeamList = [
  {
    id: uuid(),
    username: 'Trevor',
    email: 'trevor@gmail.com',
    role: 'Student',
  },
]

const initialFormValues = {
  username: '',
  email: '',
  role: '',
}

const fakeAxiosGet = () => {
  return Promise.resolve({ status: 200, succes: true, data: initialTeamList})
}

const fakeAxiosPost = (url, { username, email, role}) => {
  const newTeammate = { id: uuid(), username, email, role }
  return Promise.resolve({ status: 200, success: true, data: newTeammate})
}

function App() {

  const [team, setTeam] = useState([]);

  const [formValues, setFormValues] = useState(initialFormValues);

  const updateForm = (inputName, inputValue) => {
    setFormValues({ ...formValues , [inputName] : inputValue})
  };

  const submitForm = () => {
    const teammate = {
      username: formValues.username.trim(),
      email: formValues.email.trim(),
      role: formValues.role,
    }

    if (!teammate.username || !teammate.email ) return;
    
    fakeAxiosPost('fake.com', teammate)
      .then(res => {
        setTeam([res.data, ...team])
      })
      .finally(() => {
        setFormValues(initialFormValues);
      })
 
  }

  useEffect(() => {
    fakeAxiosGet('fakeapi.com').then(res => setTeam(res.data))
  }, []);

  return (
    <div className="App">
      <header><h1>My Team</h1></header>
      {
        team.map(teammate => {
          return (
            <Teammate key={teammate.id} details={teammate} />
          )
        })
      }
      <Form
      values={formValues}
      update={updateForm}
      submit={submitForm}      
      />  

    </div>
  );
}

export default App;
