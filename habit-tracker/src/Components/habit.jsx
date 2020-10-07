import React, { Component } from 'react';

class Habit extends Component {
  render() {
    return (
      <>
        <span className='habit-name'>Reading</span>
        <span className='habit-count'>8</span>
        <button>
          <i className='fas fa-plus'></i>
        </button>
        <button>
          <i className='fas fa-minus'></i>
        </button>
        <button>
          <i className='fas fa-trash'></i>
        </button>
      </>
    );
  }
}

export default Habit;
