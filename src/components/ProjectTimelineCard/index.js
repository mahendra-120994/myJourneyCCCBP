import {AiFillCalendar} from 'react-icons/ai'
import './index.css'

const ProjectTimelineCard = props => {
  const {eachProject} = props
  const {
    projectTitle,
    description,
    duration,
    imageUrl,
    projectUrl,
  } = eachProject
  console.log(eachProject)
  return (
    <div className="course-card">
      <img src={imageUrl} className="project-img" alt="project" />
      <div className="project-title-duration">
        <h1 className="title">{projectTitle}</h1>
        <div className="duration-icon">
          <AiFillCalendar />
          <p className="duration">{duration}</p>
        </div>
      </div>
      <p className="description">{description}</p>
      <a href={projectUrl} className="project-link">
        Visit
      </a>
    </div>
  )
}
export default ProjectTimelineCard
