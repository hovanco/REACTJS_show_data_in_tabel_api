import React, { Component } from 'react';
import axios from 'axios';

const API_URL = 'http://localhost:3000';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      products: []
    }
  }

  componentDidMount() {
    const url = `${API_URL}/products`;
    axios.get(url).then(response => response.data)
    .then((data) => {
      this.setState({ products: data })
      console.log(data);
      localStorage.setItem('hovanco', data);
    })
  }

  render() {
    return (
      <div className="container">
      <div className="col-xs-8">
        <h1>React Axios Example</h1>
          <div className="panel-body">
            <table className="table table-bordered table-hover">
              <thead>
                <tr>
                  <th>STT</th>
                  <th>id</th>
                  <th>name</th>
                  <th>image</th>
                  <th>description</th>
                  <th>price</th>
                  <th>inventory</th>
                  <th>rating</th>
                </tr>
              </thead>
              <tbody>
                {this.state.products.map((product, index) => (
                    <tr key ={index}>
                      <td>{index +1 }</td>
                      <td>{product.id}</td>
                      <td>{product.name}</td>
                      <td>
                        <img src={product.image} style={{width: "100px"}} alt="smart phone" />
                      </td>
                      <td>{product.description}</td>
                      <td>{product.price}</td>
                      <td>{product.inventory}</td>
                      <td>{product.rating}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
export default App;

