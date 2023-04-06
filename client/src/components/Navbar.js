import { Link } from "react-router-dom";
import Home from '../components/Home';

function Navbar({ user, setUser }) {
  
  const logout = () => {
    localStorage.removeItem("token")
    setUser({})
  };

  return (
    <nav className="sticky">
      <ul className="site-nav">
      {user ? 
        <>
          <li style={{ color: "black" }}>Welcome {user}!</li>
          <li className="posts-nav">

          <li>
            <Link to="/about">About Us</Link>
          </li>
          <br/>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <br/>
          <li></li>
            <Link to="/posts">Youth INC Logs</Link>
          </li>
          <li onClick={logout}>
            <Link to="/logout">Logout</Link>
          </li>
        
        </>
       : 
        <>
          <li className="posts-nav">
            {/* <Link to="/posts">Logs</Link> */}
            <Link to="/">About Us</Link>
          </li>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/register">Sign Up</Link>
          </li>
        </>
      }
    </ul>
    </nav>
  );
}

export default Navbar;
