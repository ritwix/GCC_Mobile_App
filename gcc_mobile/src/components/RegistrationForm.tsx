import axios from 'axios';
import React, { useState } from 'react';
import {
  GCC_BASE_URL,
  LINK_TO_PRIVACY_STATEMENT,
  LINK_TO_TERMS_AND_CONDITIONS,
  Region,
  regionNameMap,
} from '../constants';
import { isValidEmail } from '../helpers';
import './RegistrationForm.css';

const titleOptions = [
  { text: 'Mr', value: 'mr' },
  { text: 'Mrs', value: 'mrs' },
  { text: 'Miss', value: 'miss' },
  { text: 'Ms', value: 'ms' },
  { text: 'Mx', value: 'mx' },
  { text: 'Dr', value: 'dr' },
];

const years = [
  {text: '2020', value: '2020'},
  {text: '2021', value: '2021'},
  {text: '2022', value: '2022'},
  {text: '2023', value: '2023'},
  {text: '2024', value: '2024'},
  {text: '2025', value: '2025'},
]

const regionOptions = [
  {
    text: 'Region',
    value: undefined,
  },
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

export type RegistrationFormFields = {
  title: string;
  firstName: string;
  lastName: string;
  email: string;
  region?: Region;
  university: string;
  otherUniversity: string;
  course: string;
  graduationYear: number;
  privacyChecked: boolean;
  marketingChecked: boolean;
  graduationYearChecked: boolean;
  githubUsername: string;
  referralCode: string;
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

  const [title, setTitle] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [region, setRegion] = useState<Region | undefined>();

  const [university, setUniversity] = useState('');
  const [otherUniversity, setOtherUniversity] = useState('');
  const [universityOptions, setUniversityOptions] = useState<Array<string>>([]);

  const [course, setCourse] = useState('');
  const [graduationYear, setGraduationYear] = useState<number | null>(null);
  const [privacyChecked, setPrivacyChecked] = useState(false);
  const [marketingChecked, setMarketingChecked] = useState(false);
  const [graduationYearChecked, setGraduationYearChecked] = useState(false);
  const [referralCode, setReferralCode] = useState('');

  let canSubmit =
    githubUsername != '' &&
    firstName != '' &&
    lastName != '' &&
    isValidEmail(email) &&
    privacyChecked &&
    graduationYearChecked &&
    region &&
    university != '' &&
    course != '' &&
    graduationYear != null;

  if (university === 'Other') {
    canSubmit = canSubmit && otherUniversity != '';
  }

  const handleSubmit = () => {
    onSubmit({
      githubUsername,
      title,
      firstName,
      lastName,
      email,
      region,
      university,
      otherUniversity,
      course,
      graduationYear: graduationYear || -1,
      privacyChecked,
      marketingChecked,
      graduationYearChecked,
      referralCode
    });
  };

  return (
    <div className="form-container">
      <h2>Welcome {githubUsername}!</h2>
      <p>Sign up to view questions!</p>

      <div className="form-fields">
        <FormField label="Title">
          <select
            className="filter-select"
            style={{ width: '100%' }}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          >
            {titleOptions.map(({ text, value }) => (
              <option value={value} key={value}>
                {text}
              </option>
            ))}
          </select>
        </FormField>

        <FormField label="* First name">
          <input
            placeholder="First name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </FormField>

        <FormField label="* Last name">
          <input
            placeholder="Last name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </FormField>

        <FormField label="* Email">
          <input
            type="email"
            value={email}
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormField>

        <FormField label="* Region">
          <select
            className="filter-select"
            style={{ width: '100%' }}
            value={region}
            onChange={(e) => {
              const region = e.target.value as Region;
              setRegion(region);
              searchUniversity(regionNameMap[region])
                .then((response) =>
                  response.data.filter((uni) => uni !== 'Other')
                )
                .then((result) => {
                  setUniversityOptions([...result, 'Other']);
                  setUniversity(universityOptions[0]);
                });
            }}
          >
            {regionOptions.map(({ text, value }) => (
              <option value={value} key={text}>
                {text}
              </option>
            ))}
          </select>
        </FormField>

        <FormField label="* University">
          <select
            className="filter-select"
            style={{ width: '100%' }}
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

        {university === 'Other' && (
          <FormField label="* Add New University">
            <input
              value={otherUniversity}
              placeholder="Enter the name of your University"
              onChange={(e) => setOtherUniversity(e.target.value)}
            />
          </FormField>
        )}

        <FormField label="* Course title/major">
          <input
            placeholder="Course title/major"
            value={course}
            onChange={(e) => setCourse(e.target.value)}
          />
        </FormField>

        <FormField label="* Graduation year">
          <select
            className="filter-select"
            style={{ width: '100%' }}
            value={graduationYear || ''}
            onChange={(e) => setGraduationYear(parseInt(e.target.value) || 0)}
          >
            {years.map(({ text, value }) => (
              <option value={value} key={value}>
                {text}
              </option>
            ))}
          </select>
        </FormField>

        <FormField label=" Referral Code">
          <input
            placeholder="Referral Code"
            value={referralCode || ''}
            onChange={(e) => setReferralCode(e.target.value)}
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
            <a href={LINK_TO_PRIVACY_STATEMENT}>Privacy Statement</a> and the <a href={LINK_TO_TERMS_AND_CONDITIONS}>Terms and Conditions</a>, and I
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
            Marketing Purpose as set out in the{' '}
            <a href={LINK_TO_PRIVACY_STATEMENT}> Privacy Statement</a>.
          </label>
        </div>
        
        <div className="checkbox-group">
          <input
            type="checkbox"
            name="graduationYearChecked"
            checked={graduationYearChecked}
            onChange={() => setGraduationYearChecked((prev) => !prev)}
          />
          <label>
            * I confirm that I am current university student as defined by the{' '}
            <a href={LINK_TO_TERMS_AND_CONDITIONS}>Terms and Conditions.</a>
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
