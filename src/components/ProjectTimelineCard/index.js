import {AiFillCalendar} from 'react-icons/ai'
import './index.css'

const ProjectTimelineCard = props => {
  const {projectDetails} = props
  const {
    projectTitle,
    description,
    imageUrl,
    duration,
    projectUrl,
    categoryId,
  } = projectDetails

  return (
    <div className="project-container">
      <div className="project-img-container">
        <img src={imageUrl} alt={categoryId} className="project-img-styles" />
      </div>
      <div className="project-heading-container">
        <h2 className="project-heading">{projectTitle}</h2>
        <p className="project-duration">
          <AiFillCalendar className="icon-styles" /> {duration}
        </p>
      </div>
      <p className="project-description">{description}</p>
      <a href={projectUrl} className="project-link">
        Visit
      </a>
    </div>
  )
}

export default ProjectTimelineCard
