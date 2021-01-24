import React, { Component } from 'react';
import ReactGA from 'react-ga';
import $ from 'jquery';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Education from './Components/Education';
import Contact from './Components/Contact';
import Skills from './Components/Skills';
import Testimonials from './Components/Testimonials';
import Portfolio from './Components/Portfolio';
import _ from 'lodash';
import moment from 'moment';
window._ = _;
window.moment = moment;
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foo: 'bar',
      resumeData: {},
    };
  }

  getResumeData() {
    $.ajax({
      url: '/resumeData.json',
      dataType: 'json',
      cache: false,
      success: function (data) {
        this.setState({ resumeData: data });
      }.bind(this),
      error: function (xhr, status, err) {
        console.log(err);
        alert(err);
      },
    });
  }

  componentDidMount() {
    this.getResumeData();
  }

  render() {
    return (
      <div className='App'>
        <Header data={this.state.resumeData.main} />
        <About data={this.state.resumeData.main} />
        <Education data={this.state.resumeData.resume} />
        <Portfolio
          data={this.state.resumeData.portfolio}
          data2={this.state.resumeData.resume}
        />
        <Skills data={this.state.resumeData.resume} />
        <Testimonials data={this.state.resumeData.testimonials} />
        {/* <Contact data={this.state.resumeData.main} /> */}
        <Footer data={this.state.resumeData.main} />
      </div>
    );
  }
}

export default App;
