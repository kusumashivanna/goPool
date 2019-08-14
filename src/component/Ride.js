import React, { Component } from "react";
import styles from "./Ride.module.css";
import Header from "./Header";
import Image from "./Images/Banner.jpg";
import Banner from "./Banner";
import banner1 from "./Images/banner1.jpg";
export default class Ride extends Component {
  render() {
    return (
      <div className={styles.container}>
        <Header Image={Image} />
        {/* <Banner  Image1={banner1}
      where={"Where do you want to go ?"}
      This={" This will be the least expensive ride you have ever made."}
      button={"Offer a Ride"}/> */}
      </div>
    );
  }
}
