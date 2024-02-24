import React from 'react'

const Footer = () => {
  return (
    <section className="forth">
      <div>
        <img src="favicon.svg" alt="" />
      </div>
      <div className="box">
        <span>
          <h1>&#169; Movies & TV</h1>
          <p>&#64; Follow Us</p>
          <a
            href="https://www.facebook.com/people/Shivam-Soni/pfbid0CadrrAFrFQvjYw7wNBk5xqSHr36d4B8JJ2pp9CPGgC3PgHAVw8GFUfeswuFbbopGl/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa fa-facebook-square"></i>
          </a>
          <a
            href="https://instagram.com/_seth_shivam"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa fa-instagram"></i>
          </a>
          <a
            href="https://twitter/shivam700216"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa fa-twitter"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/shivam-soni-20531a28b"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa fa-linkedin"></i>
          </a>
        </span>
      </div>
      <div className="box my-2">
        <a href="#gotop" style={{ fontSize: "1rem" }}>
          <i className="fa fa-arrow-up"></i> Go to Top
        </a>
        <p>
          Data Provider :
          <a
            href="https://themoviedb.org"
            target="_blank"
            rel="noreferrer"
            style={{
              fontSize: "1rem",
              textDecoration: "underline",
              fontFamily: "Arial",
            }}
          >
            TMDB
          </a>
        </p>
      </div>
      <span className="last">
        Developer :{" "}
        <a
          href="https://www.linkedin.com/in/shivam-soni-20531a28b"
          rel="noreferrer"
          style={{
            fontFamily: "'Dancing Script', cursive",
            display: "inline",
            fontSize: "1.2rem",
          }}
        >
          Shivam Soni
        </a>
      </span>
    </section>
  );
}

export default Footer
