import React, { Component } from 'react'

export default class ProductList extends Component {
  render() {
    return (
      <div className="panel panel-primary">
        <div className="panel-heading">
          <h3 className="panel-title">DANH SACH SAN PHAM</h3>
        </div>
        <div className="panel-body">
          <table className="table table-bordered table-hover">
            <thead>
              <tr>
                <th></th>
                <th>No.</th>
                <th>id</th>
                <th>name</th>
                <th>price</th>
                <th>category</th>
                <th>quantity</th>
                <th>action</th>
              </tr>
            </thead>
            <tbody>
              {this.props.children}
            </tbody>
          </table>
          <button type="button" className="btn btn-danger btn-delete">Delete</button>
         </div>
      </div>
    );
  }
}