import React, { useState } from 'react'
import { Card, CardBody, Badge } from 'reactstrap'

import { Fade } from 'react-awesome-reveal'

const EducationCard = ({ education }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Fade
      left
      onVisibilityChange={(inView) => {
        setIsOpen(inView)
      }}
      style={{ opacity: !isOpen ? 0 : 1 }}
      duration={2000}>
      <Card className='card-lift--hover shadow mt-4'>
        <CardBody>
          <div className='d-flex px-3'>
            <div className='pl-4'>
              <h5 className='text-info'>{education.schoolName}</h5>
              <h6>{education.subHeader}</h6>
              <Badge color='info' className='mr-1'>
                {education.duration}
              </Badge>
              <p className='description mt-3'>{education.desc}</p>
              <ul>
                {education.descBullets
                  ? education.descBullets.map((desc) => {
                      return <li key={desc}>{desc}</li>
                    })
                  : null}
              </ul>
            </div>
          </div>
        </CardBody>
      </Card>
    </Fade>
  )
}

export default EducationCard
