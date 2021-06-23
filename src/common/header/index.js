import React, { Component } from 'react'

import styles from './style.module.css'
import logoImg from '../../statics/logo.png';

class Header extends Component {
  render() {
    return (
      <nav className={styles.navbar}>
          <div className={styles.nav_content}>
            <a className={styles.nav_logo} href="/">
              <img className={styles.nav_logo_img} src={logoImg} alt="Nav logo" />
            </a>
          </div>
      </nav>
    )
  }
}

export default Header;
