import React from "react";

const Footer = () => {
  return (
    <div className="bg-base-300">
      <footer className="footer p-10 text-base-content">
        <div>
          <span className="footer-title">Courses</span>
          <a className="link link-hover">Aikido</a>
          <a className="link link-hover">Jujitsu</a>
          <a className="link link-hover">Kung fu</a>
          <a className="link link-hover">Sumo</a>
        </div>
        <div>
          <span className="footer-title">Address</span>
          <p>123 Main Street</p>
          <p>Las Vegas, NV 89101</p>
          <p>United States</p>
          <p>Phone Number: (555) 123-4567</p>
          <p>Email: school@bushido.com</p>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
          <a className="link link-hover">Course purchase policy</a>
          <a className="link link-hover">Refund policy</a>
        </div>
        <div>
          <span className="footer-title">Services</span>
          <a className="link link-hover">Career for instructor</a>
          <a className="link link-hover">Career for finance</a>
          <a className="link link-hover">Admission</a>
        </div>
        <div>
          <span className="footer-title">Stay Tuned</span>
          <div className="form-control lg:w-80">
            <label className="label">
              <span className="label-text">Enter your email address</span>
            </label>
            <div className="relative">
              <input
                type="text"
                placeholder="username@site.com"
                className="input input-bordered rounded-none w-full pr-16 shadow-inner-2xl"
              />
              <button className="btn-custom absolute top-0 right-0">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </footer>
      <footer className="footer footer-center p-4 text-base-content">
        <div>
          <p>Copyright © 2023 - All right reserved by Bushido bootcamp, Navada, US</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
