import React from "react";

function Contact() {
  return (
    <>
      <section className="section section-shop">
        <p className="img-content">Contact</p>
      </section>
      <section className="section section-contact">
        <div className="container grid grid--2--cols">
          <div className="contact contact-info">
            <p className="contact-heading">Headquaters </p>
            <p className="contact-content-text">
              The Mina Stufio
              <br />
              8241 Us 41
              <br />
              Monteagle
              <br />
              tT, 37356
            </p>
            <p className="contact-heading">Collaborations</p>
            <p className="contact-content-text">
              Reach out to collaborate at
              <br />
              <a href="#" className="collab-link">
                collab@mina.com
              </a>
            </p>
          </div>
          <div className="contact">
            <p className="contact-heading">Inquiries</p>
            <form
              action=""
              className="contact-form"
              method="post"
              name="sign-in "
              netlify
            >
              <input type="hidden" name="form-name" value="sign-up" />
              <div>
                <label for="name">Name*</label>
                <input
                  type="text"
                  name="first-name"
                  id="name"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label for="lname">Last name</label>
                <input
                  type="text"
                  name="last-name"
                  id="lname"
                  placeholder="Your last name"
                />{" "}
              </div>
              <div>
                {" "}
                <label for="Email">Your email*</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Your email address"
                  id="Email"
                />
              </div>
              <div>
                <label for="message">Message*</label>
                <textarea
                  name="message"
                  id="message"
                  placeholder="Your message"
                ></textarea>
              </div>
              <div>
                <button className="btn" type="submit">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
