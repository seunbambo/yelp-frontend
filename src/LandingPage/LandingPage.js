import React from "react";
import { TopNav } from "./TopNav/TopNav";
import logo from "../assets/logo.png";
import styles from "./LandingPage.module.css";

export function LandingPage() {
  return (
    <>
      <TopNav />
      <img src={logo} className={styles.logo} alt="logo" />
    </>
  );
}
