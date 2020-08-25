import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ProductItem extends Component {
  onDelete = (id) => {
    // console.log(id);
    if(confirm('ban muon xoa?')){//eslint-disable-line
      this.props.onDelete(id)
    }
  }
  render() {
    var { product, index } = this.props;
    var numberFormat = new Intl.NumberFormat();
    return (
      <tr>
        <td><input type="checkbox" className="delid[]" defaultValue={product.id} /></td>
        <td>{index + 1}</td>
        <td>{product.id}</td>
        <td>{product.name}</td>
        <td>{numberFormat.format(product.price)} VND</td>
        <td>{product.category}</td>
        <td>{product.quantity}</td>
        <td>
          <Link to={`/product/${product.id}/edit`} className="btn btn-warning mr-10">Update</Link>
          <button onClick={ () => this.onDelete(product.id)} type="button" className="btn btn-danger">Delete</button>
        </td>
      </tr>
    )
  }
}
export default ProductItem;
