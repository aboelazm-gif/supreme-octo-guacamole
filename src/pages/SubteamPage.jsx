import React from 'react';
import subteam from "../jsons/teamMembers.json";
import subHead from "../jsons/boardmembers.json";
import { useParams } from 'react-router-dom';
import { HighBoard } from '../components/HighBoard';

export const SubteamPage = () => {
    const {subteamName} = useParams();
    const subhead = subHead.filter(sm=>sm.sub.match(subteamName));
    const sub = subteam.filter(m=>m.sub1.match(subteamName) || m.sub2.match(subteamName));
    const sortedSub = sub.sort((a,b) => a.name.localeCompare(b.name));
    return (<>
    <HighBoard boardMember={subhead[0]} />
    <div>{sortedSub.map((m,index) => (
        <div key={index}>
            {m.name}
        </div>
    ))}</div>
    </>
  )
}
