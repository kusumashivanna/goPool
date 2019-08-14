import React, { Component } from 'react'
import Image from "./Image"
import styles from "./Nav.module.css";
import Button from "./Button";
export default class Banner extends Component {
    render() {
        return (
            <div className={styles.Banner}>
            <Image image={this.props.Image1} />
            <div className={styles.where}>{this.props.where}</div>
            <div className={styles.This}>{this.props.This}</div>
            <div className={styles.button}>
              <Button color="white">{this.props.button}</Button>
            </div>
            </div>
        )
    }
}
