import {Component} from 'react'
import {Chrono} from 'react-chrono'

import CourseTimelineCard from '../CourseTimelineCard'
import ProjectTimelineCard from '../ProjectTimelineCard'
import './index.css'

class TimelineView extends Component {
  getItems = () => {
    const {timelineItemsList} = this.props

    const items = timelineItemsList.map(eachItem => ({title: eachItem.title}))

    return items
  }

  render() {
    const {timelineItemsList} = this.props
    const items = this.getItems()

    return (
      <div className="bg-container">
        <div className="journey-container">
          <h1 className="journey-heading">MY JOURNEY OF CCBP 4.0</h1>
          <div className="container">
            <div className="chrono-container">
              <Chrono mode="VERTICAL_ALTERNATING" items={items} color="#0967d2">
                {timelineItemsList.map(eachItem =>
                  eachItem.categoryId === 'COURSE' ? (
                    <CourseTimelineCard
                      key={eachItem.id}
                      eachCourse={eachItem}
                    />
                  ) : (
                    <ProjectTimelineCard
                      key={eachItem.id}
                      eachProject={eachItem}
                    />
                  ),
                )}
              </Chrono>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default TimelineView
