import React from 'react';
import energy from '../../assets/calories-icon.svg';
import chicken from '../../assets/proteines-icon.svg';
import apple from '../../assets/glucides-icon.svg';
import cheeseburger from '../../assets/lipides-icon.svg';
import styled from 'styled-components';

const dashboardAside = {
  marginLeft: '10rem',
};

const CardWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const CardContainer = styled.div`
  display: flex;
  width: 258px;
  height: 124px;
  align-items: center;
  border-radius: 10px;
  margin-bottom: 2.8rem;
  background-color: #fbfbfb;
  box-shadow: 0px 2px 4px 0px #00000005;
`;

const IconWrapper = styled.div`
  margin-right: 1.2rem;
`;

const title = {
  lineHeight: '1.5rem',
};

const cardTitle = {
  fontSize: '1.25rem',
  fontWeight: '700',
  color: '#282D30',
};

const cardSubtitle = {
  fontSize: '0.875rem',
  fontWeight: '700',
  color: '#74798C',
};

const cardIcon = {
  marginLeft: '2rem',
};

function Card({ userKeyData, unit, subtitle, className, logo }) {
  return (
    <CardContainer>
      <CardWrapper className={`card ${className}`}>
        <IconWrapper>
          <img src={logo} alt="icon" style={cardIcon} />
        </IconWrapper>
        <div style={title}>
          <p style={cardTitle}>
            {userKeyData.toLocaleString('en-US')}
            {unit}
          </p>
          <p style={cardSubtitle}>{subtitle}</p>
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
