import React, {Component} from 'react'
import Table from './Nav/Table'
import Form from './Nav/Form'
import Header from './Components/Header'




class App extends Component {
    handleSubmit = (character) => {
        
      this.setState({characters: [...this.state.characters, character]})
    }
    removeCharacter = (index) => {
        const {characters} = this.state
      
        this.setState({
          characters: characters.filter((character, i) => {
            return i !== index
          }),
        })
      }
      state = {
        characters: [ ]
      }

  render() {
    
      const { characters } = this.state
    
    return (
      <>
        <Header/>
      <div className="container">
        
      </div>
      <div className="container">
        <Table characterData={characters} removeCharacter={this.removeCharacter}/>
        <Form  handleSubmit={this.handleSubmit}/>
      </div>
      
      </>
    )
  }
}

export default App