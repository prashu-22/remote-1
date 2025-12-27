import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

const Random = () => <p>🎲 This is a random page.</p>;
const About = () => <p>ℹ️ This remote demonstrates routing.</p>;

export default function App() {

  return (
    <BrowserRouter>
      <div style={remoteStyles.container}>
        <h2>React Remote App Prod 1</h2>

        <nav style={remoteStyles.nav}>
          <NavLink to="/" style={remoteNav}>Home</NavLink>
          <NavLink to="/random" style={remoteNav}>Random</NavLink>
          <NavLink to="/about" style={remoteNav}>About</NavLink>
        </nav>

        <div style={remoteStyles.card}>
          <Routes>
            <Route path="/" element={<p>🏠 Remote 1 Home</p>} />
            <Route path="/random" element={<Random />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

const remoteStyles = {
  container: {
    textAlign: "center",
  },
  nav: {
    display: "flex",
    justifyContent: "center",
    gap: 12,
    marginBottom: 16,
  },
  card: {
    padding: 20,
    background: "#f9fafb",
    borderRadius: 6,
  },
};

const remoteNav = ({ isActive }) => ({
  textDecoration: "none",
  padding: "6px 10px",
  borderRadius: 4,
  color: isActive ? "#fff" : "#2563eb",
  background: isActive ? "#2563eb" : "transparent",
});
