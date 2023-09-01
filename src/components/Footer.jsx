import React from 'react';

function Footer() {
  return (
    <footer className="bg-tertiary py-6">
      <div className="container mx-auto text-white">
        <div className="flex justify-center space-x-4">
          <p className="text-white">Mis redes:</p>
          <a href="https://www.linkedin.com/in/franco-miguez-a2934527a/" className="text-white hover:text-secondary transition duration-300" target="_blank">
            Linkedin
          </a>
          <a href="https://twitter.com/SirDepre" className="text-white hover:text-secondary transition duration-300" target="_blank">
            Twitter
          </a>
          <a href="https://www.instagram.com/franco.el.depre/" className="text-white hover:text-secondary transition duration-300" target="_blank">
            Instagram
          </a>
        </div>
        <p className="text-center mt-4">© 2023 Franco Miguez (CodeHacker Academy)</p>
      </div>
    </footer>
  );
}

export default Footer;
