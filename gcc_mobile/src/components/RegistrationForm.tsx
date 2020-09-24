import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { GCC_BASE_URL, Region, regionNameMap } from '../constants';
import './RegistrationForm.css';

const titleOptions = [
  { text: 'Mr', value: 'mr' },
  { text: 'Mrs', value: 'mrs' },
  { text: 'Miss', value: 'miss' },
  { text: 'Ms', value: 'ms' },
  { text: 'Mx', value: 'mx' },
  { text: 'Dr', value: 'dr' },
];

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

const searchUniversity = (region: string) => {
  console.log(`calling ${GCC_BASE_URL}/universitylist/${region}`);
  return axios.get<Array<string>>(`${GCC_BASE_URL}/universitylist/${region}`);
};

export const RegistrationForm: React.FC<Props> = (props) => {
  const { githubUsername, onSubmit } = props;

  const [title, setTitle] = useState('mr');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [region, setRegion] = useState(Region.SEA);

  const [university, setUniversity] = useState('');
  const [universityOptions, setUniversityOptions] = useState<Array<string>>([]);

  const [course, setCourse] = useState('');
  const [graduationYear, setGraduationYear] = useState<number | null>(null);
  const [privacyChecked, setPrivacyChecked] = useState(false);
  const [marketingChecked, setMarketingChecked] = useState(false);

  useEffect(() => {
    searchUniversity(regionNameMap[Region.SEA])
      .then((response) => response.data.filter((uni) => uni !== 'Other'))
      .then(setUniversityOptions);
  }, []);

  const canSubmit =
    githubUsername != '' &&
    privacyChecked &&
    marketingChecked &&
    email != '' &&
    university != '' &&
    course != '' &&
    graduationYear != null &&
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
      graduationYear: graduationYear || -1,
      privacyChecked,
      marketingChecked,
    });
  };

  return (
    <div className="form-container">
      <h2>Welcome {githubUsername}!</h2>
      <p>Sign up to view questions!</p>

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
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </FormField>

        <FormField label="Last Name">
          <input
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </FormField>

        <FormField label="Email">
          <input
            type="email"
            value={email}
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormField>

        <FormField label="Region">
          <select
            value={region}
            onChange={(e) => {
              const region = e.target.value as Region;
              setRegion(region);
              searchUniversity(regionNameMap[region])
                .then((response) =>
                  response.data.filter((uni) => uni !== 'Other')
                )
                .then(setUniversityOptions);
            }}
          >
            {regionOptions.map(({ text, value }) => (
              <option value={value} key={value}>
                {text}
              </option>
            ))}
          </select>
        </FormField>

        <FormField label="University">
          <select
            value={university}
            onChange={(e) => setUniversity(e.target.value)}
          >
            {universityOptions.map((universityName) => (
              <option value={universityName} key={universityName}>
                {universityName}
              </option>
            ))}
          </select>
        </FormField>

        <FormField label="Course Title">
          <input
            placeholder="Course Title"
            value={course}
            onChange={(e) => setCourse(e.target.value)}
          />
        </FormField>

        <FormField label="Graduation year">
          <input
            placeholder="Graduation year"
            value={graduationYear || ''}
            onChange={(e) => setGraduationYear(parseInt(e.target.value) || 0)}
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
        style={{ backgroundColor: canSubmit ? 'black' : '#dadada' }}
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

export const FormField: React.FC<FormFieldProps> = (props) => {
  const { label, children } = props;
  return (
    <div className="form-field">
      <div>{label}</div>
      {children}
    </div>
  );
};
