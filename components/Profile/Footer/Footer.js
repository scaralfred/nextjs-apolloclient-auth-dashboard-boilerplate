import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Link from 'next/link'

import s from './Footer.module.scss';

class Footer extends React.Component {
  static propTypes = {
    className: PropTypes.string,
  };

  static defaultProps = {
    className: '',
  };

  render() {
    return (
      <footer className={cx(s.root, this.props.className)}>
        <div className={s.container}>
          <span>© 2020 &nbsp;Alfredo Scarano</span>
          <span className={s.spacer}>·</span>
          <Link href="/tos">Terms of Service</Link>
          <span className={s.spacer}>·</span>
          <Link href="/privacy">Privacy Policy</Link>
          <span className={s.spacer}>·</span>
          <Link href="/global/not-found">Support</Link>
        </div>
      </footer>
    );
  }
}

export default Footer;
