import femaleProfile from './images/femaleProfile.jpg';
import maleProfile from './images/maleProfile.jpg';

const TeamMemberCard = ({ employee, selectedTeam, cardClick }) => {
  return (
    <div key={employee.id} id={employee.id} className={employee.teamName === selectedTeam ? 'card m-2 standout' : 'card m-2'} style={{ cursor: "pointer" }} onClick={cardClick}>
      {(employee.gender === "male") ? <img src={maleProfile} className="card-img-top" />
        : <img src={femaleProfile} className="card-img-top" />}
      <div className="card-body" >
        <h5 className="card-title"> Full Name: {employee.fullName}</h5>
        <p className="card-text" ><b> Designation : {employee.designation}</b></p>
      </div>
    </div>
  )

}

export default TeamMemberCard;