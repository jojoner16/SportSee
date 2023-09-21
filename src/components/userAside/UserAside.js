import React from 'react';
import energy from '../../assets/calories-icon.svg';
import chicken from '../../assets/proteines-icon.svg';
import apple from '../../assets/glucides-icon.svg';
import cheeseburger from '../../assets/lipides-icon.svg';
import '../../styles/components/userAside.css';

function Card({ userKeyData, unit, subtitle, className, logo }) {
  return (
    <div className={`cardContainer ${className}`}>
      <div className="cardWrapper">
        <div className="iconWrapper">
          <img src={logo} alt="icon" className="cardIcon" />
        </div>
        <div className="title">
          <p className="cardTitle">
            {userKeyData.toLocaleString('en-US')}
            {unit}
          </p>
          <p className="cardSubtitle">{subtitle}</p>
        </div>
      </div>
    </div>
  );
}

function DashboardAside({ userData }) {
  if (!userData || !userData.keyData) {
    return null;
  }

  const { keyData } = userData;

  return (
    <div className="dashboardAside">
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
