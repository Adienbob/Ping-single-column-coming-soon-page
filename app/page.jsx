"use client"

import Head from "next/head"
import Logo from "./components/logo"
import Header from "./components/header"
import Buttons from "./components/buttons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";



export default function Home() {


  return (
    <>
      <Head>
        <title>Ping – Coming Soon</title>
        <meta
          name="description"
          content="Subscribe and get notified when we launch!"
        />
      </Head>
      <div className="container">
        <section>
          <Logo />
          <Header />
          <p className="subscribe">Subscribe and get notified</p>
          <Buttons />
          <img
            src="/illustration-dashboard.png"
            alt="Dashboard illustration"
            className="dashboard"
          />
        </section>
        <footer>
          <div className="icons">
            <a href="#">
              <FontAwesomeIcon className="icon" icon={faFacebookF} />
            </a>
            <a href="#">
              <FontAwesomeIcon className="icon" icon={faTwitter} />
            </a>
            <a href="#">
              <FontAwesomeIcon className="icon" icon={faInstagram} />
            </a>
          </div>
          <p>&copy; Copyright Ping. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
}
