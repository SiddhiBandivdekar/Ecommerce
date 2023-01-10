import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>
        <div className="item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <span>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur
            ex ab est quibusdam cupiditate tempora perferendis, earum eos
            impedit nobis fugiat amet! Commodi ducimus explicabo suscipit nisi
            illo provident animi.
          </span>
        </div>
        <div className="item">
          <h1>Contacts</h1>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates
            ipsa voluptatum vitae reprehenderit? Natus maiores quae quibusdam
            doloremque esse soluta rerum vero nostrum non. Soluta quis error ut
            magni non!
          </span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className="logo">Sidstore</span>
          <span className="copyright">
            © Copyright 2023. All rights reserved
          </span>
        </div>
        <div className="right">
          <img src="/ecommerce-images/payment_icons.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
