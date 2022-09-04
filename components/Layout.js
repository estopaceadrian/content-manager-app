import React from 'react';
import ActiveResource from './ActiveResource';
import Navbar from './Navbar';

const Layout = ({ children }) => (
  <>
    <Navbar />
    <ActiveResource />
    {children}
  </>
);

export default Layout;
