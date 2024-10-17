import './experienceContainer.css'; // Make sure to create this CSS file

const ExperienceContainer = ({props}) => {
  return (
    <div>
        <h3 className='experience'>{props.experience}</h3>
        <p className='period'>{props.period}</p>
    </div>
  );
};

export default ExperienceContainer;