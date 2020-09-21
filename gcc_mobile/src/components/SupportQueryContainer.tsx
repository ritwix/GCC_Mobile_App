import {
  IonButton,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonTextarea,
} from "@ionic/react";
import axios from "axios";
import { url } from "inspector";
import React from "react";
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import "./SupportQueryContainer.css";

let initialValues = {
  fullName: "",
  email: "",
  query: "",
};

const GetErrorContent =
  "Please send an email to our support team at support.codingchallenge2020@credit-suisse.com";

const GetSuccessContent =
  "Your ticket has been submitted. Please check your inbox for a confirmation e-mail and ticket ID. Someone from the support team will be in contact with you soon";

const SupportQueryContainer: React.FC = () => {
  const [fullName, setFullName] = useState<string>("");
  const [email, setEmail] = useState("");
  const [query, setQuery] = useState("");

  let isValid = fullName != "" && email != "" && query != "";

  const { control, handleSubmit, formState, reset, errors, register } = useForm(
    {
      defaultValues: { ...initialValues },
      mode: "onChange",
    }
  );

  const resetData = () => {
      setFullName("");
      setEmail("");
      setQuery("");
  }

  const onSubmit = (data: any) => {
    console.log("Query Submitted: ", data);
    // alert(JSON.stringify(data, null, 2));
    axios
      .post(
        "https://gcc-backend-dev-temp.herokuapp.com/supportquery",
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
      <h2>
        <IonLabel className='title-class'>Submit a Query</IonLabel>
      </h2>

      <IonItem>
        <IonLabel position="stacked">Name</IonLabel>
        <IonInput
          name="fullName"
          value={fullName}
          clearInput={true}
          placeholder="Name"
          type="text"
          ref={register({ required: true })}
          onIonChange={(e) => setFullName(e.detail.value || '')}
        />
      </IonItem>

      <IonItem>
        <IonLabel position="stacked">Email</IonLabel>
        <IonInput
          name="email"
          onIonChange={(e) => setEmail(e.detail.value || '')}
          value={email}
          clearInput={true}
          placeholder="Email"
          type="email"
          ref={register({ required: true })}
        />
      </IonItem>

      <IonItem>
        <IonLabel position="stacked">Query</IonLabel>
        <IonInput
          name="query"
          onIonChange={(e) => setQuery(e.detail.value || '')}
          clearInput={false}
          value={query}
          placeholder="Describe your query"
          ref={register({ required: true })}
        />
      </IonItem>

      <IonButton type="submit" expand="block" disabled={!isValid}>
        Submit
      </IonButton>
    </form>
  );
};

export default SupportQueryContainer;
