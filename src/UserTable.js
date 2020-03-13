import React from 'react';

class UserTable extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
      let tableRows = this.props.reduxState.map((userInfo, arrayIndex) => {
          return (
              <tr key = {arrayIndex}>
                  <td>{userInfo.name}</td>
                  <td>{userInfo.favoriteColor}</td>
              </tr>
          )
      })
      
      return (
      <div>
          <table>
              <thead>
                <tr>
                    <th>User Name</th>
                    <th>Favorite Color</th>
                </tr>
              </thead>
              <tbody>
                {tableRows}
              </tbody>
          </table>
      </div>
      )
  }
}

export default UserTable;