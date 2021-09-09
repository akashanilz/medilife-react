import React from 'react'
import { Table } from 'react-bootstrap'
import { useHistory } from 'react-router'
import Header from '../../Dashboard/Header/Header'

function View() {
    const history = useHistory();
    return (
        <div>
            <Header/>
            
         <div className="pt-2">
           <div className="text-center space-x-14 pb-3">
           <button onClick={()=>{history.push('create')}} className="btn btn-success ">Add Client</button>
           </div>
           <h1 className="text-center pb-3">Clients</h1>
         <Table striped bordered hover>
  <thead>
    <tr>
      <th>No</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Username</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <td>3</td>
      <td colSpan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</Table>
         </div>
        </div>
    )
}

export default View
