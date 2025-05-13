import React from 'react';
import '../styles/member.css';
import boardMembers from '../jsons/boardmembers.json';

export const Member = () => {
  const advisor = boardMembers.find(m => m.role === 'Faculty Advisor');
  const teamLeader = boardMembers.find(m => m.role === 'Team Leader');

  return (
    <div className="tree-container">
      {/* Faculty Advisor */}
      {advisor && (
        <div className="tree-node">
          <div className="member-card">
            <img src={advisor.pfp} alt={advisor.name} />
            <div className="member-info">
              <h3>{advisor.role}</h3>
              <h4>{advisor.name}</h4>
            </div>
          </div>

          {/* Team Leader as child */}
          {teamLeader && (
            <div className="tree-branch">
              <div className="tree-node">
                <div className="member-card">
                  <img src={teamLeader.pfp} alt={teamLeader.name} />
                  <div className="member-info">
                    <h3>{teamLeader.role}</h3>
                    <h4>{teamLeader.name}</h4>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
