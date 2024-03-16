import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import Footer from './Footer';

function Page({ children }) {
  return (
    <div>
      <Header />
      <div className="p-5 bg-slate-400 min-h-[500px]">{children}</div>
      <Footer />
    </div>
  );
}

Page.propTypes = {
  children: PropTypes.elementType.isRequired,
};

export default Page;
