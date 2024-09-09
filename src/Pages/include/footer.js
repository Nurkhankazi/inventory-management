import * as React from 'react';
import { useState } from "react";
import { Link,useLocation } from 'react-router-dom';

const Footer = () => {

  return (
    <>
    <div className="buy-now">
      <a
        href="https://themeselection.com/item/sneat-bootstrap-html-admin-template/"
        target="_blank"
        className="btn btn-danger btn-buy-now"
        >Upgrade to Pro</a>
    </div>

    </>
  );
}

export default Footer;
