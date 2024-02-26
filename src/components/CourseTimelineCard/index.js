import {AiFillClockCircle} from 'react-icons/ai'
import './index.css'

const CourseTimelineCard = props => {
  const {courseDetails} = props
  const {
    categoryId,
    courseTitle,
    duration,
    description,
    tagsList,
  } = courseDetails

  return (
    <div className="course-container">
      <div className="course-heading-container">
        <h2 className="course-heading">{courseTitle}</h2>
        <p className="course-duration">
          <AiFillClockCircle className="icon-styles" /> {duration}
        </p>
      </div>
      <p className="course-description">{description}</p>
      <ul className="course-tags-container">
        {tagsList.map(eachObj => (
          <li key={eachObj.id} id={categoryId} className="course-tag-item">
            <p className="tag-name">{eachObj.name}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CourseTimelineCard
