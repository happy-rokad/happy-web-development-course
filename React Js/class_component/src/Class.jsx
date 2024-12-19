import React, { Component } from 'react'

export default class Class extends Component {

    constructor(props) {
        super(props)
        this.state = { count : 0, web : ''}
    }

    static getDerivedStateFromProps(props, state) {
        if (state.web == '') {
            return {web : props.webName}
        } else {
            return null;
        }
    }

    incr() {
        this.setState({count : this.state.count + 1})
    }

    componentDidMount() {
        document.getElementById('my').innerHTML = 'Hello World!....(This sentence print by id)'
    }

  render() {
    return (
        <>
        
            <h1> {this.state.web} </h1>
            <h1> {this.state.count} </h1>
            <button onClick={() => {
                this.incr()
            }}> Increment </button>

            <br />
            <br />
            <div id='my'></div>

        </>
    )
  }
}
