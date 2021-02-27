import { useState } from 'react'
import Drawer from '../../components/Drawer';
import DashboardIcon from '@material-ui/icons/Dashboard';
import MailIcon from '@material-ui/icons/Mail';
import PersonIcon from '@material-ui/icons/Person';
import { Route, useLocation } from 'react-router-dom'

const navList = [
  {
    Icon: DashboardIcon,
    text: 'Dashboard',
    path: '/admin'
  },
  {
    Icon: MailIcon,
    text: 'Verify Account',
    path: '/admin/verify'
  },
  {
    Icon: PersonIcon,
    text: 'Manage Users',
    path: '/admin/users'
  }
]

const Admin = () => {
  const location = useLocation();
  console.log(location);
  const [active, setActive] = useState('Dashboard');

  return (
    <Drawer navList={navList} active={active} setActive={setActive}>
      <Route exact path='/admin'>
        admin
      </Route>
      <Route exact path='/admin/verify'>
        verify account
      </Route>
      <Route exact path='/admin/users'>
        Users
      </Route>
    </Drawer>
  )
}

export default Admin;