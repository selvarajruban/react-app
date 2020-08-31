import React, { Component } from 'react';

class Registrations extends Component {
  render() {
    const { name } = this.props;
    return (
      <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-4">
        <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
          <h3></h3>
        </div>
        <h3>Marriages Registered</h3>
        <div class="table-responsive">
          <table class="table table-striped table-sm">
            <thead>
              <tr>
                <th>Reg ID</th>
                <th>Groom Name</th>
                <th>Bride Name</th>
                <th>Date of Marriage</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1010</td>
                <td>Peter</td>
                <td>Lorra</td>
                <td>10-Aug-2020</td>
                <td>View</td>
              </tr>
              <tr>
                <td>1010</td>
                <td>Peter</td>
                <td>Lorra</td>
                <td>10-Aug-2020</td>
                <td>View</td>
              </tr>
              <tr>
                <td>1010</td>
                <td>Peter</td>
                <td>Lorra</td>
                <td>10-Aug-2020</td>
                <td>View</td>
              </tr>
              <tr>
                <td>1010</td>
                <td>Peter</td>
                <td>Lorra</td>
                <td>10-Aug-2020</td>
                <td>View</td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    );
  }
}

export default Registrations;
