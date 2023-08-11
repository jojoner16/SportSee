import React from 'react';
import styled from 'styled-components';
import UserData from './UserData';
// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Legend,
// } from 'recharts';

const UserProfileContainer = styled.div`
  background-color: #f9f9f9;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

function UserProfil(props) {
  console.log(props.firstName);
  return (
    <UserProfileContainer>
      {
        <div>
          <h2>User Profile</h2>
          <p>Name: {props.firstName}</p>
        </div>
      }

      {<UserData userData={props.firstName} />}

      {/* {userActivity && (
        <div>
          <h2>User Activity</h2>
          <LineChart width={500} height={300} data={userActivity.sessions}>
            <XAxis dataKey="day" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="kilogram"
              name="Kilogram"
              stroke="#8884d8"
            />
            <Line
              type="monotone"
              dataKey="calories"
              name="Calories"
              stroke="#82ca9d"
            />
          </LineChart>
        </div>
      )} */}
    </UserProfileContainer>
  );
}

export default UserProfil;
