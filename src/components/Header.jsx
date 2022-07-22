import React from 'react';

function Header({titulo}) {
  return (
    <nav>
      <div className="nav-wrapper light-blue darken-2">
        <div className="logo-iflight" style={{ backgroundColor: `#52a6e2` }}>
          <img
            src="/assets/IFlight Logo/IFlight Logo.png"
            alt="Foto Ali"
            width="230"
            height="200"
          />
          {titulo}
        </div>
      </div>
    </nav>
  );
}

export default Header;