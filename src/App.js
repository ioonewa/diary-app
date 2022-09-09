import './styles/app.css';
import React from 'react';
import { Routes, Route } from "react-router-dom"
import Timetable from './components/timetable';
import DoingList from './components/doinglist';
import About from './components/about';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      mphrase: true,
    }

    this.setMphrase = this.setMphrase.bind(this)
  }

  setMphrase(value){
    this.setState({mphrase: value})
  }

  render(){
    return (
      <div className="App">
        <Routes>
          <Route path="/" element={<Timetable Mphrase={this.state.mphrase} setMphrase={this.setMphrase} />} />
          <Route path="/doing-list" element={<DoingList />} />
          <Route path="/about" element={<About Mphrase={this.state.mphrase} setMphrase={this.setMphrase} />} />
        </Routes>
      </div>
    )
  }
}

export default App;