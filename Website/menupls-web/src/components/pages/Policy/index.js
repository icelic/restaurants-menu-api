import React from 'react';

import { Header } from '../../common';

import './index.scss';

function Policy() {
  return (
    <div>
      <Header />
      <div className="mp-policy">
        <h1>Privacy Policy</h1>
        <p>
          Here you can find the information about the data stored when visiting
          the MenuPls service and an explanation of how the data is being
          processed and used. The privacy policy is written in accordance with
          the Personal Data Protection Act (GDPR).
        </p>
        <h2>Processing managers</h2>
        <p>
          Arian Skoki, Ivan Ćelić and Simone Herak are the persons responsible
          for the processing of your personal data.
        </p>
        <h2>User rights</h2>
        <p>
          Every user of the MenuPls service has the right to request the receipt
          of their personal data processed by the service managers. In addition,
          the user can request modification, deletion and restriction of the
          data. If the user wants to apply any of the above rights, an e-mail
          has to be sent to: ais.tech.company@gmail.com.
        </p>
        <h2>Personal data collected</h2>
        <p>
          When logging in to MenuPls Mobile Service via Google Account, the
          following information is being collected: name and surname, e-mail
          address, language preference and profile picture. If you allow MenuPls
          Mobile Service to access your location, it will be collected.
        </p>
        <h2>Purpose of data collection</h2>
        <p>
          Personal data is being collected for the purpose of displaying it
          within the user profile (visible only to you). Additionally, the
          location is being collected for the purpose of filtering restaurants,
          bars and catering facilities considering your current location (in
          case you allow it).
        </p>
        <h2>Security</h2>
        <p>The data is securely stored using Amazon Web Services (AWS).</p>
      </div>
    </div>
  );
}

export default Policy;
