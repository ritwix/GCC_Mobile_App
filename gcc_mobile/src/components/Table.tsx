import React from 'react';
import { IonGrid, IonRow, IonCol } from '@ionic/react';
import './Table.css';
import { attachProps } from '@ionic/react/dist/types/components/utils';

type Props = {
  headers: Array<string>;
  data: Array<{ [key: string]: string }>;
};

const Table: React.FC<Props> = (props) => {
  const { headers, data } = props;
  return (
    <IonGrid>
      <IonRow className="table_header">
        {headers.map((header) => (
          <IonCol key={header}>{header}</IonCol>
        ))}
      </IonRow>
      {data.map((row) => (
        <IonRow className="table_row" key={JSON.stringify(row)}>
          {headers.map((key) => (
            <IonCol key={row[key]}>{row[key] || 'N/A'}</IonCol>
          ))}
        </IonRow>
      ))}
    </IonGrid>
  );
};

export default Table;
