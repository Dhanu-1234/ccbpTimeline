import {Chrono} from 'react-chrono'
import CourseTimelineCard from '../CourseTimelineCard'
import ProjectTimelineCard from '../ProjectTimelineCard'
import './index.css'

const TimelineView = props => {
  const {timelineItemsList} = props
  return (
    <div className="content-container">
      <h2 className="main-heading">
        MY JOURNEY OF <span className="highlighted-text">CCBP 4.0</span>
      </h2>
      <div className="chrono-container">
        <Chrono
          mode="VERTICAL_ALTERNATING"
          items={timelineItemsList}
          theme={{
            primary: '#2b237c',
            secondary: '#ffffff',
            cardBgColor: '#ffffff',
            cardForeColor: '#0967d2',
            titleColor: '#0967d2',
          }}
        >
          {timelineItemsList.map(eachObj => {
            if (eachObj.categoryId === 'COURSE') {
              return (
                <CourseTimelineCard key={eachObj.id} courseDetails={eachObj} />
              )
            }
            return (
              <ProjectTimelineCard key={eachObj.id} projectDetails={eachObj} />
            )
          })}
        </Chrono>
      </div>
    </div>
  )
}

export default TimelineView
