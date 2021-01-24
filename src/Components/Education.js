import React, { Component } from 'react';

class Resume extends Component {
  render() {
    if (this.props.data) {
      var education = this.props.data.education.map(function (education) {
        return (
          <div key={education.school}>
            <h5>{education.school}</h5>
            <p className='info'>
              {education.degree} <span>&bull;</span>
              <em className='date'>{education.graduated}</em>
            </p>
            <p>{education.description}</p>
          </div>
        );
      });
      var work = this.props.data.certifications.map(function (certification) {
        return (
          <div key={certification.name}>
            <h5>{certification.name}</h5>
            <p className='info'>
              {certification.issuingOrganization} :
              <a href={certification.url} target='_blank'>
                See certification
              </a>
            </p>
          </div>
        );
      });
    }

    return (
      <section id='resume'>
        <div className='row education'>
          <div className='three columns header-col'>
            <h1>
              <span>Education</span>
            </h1>
          </div>

          <div className='nine columns main-col'>
            <div className='row item'>
              <div className='twelve columns'>{education}</div>
            </div>
          </div>
        </div>

        <div className='row work'>
          <div className='three columns header-col'>
            <h1>
              <span>Certification</span>
            </h1>
          </div>

          <div className='nine columns main-col'>{work}</div>
        </div>
      </section>
    );
  }
}

export default Resume;
