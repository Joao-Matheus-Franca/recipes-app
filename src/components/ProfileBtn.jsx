import React from 'react';
import { useHistory } from 'react-router-dom';

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
      src="src/images/profileIcon.svg"
      alt="profile-top"
      onClick={ redirect }
    />

  );
}
