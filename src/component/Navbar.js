import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { GiShoppingCart } from "react-icons/gi";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <NavContainer isScrolled={isScrolled}>
      <NavHeader>
        <NavLogo to="/" style={{ color: "black", textDecoration: "none" }}>
          Milestone
        </NavLogo>
        <NavLinkContainer>
          <StyledLink to="/news">News</StyledLink>
          <StyledLink to="/about">About Us</StyledLink>
          <StyledLink to="/products">Product</StyledLink>
          <StyledLink to="/community">Community</StyledLink>
          <StyledLink to="/question">Q&A</StyledLink>
          <Link to="/login">
            <LoginButton isScrolled={isScrolled}>Login</LoginButton>
          </Link>
          <CartIcon>
            <GiShoppingCart size={"2.6rem"} />
          </CartIcon>
        </NavLinkContainer>
      </NavHeader>
    </NavContainer>
  );
};
export default Navbar;

const NavContainer = styled.nav`
  background: ${(props) =>
    props.isScrolled ? "rgba(229, 231, 235, 0.9)" : "transparent"};
  color: black;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 10;
  padding: 0.5rem 1rem;
  transition: background-color 0.3s ease-in-out;
`;

const NavHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1500px;
  margin: auto;
  width: 100%;
  height: 60px;
`;

const NavLogo = styled(Link)`
  font-size: 2rem;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
`;

const NavLinkContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-grow: 1;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  font-size: 1rem;
  margin-left: 1rem;
  position: relative;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);

  &:hover {
    color: black;
    text-shadow: none;

    &::after {
      content: "";
      position: absolute;
      bottom: -5px;
      left: 0;
      width: 100%;
      height: 1px;
      background-color: black;
      transform: scaleX(0);
      transform-origin: bottom;
      transition: transform 0.3s ease-out;
    }
  }

  &:hover::after {
    transform: scaleX(1);
  }
`;

const LoginButton = styled.button`
  background: transparent;
  color: black;
  border: 1px solid white;
  padding: 0.5rem 1.5rem;
  cursor: pointer;
  font-size: 1rem;
  border-radius: 5px;
  margin-left: 1.5rem;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: white;
    color: black;
  }

  background-color: ${(props) => (props.isScrolled ? "black" : "transparent")};
  color: ${(props) => (props.isScrolled ? "white" : "black")};
`;

const CartIcon = styled.div`
  margin-left: 1.5rem;

  &:hover {
    cursor: pointer;
  }
`;
