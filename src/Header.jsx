import {Component} from 'react';
import Card from "./Card.jsx";

class Header extends Component {
  // this
  state = {
    number: 100,
    text: "Count",
    products: []
  }

  //  setState

  componentDidMount() {
    console.log("componentDidMount Header")
    fetch("https://api.escuelajs.co/api/v1/products")
        .then(res => res.json())
        .then(data => {
          console.log(data) // 53
          this.setState({products: data})
        })
  }

  componentWillUnmount() {
    console.log("componentWillUnmount Header")
  }

  render() {
    if (this.state.products.length === 0) {
      return <h4>Loading...</h4>
    }

    return (
        <div className={"d-flex flex-wrap gap-3"}>
          {this.state.products.map((product, index) =>  {
            return <Card key={index} item={product} />
          })}
        </div>
    );
  }
}

export default Header;