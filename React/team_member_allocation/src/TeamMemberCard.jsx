import femaleProfile from "./images/femaleProfile.jpg";
import maleProfile from "./images/maleProfile.jpg";

const TeamMemberCard = ({employee, handleEmployeeCardClick, selectedTeam}) => {
    return (
        <div 
            id={employee.id} 
            key={employee.id}
            className={
                employee.teamName === selectedTeam
                    ? "card m-2 standout"
                    : "card m-2"
            } 
            style={{cursor: "pointer"}} 
            onClick={handleEmployeeCardClick}
        >
            {
                (employee.gender === "male")
                    ? <img src={maleProfile} className="card-img-top" alt="#" />
                    : <img src={femaleProfile} className="card-img-top" alt="#" />
            }
            <div className="card-body">
                <h5 className="card-title">{employee.fullName}</h5>
                <p className="card-text"><b>Designation:</b>{employee.designation}</p>
            </div>
        </div>
    );
};

export default TeamMemberCard;