import React from 'react';
import Icon1 from '../../images/Revenue.svg';
import Icon2 from '../../images/Virual.svg';
import Icon3 from '../../images/Card.svg';
import {
    ServicesContainer,
    ServicesH1,
    ServicesWrapper,
    ServicesCard,
    ServicesIcon,
    ServicesH2,
    ServicesP
} from './ServicesElements'

const Services = () => {
  return (
    <ServicesContainer>
        <ServicesH1>Our Services</ServicesH1>
        <ServicesWrapper>
            <ServicesCard>
                <ServicesIcon src={Icon1}></ServicesIcon>
                <ServicesH2>Reduce Expenses</ServicesH2>
                <ServicesP>We help reduce your fees and increase your overall revenue</ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon2}></ServicesIcon>
                <ServicesH2>Virual Offices</ServicesH2>
                <ServicesP>You can access our platform online anywhere in the world services</ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon3}></ServicesIcon>
                <ServicesH2>Reduce Expenses</ServicesH2>
                <ServicesP>Unlock our special membership card that returns 5% cash back</ServicesP>
            </ServicesCard>
        </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services