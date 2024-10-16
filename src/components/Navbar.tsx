
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';


const Navbar = styled.nav`
    position: absolute;
    top: 15%;
    font-size: 12px;
    left: 0;
    color: white;
    width: 100%;
    background-color: #333;
    padding: 10px 20px;

    
`;

const NavList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
    flex-direction: column;
 
    @media screen and (max-width: 750px){
        flex-direction: row;
    }
`;

const NavItem = styled.li`
  padding: 8px 16px;

  a {
    text-decoration: none;
    color: #fff;

    &:hover {
      color: #ff6347; 
      text-decoration: underline;
    }
  }

  &.active a {
    color: #ff6347;
      
  }
`;


export function NavBar() {
    const location = useLocation();

    return (
        <Navbar>
              <NavList>
                <NavItem className={location.pathname === "/" ? "active" : ""}>
                    <Link to="/">Home</Link>
                </NavItem>
                <NavItem className={location.pathname === "/Education" ? "active" : ""}>
                    <Link to="/Education">Education</Link>
                </NavItem>
                <NavItem className={location.pathname === "/experiences" ? "active" : ""}>
                    <Link to="/experiences">Experiences</Link>
                </NavItem>
                <NavItem className={location.pathname === "/hobbies" ? "active" : ""}>
                    <Link to="/hobbies">Hobbies</Link>
                </NavItem>
                <NavItem className={location.pathname === "/projects" ? "active" : ""}>
                    <Link to="/projects">Projects</Link>
                </NavItem>
                <NavItem className={location.pathname === "/gallery" ? "active" : ""}>
                    <Link to="/gallery">Gallery</Link>
                </NavItem>
            </NavList>
        </Navbar>
    );
}

export default NavBar;
