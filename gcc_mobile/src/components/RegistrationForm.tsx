import React, { useState } from 'react';
import './RegistrationForm.css';

const titleOptions = [
  { text: 'Mr', value: 'mr' },
  { text: 'Mrs', value: 'mrs' },
  { text: 'Miss', value: 'miss' },
  { text: 'Ms', value: 'ms' },
  { text: 'Mx', value: 'mx' },
  { text: 'Dr', value: 'dr' },
];

export enum Region {
  UK = 'uk',
  AMC = 'ac',
  INDIA = 'in',
  EUROPE = 'eu',
  SEA = 'se',
  ROW = 'rw',
  GLOBAL = 'gl',
  DEFAULT = 'na',
  SWITZERLAND = 'ch',
}

const regionOptions = [
  {
    text: 'South East Asia (Singapore, Japan and Hong Kong)',
    value: Region.SEA,
  },
  { text: 'India', value: Region.INDIA },
  { text: 'Europe', value: Region.EUROPE },
  { text: 'Switzerland', value: Region.SWITZERLAND },
  { text: 'United Kingdom and Ireland', value: Region.UK },
  { text: 'USA & Canada', value: Region.AMC },
  { text: 'Rest of the World', value: Region.ROW },
];

const LINK_TO_PRIVACY_STATEMENT =
  'https://codingchallenge.herokuapp.com/static/media/privacystatement.09d6279c.pdf';

export type RegistrationFormFields = {
  title: string;
  firstName: string;
  lastName: string;
  email: string;
  region: Region;
  university: string;
  course: string;
  graduationYear: number;
  privacyChecked: boolean;
  marketingChecked: boolean;
};

type Props = {
  githubUsername: string;
  onSubmit: (fields: RegistrationFormFields) => void;
};

export const RegistrationForm: React.FC<Props> = (props) => {
  const { githubUsername, onSubmit } = props;

  const [title, setTitle] = useState('mr');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [region, setRegion] = useState(Region.SEA);
  const [university, setUniversity] = useState('');
  const [course, setCourse] = useState('');
  const [graduationYear, setGraduationYear] = useState(2020);
  const [privacyChecked, setPrivacyChecked] = useState(false);
  const [marketingChecked, setMarketingChecked] = useState(false);

  const canSubmit =
    githubUsername != '' &&
    privacyChecked &&
    marketingChecked &&
    email != '' &&
    university != '' &&
    course != '' &&
    graduationYear != 0 &&
    firstName != '' &&
    lastName != '';

  const handleSubmit = () => {
    onSubmit({
      title,
      firstName,
      lastName,
      email,
      region,
      university,
      course,
      graduationYear,
      privacyChecked,
      marketingChecked,
    });
  };

  return (
    <div className="form-container">
      <h2>Welcome {githubUsername}!</h2>
      <p>Sign up to start answering questions!</p>

      <div className="form-fields">
        <FormField label="Title">
          <select value={title} onChange={(e) => setTitle(e.target.value)}>
            {titleOptions.map(({ text, value }) => (
              <option value={value} key={value}>
                {text}
              </option>
            ))}
          </select>
        </FormField>

        <FormField label="First Name">
          <input
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </FormField>

        <FormField label="Last Name">
          <input
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </FormField>

        <FormField label="Email">
          <input value={email} onChange={(e) => setEmail(e.target.value)} />
        </FormField>

        <FormField label="Region">
          <select
            value={region}
            onChange={(e) => setRegion(e.target.value as Region)}
          >
            {regionOptions.map(({ text, value }) => (
              <option value={value} key={value}>
                {text}
              </option>
            ))}
          </select>
        </FormField>

        {/* TODO: implement university search */}
        <FormField label="University">
          <input
            value={university}
            onChange={(e) => setUniversity(e.target.value)}
          />
        </FormField>
        <FormField label="Course Title">
          <input value={course} onChange={(e) => setCourse(e.target.value)} />
        </FormField>

        <FormField label="Graduation Year">
          <input
            value={graduationYear}
            onChange={(e) => setGraduationYear(parseInt(e.target.value))}
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
            I confirm that I have read and understood the{' '}
            <a href={LINK_TO_PRIVACY_STATEMENT}>Privacy Statement</a>, and I
            agree to the processing of my personal data for the purpose of
            participation in the Coding Challenge competition.
          </label>
        </div>

        <div className="checkbox-group">
          <input
            type="checkbox"
            name="marketingChecked"
            checked={marketingChecked}
            onChange={() => setMarketingChecked((prev) => !prev)}
          />
          <label>
            I agree to the processing on my personal data for the direct
            Marketing Purpose as set out in the
            <a href={LINK_TO_PRIVACY_STATEMENT}> Privacy Statement</a>.
          </label>
        </div>
      </div>
      <button
        className="cs-button"
        disabled={!canSubmit}
        onClick={handleSubmit}
      >
        Register
      </button>
    </div>
  );
};

type FormFieldProps = {
  label: string;
  children: React.ReactNode;
};

const FormField: React.FC<FormFieldProps> = (props) => {
  const { label, children } = props;
  return (
    <div className="form-field">
      <div>{label}</div>
      {children}
    </div>
  );
};
