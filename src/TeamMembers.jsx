import TeamMemberCard from './TeamMemberCard';

const TeamMembers = ({ employees, selectedTeam, cardClick }) => {
  return (
    employees.map((employee) => (
      <TeamMemberCard employee={employee} cardClick={cardClick} selectedTeam={selectedTeam} />
    ))
  )
}

export default TeamMembers;
