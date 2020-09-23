import {
  IonButton,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonTextarea,
} from '@ionic/react';
import axios from 'axios';
import { url } from 'inspector';
import React from 'react';
import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { FormField } from './RegistrationForm';
import './SupportQueryContainer.css';

let initialValues = {
  fullName: '',
  email: '',
  query: '',
};

const GetErrorContent =
  'Please send an email to our support team at support.codingchallenge2020@credit-suisse.com';

const GetSuccessContent =
  'Your ticket has been submitted. Please check your inbox for a confirmation e-mail and ticket ID. Someone from the support team will be in contact with you soon';

const SupportQueryContainer: React.FC = () => {
  const [fullName, setFullName] = useState<string>('');
  const [email, setEmail] = useState('');
  const [query, setQuery] = useState('');

  let isValid = fullName != '' && email != '' && query != '';

  const { control, handleSubmit, formState, reset, errors, register } = useForm(
    {
      defaultValues: { ...initialValues },
      mode: 'onChange',
    }
  );

  const resetData = () => {
    setFullName('');
    setEmail('');
    setQuery('');
  };

  const onSubmit = (data: any) => {
    console.log('Query Submitted: ', data);
    // alert(JSON.stringify(data, null, 2));
    axios
      .post(
        'https://gcc-backend-dev-temp.herokuapp.com/supportquery',
        (data = {
          submittedBy: fullName,
          email: email,
          description: query,
        })
      )
      .then(({ data }) => {
        console.log(JSON.stringify(data));
        alert(GetSuccessContent);
      })
      .catch((e) => {
        console.log(JSON.stringify(e));
        alert(GetErrorContent);
      });
    resetData();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h3>Submit a Query</h3>
      <FormField label="Full Name">
        <input
          placeholder="Full Name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
      </FormField>

      <FormField label="Email">
        <input
          placeholder="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormField>

      <FormField label="Query">
        <textarea
          placeholder="Query"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </FormField>

      <button
        className="cs-button"
        disabled={!isValid}
        style={{ backgroundColor: isValid ? 'black' : '#dadada' }}
      >
        Submit
      </button>
    </form>
  );
};

export default SupportQueryContainer;
