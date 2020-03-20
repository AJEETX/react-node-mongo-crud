import React, { Component } from 'react';
import DocumentService from './DocumentService';
import axios from 'axios';
import TableRow from './TableRow';
import {Link} from 'react-router-dom';

let styles = {
  marginTop: '100px'
};
class ListDocument extends Component {

  
  constructor(props) {
      super(props);
      this.state = {value: '', items: ''};
      this.addDocumentService = new DocumentService();
    }
    componentDidMount(){
      axios.get('http://localhost:3001/document/get-document')
      .then(response => {
        this.setState({ items: response.data });
      })
      .catch(function (error) {
        console.log(error);
      })
    }
    tabRow(){
      if(this.state.items instanceof Array){
        return this.state.items.map(function(object, i){
            return <TableRow obj={object} key={i} />;
        })
      }
    }
   

    render() {
      return (
        <div className="container" style={styles}>
        <h3>Clients</h3>
        <Link className="button" to={"/add-document/"} >Add New Client</Link>
            <table className="table table-striped">
              <thead>
                <tr>
                  <td>Name</td>
                  <td>Description</td>
                  <td>Visa</td>
                  <td></td>
                  <td>Action</td>
                </tr>
              </thead>
              <tbody>
                {this.tabRow()}
              </tbody>
            </table>
        </div>
      );
    }
  }

export default ListDocument;
