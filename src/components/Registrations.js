import React, { Component } from 'react';

class Registrations extends Component {
  constructor(props) {
    super(props);

    this.state = {
      registrations: [],
      isLoaded: false,
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/registrations')
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          isLoaded: true,
          registrations: json,
        });
      });
  }

  render() {
    const { isLoaded, registrations } = this.state;

    if (!isLoaded) {
      return <div>No Data Fetched</div>;
    }

    if (isLoaded) {
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
                {registrations.map((reg) => (
                  <tr>
                    {<td>{reg.id}</td>}
                    {<td>{reg.groom}</td>}
                    {<td>{reg.bride}</td>}
                    {<td>{reg.dom}</td>}
                    {<td>View</td>}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>
      );
    }
  }
}

export default Registrations;
