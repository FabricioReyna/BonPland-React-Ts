import React, { useState } from "react";
import Logo from "../../icons/Logo";
import { Box, Header } from "./header.styled";
import { Link } from  "react-router-dom"
import  Ham  from "../../icons/Ham";
import User from "../../icons/User";
import WidgetUser from "./widgetuser";

const Navbar = () => {
  const [IsOpenUser, setUser] = useState(false)


  return (
    <Header>
      <Box className="Nav-Responsive" onClick={() =>setUser(!IsOpenUser)}>
        <Ham fill="#5BC0BE" width="100%"/>
        {
          IsOpenUser && <WidgetUser/>
        }
      </Box>
      <Box className="Logo">
        <Logo stroke="#5BC0BE" />
        <span className="span">bonpland</span>
      </Box>

      <Box className="Nav">
        <nav >
          <ul>
            <li className="active">
              <Link to={"./"} > home </Link>
            </li>
            <li>
              <Link to="./servicos">servicios</Link>
            </li>
            <li>
              <Link to="./nosotros">nosotros</Link>
            </li>
          </ul>
        </nav>
        <button>Ingresar</button>
      </Box>
      <Box className = "User-Responsive" onClick = {() => setUser(!IsOpenUser)
      }>
        <User width="100%"/>
        {
          IsOpenUser && <WidgetUser/>
        }
      </Box>
    </Header>
    
  );
};
export default Navbar;
