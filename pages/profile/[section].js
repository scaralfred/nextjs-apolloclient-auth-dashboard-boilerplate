import React, {useState} from 'react';
import cx from 'classnames';
import { useRouter } from 'next/router'
import Dashboard from '../../components/Profile/Dashboard/Dashboard'
import s from './profile.module.scss';
import Header from '../../components/Profile/Header/Header';
import Footer from '../../components/Profile/Footer/Footer';
import Sidebar from '../../components/Profile/Sidebar/Sidebar';
import About from '../../components/Profile/About/About';
import Typography from '../../components/Profile/Typography/Typography';
import Tables from '../../components/Profile/Tables/Tables';
import Notifications from '../../components/Profile/Notifications/Notifications';

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
          {section == "dashboard" && <Dashboard />}
          {section == "about" && <About />}
          {section == "typography" && <Typography />}
          {section == "tables" && <Tables />}
          {section == "notifications" && <Notifications />}
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default Profile