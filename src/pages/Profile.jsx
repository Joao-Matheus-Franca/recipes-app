import React from 'react';
import Header from '../components/Header';
import ProfileBtn from '../components/ProfileBtn';

export default function Profile() {
  return (
    <div>
      <Header>
        <h1 data-testid="page-title"> Profile </h1>
        <ProfileBtn />
      </Header>
    </div>
  );
}
