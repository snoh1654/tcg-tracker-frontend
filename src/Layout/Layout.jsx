import { Outlet, Link } from "react-router-dom";
import "./Layout.css"; // Optional: styling for layout

function Layout() {
  return (
    <div className="layout-container">
      {/* Header */}
      <header className="layout-header">
        <div className="logo">
          <Link to="/">📈 TCG Tracker</Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="layout-main">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="layout-footer">
        <p>Created by Sean Noh</p>
      </footer>
    </div>
  );
}

export default Layout;
