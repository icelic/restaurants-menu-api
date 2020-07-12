import React from 'react';

import { Header } from '../../common';

import './index.scss';

function Index() {
  return (
    <div>
      <Header />
      <div className="mp-terms">
        <h1>Terms of service</h1>
        <h2>Acceptance of the Terms of Use</h2>
        <p>
          The Terms of Use represent the agreement between the founder of the
          MenuPls application and each person who visits the MenuPls Web and
          Mobile Service. Any way of using the service (including page
          navigation) means acceptance of the mentioned conditions. Arian Skoki,
          Ivan Ćelić and Simone Herak are the founders of the Web and Mobile
          Service MenuPls and are the owners of all information and data within
          the service (program codes, files, texts, etc.). The MenuPls service
          grants you the right to access, use and display the content, but these
          rights do not include the transfer of ownership of the service and its
          content.
        </p>
        <h2>Account</h2>
        <p>
          As a registered user through a Google Account, you are responsible for
          all activities accomplished through your account. The user account may
          be blocked in the event of any misuse of the MenuPls Web and Mobile
          Service.
        </p>
        <h2>Personal data</h2>
        <p>
          Personal data collected by the service will be used exclusively in
          accordance with the Privacy Policy (link) of the MenuPls service.
        </p>
        <h2>Amendments</h2>
        <p>
          Arian Skoki, Ivan Ćelić and Simone Herak reserve the right to change
          or amend the current Terms of Use of the MenuPls service at any time.
          The amendment to the Terms of Use will apply upon notification of such
          change. Further use of the service, on the part of the user, implies
          acceptance of all amendments.
        </p>
        <h2>Responsibility</h2>
        <p>
          Arian Skoki, Ivan Ćelić and Simone Herak are not liable to any damage,
          costs or penalties of the restaurant, bar or any catering facility.
          For example, lost earnings, job closure, data loss, property damage,
          etc. The MenuPls service is an intermediary between restaurants, bars
          or any catering facility and their owners and is in no way responsible
          for the quality of food, services and similar.
        </p>
      </div>
    </div>
  );
}

export default Index;
