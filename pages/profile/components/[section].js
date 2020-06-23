import React, {useState} from 'react';
import cx from 'classnames';
import { useRouter } from 'next/router'
import s from '../profile.module.scss';
import Header from '../../../components/Profile/Header/Header';
import Footer from '../../../components/Profile/Footer/Footer';
import Sidebar from '../../../components/Profile/Sidebar/Sidebar';
import Buttons from '../../../components/Profile/Components/Buttons/Buttons';
import Charts from '../../../components/Profile/Components/Charts/Charts';
import Icons from '../../../components/Profile/Icons/Icons';
import Maps from '../../../components/Profile/Maps/Google';

const Profile = () => {
  const router = useRouter()
  const { section } = router.query

  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className={s.root}>
      <Sidebar />
      <div
        className={cx(s.wrap, {[s.sidebarOpen]: sidebarOpen})}
      >
        <Header
          sidebarToggle={() => setSidebarOpen(!sidebarOpen)}
        />
        <main className={s.content}>
          {section == "buttons" && <Buttons />}
          {section == "charts" && <Charts />}
          {section == "icons" && <Icons />}
          {section == "maps" && <Maps />}
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default Profile