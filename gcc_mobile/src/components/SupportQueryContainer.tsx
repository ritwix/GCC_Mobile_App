import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import {
  API_AUTHENTICATION,
  GCC_BASE_URL,
  LINK_TO_PRIVACY_STATEMENT,
} from '../constants';
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

export interface Query {
  contestantId?: string;
  submittedBy: string;
  email: string;
  description: string;
}

export const submitQuery = (body: Query) =>
  axios.post<string>(`${GCC_BASE_URL}/supportquery`, body, {
    auth: API_AUTHENTICATION,
  });

const SupportQueryContainer: React.FC = () => {
  const [fullName, setFullName] = useState<string>('');
  const [email, setEmail] = useState('');
  const [query, setQuery] = useState('');
  const [privacyChecked, setPrivacyChecked] = useState(false);

  let isValid = fullName != '' && email != '' && query != '' && privacyChecked;

  const { handleSubmit } = useForm({
    defaultValues: { ...initialValues },
    mode: 'onChange',
  });

  const resetData = () => {
    setFullName('');
    setEmail('');
    setQuery('');
  };

  const onSubmit = (data: any) => {
    console.log('Query Submitted: ', data);

    submitQuery({
      submittedBy: fullName,
      email: email,
      description: query,
    })
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
      <h3>Submit a query</h3>
      <FormField label="* Full Name">
        <input
          placeholder="Full Name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
      </FormField>

      <FormField label="* Email">
        <input
          placeholder="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormField>

      <FormField label="* Query">
        <textarea
          placeholder="Query"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </FormField>

      <div className="checkbox-group">
        <input
          type="checkbox"
          name="privacyChecked"
          checked={privacyChecked}
          onChange={() => setPrivacyChecked((prev) => !prev)}
        />
        <label>
          * I confirm that I have read and understood the{' '}
          <a href={LINK_TO_PRIVACY_STATEMENT}>Privacy Statement</a>, and I agree
          to the processing of my personal data for the purpose of participation
          in the Coding Challenge competition.
        </label>
      </div>

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
