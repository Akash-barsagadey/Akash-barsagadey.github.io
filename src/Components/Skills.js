import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Card, Col, Row } from 'antd';
class Skills extends Component {
  render() {
    if (this.props.data) {
      var skillmessage = this.props.data.skillmessage;
      var skills = this.props.data.skills.map(function (skills) {
        var className = 'bar-expand ' + skills.name.toLowerCase();
        return (
          <li key={skills.name}>
            <span style={{ width: skills.level }} className={className}></span>
            <em>{skills.name}</em>
          </li>
        );
      });

      var skills2 = this.props.data.skills.map(function (skills) {
        return <p>{skills.name}</p>;
      });

      var technicalSkills = this.props.data.technicalSkills.map(function (
        technicalSkill
      ) {
        return <p>{technicalSkill.name}</p>;
      });
    }

    return (
      <section id='skills'>
        <div className='site-card-wrapper'></div>
        <div className='row skill'>
          <div className='three columns header-col'>
            <h1>
              <span>Skills</span>
            </h1>
          </div>

          <Row gutter={16}>
            <Col span={12}>
              <Card title='Technical skills' bordered={false}>
                {technicalSkills}
              </Card>
            </Col>
            <Col span={12}>
              <Card title='Tech stacks' bordered={false}>
                {/* <div className='nine columns main-col'>
                  <p>{skillmessage}</p>
                  <div className='bars'>
                    <ul className='skills'>{skills}</ul>
                  </div>
                </div> */}
                {skills2}
              </Card>
            </Col>
          </Row>
        </div>
      </section>
    );
  }
}

export default Skills;
