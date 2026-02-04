const Layout = ({ sidebar, children }) => {
  return (
    <div className="app-container">
      {sidebar}
      <main className="main-content">{children}</main>
    </div>
  );
};

export default Layout;