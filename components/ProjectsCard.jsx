import React, { useState, useEffect } from 'react'

import { Card, CardBody, Col, Button } from 'reactstrap'

import { Fade } from 'react-awesome-reveal'

const ProjectsCard = ({ data }) => {
  const len = data.imagenes.length
  const [imagen, setImagen] = useState(0)
  useEffect(() => {
    if (len > 0) {
      setTimeout(() => {
        setImagen((imagen + 1) % len)
      }, 4000)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [imagen])
  return (
    <Col lg='6'>
      <Fade bottom duration={2000}>
        <Card className='shadow-lg--hover shadow mt-4'>
          <CardBody>
            <div className='d-flex px-3'>
              <div className='pl-4'>
                <h3>{data.name}</h3>
                {data.name != 'Estudiente' && (
                  <div className='pl-4'>
                    {data.imagenes.length > 0 && (
                      <img
                        src={data.imagenes[imagen]}
                        style={{
                          left: 0,
                          right: 0,
                          top: '7rem',
                          marginLeft: 'auto',
                          marginRight: 'auto',
                          width: data.name == 'Estudiente' ? '10rem' : '20rem',
                          height: data.name == 'Estudiente' ? '16rem' : '12rem',
                        }}
                        alt={data.imagenes[imagen]}
                      />
                    )}
                  </div>
                )}
                <p className='description mt-3'>{data.desc}</p>
                {data.github ? (
                  <Button className='btn-icon' color='github' href={data.github} target='_blank' rel='noopener' aria-label='Github'>
                    <span className='btn-inner--icon'>
                      <i className='fa fa-github' />
                    </span>
                  </Button>
                ) : null}
              </div>
              {data.name == 'Estudiente' && (
                <div className='pl-3'>
                  {data.imagenes.length > 0 && (
                    <img
                      src={data.imagenes[imagen]}
                      style={{
                        left: 0,
                        right: 0,
                        top: '7rem',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        width: data.name == 'Estudiente' ? '10rem' : '20rem',
                        height: data.name == 'Estudiente' ? '16rem' : '12rem',
                      }}
                      alt={data.imagenes[imagen]}
                    />
                  )}
                </div>
              )}
            </div>
          </CardBody>
        </Card>
      </Fade>
    </Col>
  )
}

export default ProjectsCard
