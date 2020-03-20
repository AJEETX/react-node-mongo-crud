import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import DocumentService from './DocumentService';
import { withRouter } from 'react-router';
class TableRow extends Component {

  constructor(props) {
    super(props);
  }

  deleteDocument= () =>{
    DocumentService.deleteApi('delete-document?id='+this.props.obj._id)
    .then(json => {
    if(json.data.statusCode===200){
      alert('Data deleted successfully!!');
      this.props.history.push('/add-document')
    }
    else{
      alert('something went wrong!!');
    this.props.history.push('/index')
    }
    }).catch((error)=>{
    console.log("error-----------",error)
    })
  }
  render() {
    return (
        <tr>
          <td>
            {this.props.obj.document_title}
          </td>
          <td>
            {this.props.obj.desc}
          </td>
          <td>
            {this.props.obj.publisher}
          </td>
          <td>
            {this.props.obj.item}
          </td>
          <td>
          <Link to={"/edit-document/"+this.props.obj._id} className="button muted-button">Edit</Link>
        </td>
          <td>
              <button type="button" onClick={this.deleteDocument} className="button muted-button">Delete</button>
          </td>
        </tr>
    );
  }
}

export default withRouter(TableRow);
