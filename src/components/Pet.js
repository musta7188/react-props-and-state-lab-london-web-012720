import React from 'react'

class Pet extends React.Component {



  render() {
    const {name, age, weight, type, isAdopted, gender, id} = this.props.pets

    let symbol = gender == 'male'? '⚦ ': '⚢'


    let button = isAdopted == true?  <button className="ui disabled button" >Already adopted</button> :  <button className="ui primary button" onClick={(e) =>this.props.changeStatus(id)}>Adopt pet</button>

    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {name}
    
          </a>
          <div className="meta">
    <span className="date">{type} {symbol}</span>
          </div>
          <div className="description">
            <p>Age: {age}</p>
            <p>Weight: {weight}</p>
          </div>
        </div>
        <div className="extra content">
         
         {button}
        </div>
      </div>
    )
  }
}

export default Pet
