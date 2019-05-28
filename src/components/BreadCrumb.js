import React from 'react';

class BreadCrumb extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      breadCrumb: false,
      unique: [],
    };
  }

  handleBreadCrumb = index => {
    const newArray = this.state.unique.splice(index);
    this.setState({
      breadCrumb: !this.state.breadCrumb,
      unique: this.state.unique,
    });
  };

  render() {
    const unique = [...new Set(this.props.dataArray)];

    return (
      // <div><h1>{this.props.dataArray}</h1></div>
      <div>
        {unique.map((val, index) => (
          <span>
            <span onClick={this.handleBreadCrumb}> {val} </span>{' '}
            {index < unique.length - 1 && <span>></span>}
          </span>
        ))}
        <span>{this.props.ageArray}</span>
      </div>
    );
  }
}

export default BreadCrumb;
