import React from 'react';
import energy from '../../assets/calories-icon.svg';
import chicken from '../../assets/proteines-icon.svg';
import apple from '../../assets/glucides-icon.svg';
import cheeseburger from '../../assets/lipides-icon.svg';
import styled from 'styled-components';

const dashboardAside = {
  marginLeft: '14rem',
};

const CardWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const CardContainer = styled.div`
  padding: 10px;
  margin: 10px;
  background-color: #fbfbfb;
  box-shadow: 0px 2px 4px 0px #00000005;
`;

const IconWrapper = styled.div`
  margin-right: 1rem;
`;

function Card({ userKeyData, unit, subtitle, className, logo }) {
  return (
    <CardContainer>
      <CardWrapper className={`card ${className}`}>
        <IconWrapper>
          <img src={logo} alt="" className="card-icon center" />
        </IconWrapper>
        <div>
          <p className="card-title">
            {userKeyData.toLocaleString('en-US')}
            {unit}
          </p>
          <p className="card-subtitle">{subtitle}</p>
        </div>
      </CardWrapper>
    </CardContainer>
  );
}

function DashboardAside({ userData }) {
  if (!userData || !userData.keyData) {
    return null;
  }

  const { keyData } = userData;

  return (
    <div className="dashboardAside" style={dashboardAside}>
      <Card
        userKeyData={keyData.calorieCount}
        unit="kCal"
        subtitle="Calories"
        className="calorie"
        logo={energy}
      />
      <Card
        userKeyData={keyData.proteinCount}
        unit="g"
        subtitle="Proteines"
        className="protein"
        logo={chicken}
      />
      <Card
        userKeyData={keyData.carbohydrateCount}
        unit="g"
        subtitle="Glucides"
        className="carbohydrate"
        logo={apple}
      />
      <Card
        userKeyData={keyData.lipidCount}
        unit="g"
        subtitle="Lipides"
        className="lipid"
        logo={cheeseburger}
      />
    </div>
  );
}

export default DashboardAside;
