import React from 'react';
import Mainpage from './page/Mainpage';
import Aboutme from './page/Aboutme'
import PermIdentityIcon from '@mui/icons-material/PermIdentity';

const routes = [
  {
    path: "/",
    component: Mainpage,
    propsLayout: {
      title: "Mainpage",
      icon: <PermIdentityIcon fontSize="large" />,
    },
  },
  {
    path: "/about",
    component: Aboutme,
    propsLayout: {
      title: "Aboutme",
      icon: <PermIdentityIcon fontSize="large" />,
    },
  },
  

];

export default routes;