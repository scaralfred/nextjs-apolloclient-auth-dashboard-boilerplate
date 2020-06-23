import React from 'react';
import Link from 'next/link'
// import {connect} from 'react-redux';

import Icon from '../Icon';
import LinksGroup from './LinksGroup/LinksGroup';

import s from './Sidebar.module.scss';

const Sidebar = () => (
  <nav className={s.root}>
    <header className={s.logo}>
      <Link href="/">
        <a style={{cursor: 'pointer'}}><Icon glyph="logo" /></a>
      </Link>
    </header>
    <ul className={s.nav}>
      <LinksGroup
        header="Dashboard"
        headerLink="/profile/dashboard"
        glyph="dashboard"
      />
      <LinksGroup
        header="Typography"
        headerLink="/profile/typography"
        glyph="typography"
      />
      <LinksGroup
        header="Tables Basic"
        headerLink="/profile/tables"
        glyph="tables"
      />
      <LinksGroup
        header="Notifications"
        headerLink="/profile/notifications"
        glyph="notifications"
      />
      <LinksGroup
        header="Components"
        headerLink="/profile/components"
        childrenLinks={[
          {
            name: 'Buttons',
            link: '/profile/components/buttons',
          },
          {
            name: 'Charts',
            link: '/profile/components/charts',
          },
          {
            name: 'Icons',
            link: '/profile/components/icons',
          },
          {
            name: 'Maps',
            link: '/profile/components/maps',
          },
        ]}
        glyph="components"
      />
    </ul>
  </nav>
);

// function mapStateToProps(store) {
//   return {
//     sidebarOpened: store.navigation.sidebarOpened,
//     sidebarStatic: store.navigation.sidebarStatic,
//   };
// }

// export default withRouter(connect(mapStateToProps)(Sidebar));

export default Sidebar