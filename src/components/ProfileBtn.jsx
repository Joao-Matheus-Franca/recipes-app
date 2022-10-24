import React from 'react';
import { useHistory } from 'react-router-dom';
import image from '../images/profileIcon.svg';

export default function ProfileBtn() {
  const history = useHistory();
  const redirect = () => {
    const path = '/profile';
    history.push(path);
  };

  return (
    <button
      value="Profile"
      type="button"
      data-testid="profile-top-btn"
      src={ image }
      onClick={ redirect }
    >
      <img src={ image } alt="profile-top" />
    </button>
  );
}
