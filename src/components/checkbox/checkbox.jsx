import React, { Component } from 'react'

class Checkbox extends Component {
  constructor(props) {
    super(props)

    this.state = { 
      isChecked: false
    }

    this.handleCheckboxChange = this.handleCheckboxChange.bind(this)
  }

  render() {
    return (
      <div className="checkbox">
        <input type="checkbox" checked={this.state.isChecked} onChange={this.handleCheckboxChange} />
        Checkbox
      </div>
    )
  }

  handleCheckboxChange(e) {
    this.setState({ isChecked: e.target.checked })
  }
}

export default Checkbox