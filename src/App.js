import React, { Component } from 'react';
import axios from 'axios';
import Cards from './Cards';
import Welcome from './Welcome';
import './reset.css';
import './App.css';
import 'typeface-lobster';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [],
      name: '',
      image: '',
      said: [],
      newName: ''

    }
  }

  componentDidMount() {
    axios.get('/api/get-cards').then(res => {
      this.setState({
        cards: res.data
      })
    })
  }

  updateName(e) {
    this.setState({
      name: e.target.value
    })
  }

  updateImage(e) {
      this.setState({
        image: e.target.value
      })
  }
  submit() {
    let { name, image } = this.state;
    axios.post('/api/create-card', { name: name, image: image }).then(res => {
      this.setState({
        cards: res.data,
        name: '',
        image: ''
      })
    })
  }
  edit(id) {
    let { newName } = this.state
    axios.put(`/api/edit-card/${id}`, { name: newName }).then(res => {
      this.setState({
        cards: res.data,
        newName: ''
      })
    })
  }
  editNewName(e) {
    this.setState({
      newName: e.target.value
    })
  }

  delete(id) {
    axios.delete(`/api/delete-card/${id}`).then(res => {
      this.setState({
        cards: res.data
      })
    })
  }

  render() {
    let { cards, name, image, newName,  } = this.state;

    return (
      <div className="parent">
        <Welcome />
        <div className="layout">
          <div className="create">
            <h1 >Create a new card</h1>
            <input value={name} placeholder="name" onChange={(e) => this.updateName(e)} />
            <input value={image} placeholder="URL" onChange={(e) => this.updateImage(e)} />
            <button onClick={() => this.submit()} disabled={!name || !image}>
            Submit</button>

          </div>
          <div className="card">
            {cards.map((ele) => {
              return (
                <div className="hate" key={ele.id}>
                <figure >
                  <img src={ele.image} alt="" />
                </figure>
                  <div className="card-container">
                    <h3>Name: {ele.name}</h3>
                    <input placeholder="Update Image" onChange={(e) => this.editNewName(e)} />
                    {/* <h3>Fav. Quote: {ele.quote}</h3> */}
                    <Cards />
                  </div>
                  <section className="EDButtons">
                    <button onClick={() => this.edit(ele.id)}>Edit Pic</button>
                    <button onClick={() => this.delete(ele.id)}>Delete</button>
                  </section>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
