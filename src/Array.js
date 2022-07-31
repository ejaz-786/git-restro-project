import React, { Component } from 'react'

class Array extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        temp:[]
      }
    }
    add=(event)=>{
       console.log(event.target)
        var id=event.target.previousElementSibling.previousElementSibling.previousElementSibling.value;
        var name=event.target.previousElementSibling.previousElementSibling.value;
        var price=event.target.previousElementSibling.value;
        // array of object
        let arr={"id":id,"name":name,"price":price};
        this.setState({
            temp:[...this.state.temp,arr]
        })
    }
  render() {
    return (
     <>
     id<input type="text"/>
     name<input type="text"/>
     price<input type="text"/>
     <button onClick={this.add}>Click</button>
     <table>
        <tbody>
        <tr><td>id</td><td>Name</td><td>Price</td></tr>
            {this.state.temp.map((i)=>{
                return <>
                <tr><td>{i.id}</td><td>{i.name}</td><td>{i.price}</td></tr>
                </>
            })}
        </tbody>
     </table>
     </>
    )
  }
}

export default Array