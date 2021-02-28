import { useState } from 'react'
import Drawer from '../../components/Drawer';
import DashboardIcon from '@material-ui/icons/Dashboard';
import MailIcon from '@material-ui/icons/Mail';
import PersonIcon from '@material-ui/icons/Person';
import { Route, useLocation, Switch } from 'react-router-dom'

const navList = [
  {
    Icon: DashboardIcon,
    text: 'Dashboard',
    path: '/organization'
  },
  {
    Icon: MailIcon,
    text: 'Verify Patient',
    path: '/organization/verify'
  },
  {
    Icon: PersonIcon,
    text: 'Manage Patients',
    path: '/organization/patients'
  }
]

const Organization = () => {
  const { pathname } = useLocation();
  const navActive = navList.find(e => e.path === pathname)?.text;
  const [active, setActive] = useState(navActive);

  return (
    <Drawer navList={navList} active={active} setActive={setActive}>
      <Switch>
        <Route exact path='/organization'>
          organization
        </Route>
        <Route exact path='/organization/verify'>
          verify account
        </Route>
        <Route exact path='/organization/patients'>
          Patients
        </Route>
      </Switch>
    </Drawer>
  )
}


export default Organization;