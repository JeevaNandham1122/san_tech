import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "./Logo.png";

import {
  Box,
  Menu,
  MenuItem,
  AppBar,
  Toolbar,
  List,
  ListItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import "./Navbar.css";

function Navbar() {
  const [anchorElm, setanchorElm] = useState(null);
  const [open, setopen] = useState(false);
  const [isMenuVisible, setMenuVisible] = useState(false);

  const handleClose = () => {
    setanchorElm(null);
    setopen(false);
  };
  const handleover = (e) => {
    setanchorElm(e.currentTarget);
    setopen(true);
  };

  const menustyle = {
    marginTop: "30px",
    // width:500,
    color: "#1f2b52",
    // backgroundColor: "",
    marginLeft: "-200px",
    padding:"10px",
  };

 
  // side menu

  const togglebtn = () => {
    setMenuVisible(!isMenuVisible);
  };
  return (
    <div>
      <AppBar
        variant="outline"
        position="static"
        sx={{ backgroundColor: "white" }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box style={{ fontSize: { xs: "10px" } }}>
            <img src={logo} alt="logo" />
          </Box>

          <Box className="navbar"
            sx={{
              display: { xs: "none", sm: "none", md: "flex" },
              justifyContent: "space-around",
              width: 700,
            }}>
            <Link to="/">
              Home
            </Link>
            <Link to="/AboutUs">
              AboutUs
            </Link>
            <Link to="/Careers">
             Careers
            </Link>
            <Link onMouseOver={handleover}>
              Services
            </Link>
            <Menu
              PaperProps={{ style: menustyle }}
              anchorEl={anchorElm}
              open={open}
              onClose={handleClose}
            >
              <Box sx={{ display: { xs: "none", sm: "flex", md: "flex" }, justifyContent: "space-between",padding:"20px" }}>
                <Box className="menuitemss">
                  <MenuItem onClick={handleClose}>
                    Engineering Services
                  </MenuItem>
                  <MenuItem className="menuitems"  onClick={handleClose}>
                    <Link
                    
                      to="/ProductDevelopment"
                    >
                      ProductDevelopment
                    </Link>
                  </MenuItem>
                  <MenuItem className="menuitems" onClick={handleClose}>
                    <Link
                    
                      to="/DesignSupport"
                    >
                      DesignSupport
                    </Link>
                  </MenuItem>
                  <MenuItem className="menuitems" onClick={handleClose}>
                    <Link
                    
                      to="/DataConversion"
                    >
                      DataConversion
                    </Link>
                  </MenuItem>
                  <MenuItem className="menuitems" onClick={handleClose}>
                    <Link
                    
                      to="/HeavyMachinery"
                    >
                      HeavyMachinery
                    </Link>
                  </MenuItem>
                </Box>
                <Box className="menuitemss">
                  <MenuItem onClick={handleClose}>
                    Engineering Industries
                  </MenuItem>
                  <MenuItem className="menuitems" onClick={handleClose}>
                    <Link to="/Agriculture">
                      Agriculture
                    </Link>
                  </MenuItem>
                  <MenuItem className="menuitems" onClick={handleClose}>
                    <Link to="/Appliances">
                      Appliances
                    </Link>
                  </MenuItem>
                  <MenuItem className="menuitems" onClick={handleClose}>
                    <Link to="/Automative">
                      Automative
                    </Link>
                  </MenuItem>
                  <MenuItem className="menuitems" onClick={handleClose}>
                    <Link to="/Aerospace">
                      Aerospace
                    </Link>
                  </MenuItem>
                </Box>
                <Box className="menuitemss">
                  <MenuItem onClick={handleClose}> Training Services</MenuItem>
                  <MenuItem className="menuitems" onClick={handleClose}>
                    <Link
                    
                      to="/IndustrialDesigners"
                    >
                      IndustrialDesigners
                    </Link>
                  </MenuItem>
                  <MenuItem className="menuitems" onClick={handleClose}>
                    <Link to="/Analyst">
                      Analyst
                    </Link>
                  </MenuItem>
                  <MenuItem className="menuitems" onClick={handleClose}>
                    <Link
                    
                      to="/PipingCablingDesigners"
                    >
                      PipingCablingDesigners
                    </Link>
                  </MenuItem>
                  <MenuItem className="menuitems" onClick={handleClose}>
                    <Link
                    
                      to="/WiringHarness"
                    >
                      WiringHarness
                    </Link>
                  </MenuItem>
                </Box>
                <Box className="menuitemss">
                  <MenuItem onClick={handleClose}>Staffing Solutions</MenuItem>
                  <MenuItem className="menuitems" onClick={handleClose}>
                    <Link to="/Engines">
                      Engines
                    </Link>
                  </MenuItem>
                  <MenuItem className="menuitems" onClick={handleClose}>
                    <Link
                    
                      to="/DesignEngineers"
                    >
                      DesignEngineers
                    </Link>
                  </MenuItem>
                  <MenuItem className="menuitems" onClick={handleClose}>
                    <Link
                      
                      to="/ProductionEngineers"
                    >
                      ProductionEngineers
                    </Link>
                  </MenuItem>
                  <MenuItem className="menuitems" onClick={handleClose}>
                    <Link
                      to="/SoftSkillsTraining"
                    >
                      SoftSkillsTraining
                    </Link>
                  </MenuItem>
                </Box>
              </Box>
            </Menu>
            <Link to="/contactUs">
              ContactUs
            </Link>
          </Box>

          <Box
            onClick={togglebtn}
            sx={{ display: { xs: "flex", sm: "flex", md: "none" } }}
          >
            <MenuIcon sx={{ color: "red" }} />
          </Box>
        </Toolbar>
      </AppBar>

      <Box>
        <List>
          <ListItem
            sx={{
              display: {
                xs: isMenuVisible ? "flex" : "none",
                sm: isMenuVisible ? "flex" : "none",
                md: "none",
              },
              flexDirection: "column",
            }}
          >
            <ListItem className="sidebar">
              <Link
              
                to="/"
              >
                Home
              </Link>
            </ListItem>
            <ListItem className="sidebar">
              <Link
              
                to="/AboutUs"
              >
                AboutUs
              </Link>
            </ListItem>
            <ListItem className="sidebar">
              <Link
              
                to="/Careers"
              >
                Careers
              </Link>
            </ListItem>
            <ListItem className="sidebar">
              <Link onMouseOver={handleover}>
                Services
              </Link>
              <Menu
              PaperProps={{ style: menustyle }}
              anchorEl={anchorElm}
              open={open}
              onClose={handleClose}
            >
              <Box sx={{ display: { xs: "none", sm: "flex", md: "flex" }, justifyContent: "space-between",padding:"20px" }}>
                <Box className="menuitemss">
                  <MenuItem onClick={handleClose}>
                    Engineering Services
                  </MenuItem>
                  <MenuItem className="menuitems"  onClick={handleClose}>
                    <Link
                    
                      to="/ProductDevelopment"
                    >
                      ProductDevelopment
                    </Link>
                  </MenuItem>
                  <MenuItem className="menuitems" onClick={handleClose}>
                    <Link
                    
                      to="/DesignSupport"
                    >
                      DesignSupport
                    </Link>
                  </MenuItem>
                  <MenuItem className="menuitems" onClick={handleClose}>
                    <Link
                    
                      to="/DataConversion"
                    >
                      DataConversion
                    </Link>
                  </MenuItem>
                  <MenuItem className="menuitems" onClick={handleClose}>
                    <Link
                    
                      to="/HeavyMachinery"
                    >
                      HeavyMachinery
                    </Link>
                  </MenuItem>
                </Box>
                <Box className="menuitemss">
                  <MenuItem onClick={handleClose}>
                    Engineering Industries
                  </MenuItem>
                  <MenuItem className="menuitems" onClick={handleClose}>
                    <Link to="/Agriculture">
                      Agriculture
                    </Link>
                  </MenuItem>
                  <MenuItem className="menuitems" onClick={handleClose}>
                    <Link to="/Appliances">
                      Appliances
                    </Link>
                  </MenuItem>
                  <MenuItem className="menuitems" onClick={handleClose}>
                    <Link to="/Automative">
                      Automative
                    </Link>
                  </MenuItem>
                  <MenuItem className="menuitems" onClick={handleClose}>
                    <Link to="/Aerospace">
                      Aerospace
                    </Link>
                  </MenuItem>
                </Box>
                <Box className="menuitemss">
                  <MenuItem onClick={handleClose}> Training Services</MenuItem>
                  <MenuItem className="menuitems" onClick={handleClose}>
                    <Link
                    
                      to="/IndustrialDesigners"
                    >
                      IndustrialDesigners
                    </Link>
                  </MenuItem>
                  <MenuItem className="menuitems" onClick={handleClose}>
                    <Link to="/Analyst">
                      Analyst
                    </Link>
                  </MenuItem>
                  <MenuItem className="menuitems" onClick={handleClose}>
                    <Link
                    
                      to="/PipingCablingDesigners"
                    >
                      PipingCablingDesigners
                    </Link>
                  </MenuItem>
                  <MenuItem className="menuitems" onClick={handleClose}>
                    <Link
                    
                      to="/WiringHarness"
                    >
                      WiringHarness
                    </Link>
                  </MenuItem>
                </Box>
                <Box className="menuitemss">
                  <MenuItem onClick={handleClose}>Staffing Solutions</MenuItem>
                  <MenuItem className="menuitems" onClick={handleClose}>
                    <Link to="/Engines">
                      Engines
                    </Link>
                  </MenuItem>
                  <MenuItem className="menuitems" onClick={handleClose}>
                    <Link
                    
                      to="/DesignEngineers"
                    >
                      DesignEngineers
                    </Link>
                  </MenuItem>
                  <MenuItem className="menuitems" onClick={handleClose}>
                    <Link
                      
                      to="/ProductionEngineers"
                    >
                      ProductionEngineers
                    </Link>
                  </MenuItem>
                  <MenuItem className="menuitems" onClick={handleClose}>
                    <Link
                      to="/SoftSkillsTraining"
                    >
                      SoftSkillsTraining
                    </Link>
                  </MenuItem>
                </Box>
              </Box>
            </Menu>


            </ListItem>
            <ListItem className="sidebar">
              <Link
              
                to="/contactUs"
              >
                ContactUs
              </Link>
            </ListItem>
          </ListItem>
        </List>
      </Box>
    </div>
  );
}

export default Navbar;
