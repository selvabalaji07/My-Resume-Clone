import React from 'react';
import './styles/App.css';
import Header from './components/Header';
import Section from './components/Section';
import Projects from './components/Projects';
import './data/resumeData';
import resumeData from './data/resumeData';

function App() {
  return (
    <div className="container">
      <Header/>
      <div className="content">
           {Object.keys(resumeData).map((key)=>{
            if (key === "Projects") {
              return <Projects key={key} projects={resumeData[key]} />;
            }
            return <Section key={key} title={key} items={resumeData[key]} />;
            })}
      </div>
    </div>
  );
}

export default App;
