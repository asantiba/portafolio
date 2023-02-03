import { Icon } from '@iconify/react'
import React, { Fragment, useState } from 'react'
import { Col, Container, Row, UncontrolledTooltip } from 'reactstrap'
import { Fade } from 'react-awesome-reveal'
import GreetingLottie from '../components/DisplayLottie'
import { skillsSection } from '../portfolio'
import { cloudSkillsSection } from '../portfolio'

const Skills = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isOpenCloud, setIsOpenCloud] = useState(false)

  return (
    skillsSection && (
      <Container className='text-center my-5 section section-lg'>
        <h1 className='h1'>{skillsSection.title}</h1>
        <p className='lead'>{skillsSection.subTitle}</p>
        {/* Skills Section */}
        <Row className='my-5' style={{ opacity: !isOpen ? 0 : 1, marginTop: '24px !important' }}>
          <Col lg='6' className='order-1' style={{ marginTop: 0 }}>
            <Fade
              direction='left'
              duration={4000}
              onVisibilityChange={(inView) => {
                setIsOpen(inView)
              }}>
              <GreetingLottie animationPath={skillsSection.data.lottieAnimationFile} style={{ width: '420px' }} />
            </Fade>
          </Col>
          <Col lg='6' className='order-1 order-lg-2' style={{ flexFlow: 1, height: '90vh' }}>
            <Fade direction='right' duration={1000} style={{ opacity: !isOpen ? 0 : 1 }}>
              <h3 className='h3 mb-2'>{skillsSection.data.title}</h3>
              <div className='d-flex justify-content-center flex-wrap mb-2'>
                {skillsSection.data.softwareSkills.map((skill, i) => {
                  return (
                    <Fragment key={i}>
                      <div className='icon icon-lg icon-shape shadow-sm rounded-circle m-1' id={skill.skillName.replace(/\s/g, '')}>
                        <Icon icon={skill.fontAwesomeClassname} data-inline='false'></Icon>
                      </div>
                      <UncontrolledTooltip delay={0} placement='bottom' target={skill.skillName.replace(/\s/g, '')}>
                        {skill.skillName}
                      </UncontrolledTooltip>
                    </Fragment>
                  )
                })}
              </div>
              <div>
                {skillsSection.data.skills.map((skill, i) => {
                  return <p key={i}>{skill}</p>
                })}
              </div>
            </Fade>
          </Col>
        </Row>
        {/* Cloud Skills Section */}
        <Row className='my-5' style={{ opacity: !isOpenCloud ? 0 : 1 }}>
          <Col lg='6' className='order-2 order-lg-1'>
            <Fade
              direction='left'
              duration={4000}
              onVisibilityChange={(inView) => {
                setIsOpenCloud(inView)
              }}>
              <GreetingLottie animationPath={cloudSkillsSection.lottieAnimationFile} style={{ width: '500px' }} />
            </Fade>
          </Col>
          <Col lg='6' className='order-1 order-lg-2' style={{ flexFlow: 1, height: '90vh' }}>
            <Fade direction='right' duration={1000} style={{ opacity: !isOpenCloud ? 0 : 1 }}>
              <h3 className='h3 mb-2'>{cloudSkillsSection.title}</h3>
              <div className='d-flex justify-content-center flex-wrap mb-2'>
                {cloudSkillsSection.softwareSkills.map((skill, i) => {
                  return (
                    <Fragment key={i}>
                      <div className='icon icon-lg icon-shape shadow-sm rounded-circle m-1' id={skill.skillName.replace(/\s/g, '')}>
                        <Icon icon={skill.fontAwesomeClassname} data-inline='false'></Icon>
                      </div>
                      <UncontrolledTooltip delay={0} placement='bottom' target={skill.skillName.replace(/\s/g, '')}>
                        {skill.skillName}
                      </UncontrolledTooltip>
                    </Fragment>
                  )
                })}
              </div>
              <div>
                {cloudSkillsSection.skills.map((skill, i) => {
                  return <p key={i}>{skill}</p>
                })}
              </div>
            </Fade>
          </Col>
        </Row>
      </Container>
    )
  )
}

export default Skills
