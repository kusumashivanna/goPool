import React, { Component } from "react";
import styles from "./Header.module.css";
import Image from "./Image";
export default class Header extends Component {
  render() {
    return (
      <div className={styles.base}>
        <div className={styles.imageHolder}>
          <div className={styles.logo}>
            <Image image={this.props.Image} />
          </div>
        </div>
        <div className={styles.nav}>
          <div className={styles.label}>Find a ride</div>
          <div className={styles.label}>Offer a ride</div>
          <div className={styles.label}>Sign up</div>
          <div className={styles.label}>Login</div>
        </div>
      </div>
    );
  }
}
