import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  
changeStatus = (petId) =>{
  
  this.props.onAdoptPet(petId)


}

  render() {


  return <div className="ui cards">{this.props.selectedpet.map(pet =>  <Pet changeStatus={this.changeStatus}  pets={pet}/>) }</div>
  }
}

export default PetBrowser
