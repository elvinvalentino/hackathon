import React from 'react';

import Content from '../components/Content';
import Hero from '../components/Hero';
import Brands from '../components/Brands';
import Record from '../components/Record';
import RegistrationFlow from '../components/RegistrationFlow';

const index = () => {
  return (
    <Content>
      <Hero />
      <Brands />
      <Record />
      <RegistrationFlow />
    </Content>
  )
}

export default index;