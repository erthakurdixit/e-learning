import Image from "next/image";

const Header = ({ title, subtitle, duration, onMenuClick }) => {
  return (
    <header className="top-header">
      <div className="header-content">
        <div className="header-title" >
          <button
            className="mobile-toggle"
            onClick={onMenuClick}
            aria-label="Open sidebar"
          >
           <Image src="/images/hamberger-menu.svg" alt="hamburger menu icon" width={20} height={20}/>
          </button>

          <h1>{title}</h1>
           <p>{subtitle}</p>
        </div>
       
      </div>

      <div className="header-meta">
        <Image src="/images/clock.svg" alt="clock" width={15} height={15}/>
        <span>{duration}</span>
      </div>
    </header>
  );
};

export default Header;
