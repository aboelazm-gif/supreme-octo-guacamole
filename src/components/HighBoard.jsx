import React from 'react';
import '../styles/member.css';

export const HighBoard = ({boardMember}) => {


  return (
          <div className="member-card">
            <img src={boardMember.pfp} alt={boardMember.name} />
            <div className="member-info">
              <h3>{boardMember.role}</h3>
              <h4>{boardMember.name}</h4>
            </div>
          </div>
  );
};
