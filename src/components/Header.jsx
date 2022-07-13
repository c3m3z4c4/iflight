import React from 'react';

function Header({titulo}) {
  return (
    <nav>
      <div className="nav-wrapper light-blue darken-2">
        <div className="logo-iflight">
          <img
            src="/src/assets/IFlight Logo/1.png"
            alt="Foto Ali"
            width="255"
            height="220"
          />
          {titulo}
        </div>
      </div>
    </nav>
  );
}

export default Header;