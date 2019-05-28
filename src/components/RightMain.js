import React from 'react';
// import RightMain1 from './RightMain1'
// import RightMain2 from './RightMain2'

class RightMain extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        {this.props.ageGroup.map(age => (
          <button
            onClick={() => {
              this.props.ageClick(age);
            }}
          >
            {age}
          </button>
        ))}
      </div>
    );
  }
}

export default RightMain;
