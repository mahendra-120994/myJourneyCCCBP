import {AiFillClockCircle} from 'react-icons/ai'
import './index.css'

const CourseTimelineCard = props => {
  const {eachCourse} = props
  const {courseTitle, description, duration, tagsList} = eachCourse
  return (
    <div className="course-card">
      <div className="course-title-duration">
        <h1 className="title">{courseTitle}</h1>
        <div className="duration-icon">
          <AiFillClockCircle />
          <p className="duration">{duration}</p>
        </div>
      </div>

      <p className="description">{description}</p>
      <ul className="tagList">
        {tagsList.map(tag => (
          <p key={tag.id} className="tag-item">
            {tag.name}
          </p>
        ))}
      </ul>
    </div>
  )
}
export default CourseTimelineCard
