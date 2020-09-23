import React from 'react';
// import { Link } from 'gatsby';
// import { ThemeContext } from 'providers/ThemeProvider';
import { Container } from 'components/common';
import NavbarLinks from '../NavbarLinks';
import { Wrapper, HeaderTitle } from './styles';

const Navbar = () => (
  <Wrapper as={Container}>
    <HeaderTitle>Harriet Ayugi</HeaderTitle>
    <NavbarLinks desktop />
  </Wrapper>
);

export default Navbar;
