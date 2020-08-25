import React, { Component } from 'react';
// import callApi from './../../utils/apiCaller';
import { Link } from 'react-router-dom';
import { actAddProductRequest, actGetProductRequest, actUpdateProductRequest } from './../../actions/index';
import {connect} from 'react-redux';

class ProductActionPage extends Component {
  constructor(props){
    super(props);
    this.state = {
      id: '',
      txtName: '',
      txtPrice: '',
      txtCategory: '',
      txtQuantity: ''
    };
  }
  // update function, show data after update
  componentDidMount(){
    var { match } = this.props
    if(match){
      var id = match.params.id;
      this.props.onEditProduct(id);
    }
  }

  componentWillReceiveProps(nextProps){
    if(nextProps && nextProps.itemEditing){
      var {itemEditing} = nextProps;
      this.setState({
        id: itemEditing.id,
        txtName: itemEditing.name,
        txtPrice: itemEditing.price,
        txtCategory: itemEditing.category,
        txtQuantity: itemEditing.quantity
      });
    }
  }

  onChange = (e) => {
    var target = e.target;
    var name = target.name;
    var value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name] : value
    });
  }
  onSave = (e) => {
    e.preventDefault();
    var {id, txtName, txtPrice, txtCategory, txtQuantity} = this.state;
    var {history} = this.props;
    var product = {
      id : id,
      name: txtName,
      price: txtPrice,
      category: txtCategory,
      quantity: txtQuantity
    }
    if(id){ //update
      this.props.onUpdateProduct(product);
    }else{
      this.props.onAddProduct(product);
    }
    history.goBack();
  }
  render() {
    var {txtName, txtPrice, txtCategory, txtQuantity} = this.state;
    return (
      <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
        <form onSubmit={this.onSave}>
          <div className="form-group">
            <label>name:</label>
            <input type="text" className="form-control" name="txtName" value={txtName} onChange={this.onChange}/>
          </div>
          <div className="form-group">
            <label>price:</label>
            <input type="number" className="form-control" name="txtPrice" value={txtPrice} onChange={this.onChange} />
          </div>
          <div className="form-group">
            <label>category:</label>
            <input type="text" className="form-control" name="txtCategory" value={txtCategory} onChange={this.onChange}/>
          </div>
          <div className="form-group">
            <label>quantity:</label>
            <input type="number" className="form-control" name="txtQuantity" value={txtQuantity} onChange={this.onChange}/>
          </div>
          <Link to="/product-list" className = "btn btn-danger mr-10">Cancel</Link>
          <button type="submit" className="btn btn-primary">Save</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return{
    itemEditing : state.itemEditing
  }
}



const mapDispatchToProps = (dispatch, props) => {
  return {
   onAddProduct : (product) => {
     dispatch(actAddProductRequest(product));
   },
   onEditProduct : (id) => {
     dispatch(actGetProductRequest(id));
   },
   onUpdateProduct : (product) => {
     dispatch(actUpdateProductRequest(product));
   }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductActionPage);
