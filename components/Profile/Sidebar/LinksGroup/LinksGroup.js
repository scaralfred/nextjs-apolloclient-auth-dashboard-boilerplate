import React, {Component} from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import { Collapse } from 'reactstrap';
// import { Route } from 'react-router';

import Icon from '../../Icon/Icon';

import s from './LinksGroup.module.scss';
import Link from 'next/link';

class LinksGroup extends Component {
  /* eslint-disable */
  static propTypes = {
    header: PropTypes.node.isRequired,
    headerLink: PropTypes.string,
    childrenLinks: PropTypes.array,
    glyph: PropTypes.string,
    className: PropTypes.string,
  };
  /* eslint-enable */

  static defaultProps = {
    headerLink: null,
    childrenLinks: null,
    className: '',
    glyph: null,
  };

  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
    };
  }

  render() {
    const { className, childrenLinks, headerLink, header, glyph } = this.props;
    const { isOpen } = this.state;
    if (!childrenLinks) {
      return (
        <li className={cx(s.headerLink, className)}>
          <Link 
            href={headerLink}
            activeClassName={s.headerLinkActive}
          >
            <a>
              <div>
                {glyph && <Icon glyph={glyph} />}
                <span>{header}</span>
              </div>
            </a>
          </Link>
        </li>
      );
    }
    /* eslint-disable */
    return (
      <div>
        {/* path={headerLink} */}
        <li className={cx(s.headerLink, className)}>
          <a
            // className={cx({[s.headerLinkActive]: !!match && match.url.indexOf(headerLink) !== -1 })}
            onClick={() => this.setState({isOpen: !isOpen})}
          >
            <div>
              {glyph && <Icon glyph={glyph} />}
              <span>{header}</span>
            </div>
            <b className={cx('fa fa-angle-left arrow', s.arrow, {[s.arrowActive]: isOpen})} />
          </a>
          {/* eslint-enable */}
          <Collapse className={s.panel} isOpen={isOpen}>
            <ul>
              {childrenLinks &&
              childrenLinks.map(child => (
                <li key={child.name}>
                  <Link
                    href={child.link}
                    onClick={() =>
                      this.setState({
                        isOpen: true,
                      })
                    }
                    activeClassName={s.headerLinkActive}
                  >
                    {child.name}
                  </Link>
                </li>
              ))}
            </ul>
          </Collapse>
        </li>
      </div>
    );
  }
}

export default LinksGroup;
