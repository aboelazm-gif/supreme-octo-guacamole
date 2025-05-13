import React from 'react';
import '../styles/heads.css'; // Your existing styles
import boardMembers from '../jsons/boardmembers.json';

export const Heads = () => {
  const subTeamHeads = boardMembers.filter(member =>
    member.role.startsWith('Sub-Team Head')
  );

  return (
    <div className="heads-container">
      {subTeamHeads.map((member, index) => (
        <div className="head-card" key={index}>
          <img src={member.pfp} alt={member.name} />
          <div className="head-info">
            <h4>{member.name}</h4>
            <h5>{member.sub}</h5>
            <h3>{member.role}</h3>
          </div>
        </div>
      ))}
    </div>
  );
};

