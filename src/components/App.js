import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }


  onChangeType = (pet) =>{
  
    this.setState({
      filters:{
        type: pet
      }
    })
  }

 changePetState = (petObj) => {
    this.setState({
      pets: petObj
    })
  }




  onFindPetsClick = () =>{
  let endPoint = '/api/pets'

  if (this.state.filters.type != 'all'){
    endPoint += `?type=${this.state.filters.type}`
  }

  fetch(endPoint)
  .then(resp => resp.json())
.then(petObj => this.changePetState(petObj))
  }



  onAdoptPet = (idPet) =>{
    const pets = this.state.pets.map(pet => { 
      return pet.id === idPet ? {...pet, isAdopted:!pet.isAdopted } : pet
    });
    this.setState({pets: pets})
  }

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onFindPetsClick={this.onFindPetsClick} onChangeType={this.onChangeType}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser onAdoptPet={this.onAdoptPet} selectedpet={this.state.pets}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
