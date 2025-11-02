import React from 'react';
import { BsInstagram, BsGithub, BsFacebook } from 'react-icons/bs';

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href="https://www.facebook.com/khaled.azam.710171/" target="_blank" rel="noreferrer">
        <BsFacebook />
      </a>
    </div>
    <div>
      <a href="https://github.com/khaledazam" target="_blank" rel="noreferrer">
        <BsGithub />
      </a>
    </div>
    <div>
      <a href="https://www.instagram.com/sir.duckld/" target="_blank" rel="noreferrer">
        <BsInstagram />
      </a>
    </div>
  </div>
);

export default SocialMedia;
