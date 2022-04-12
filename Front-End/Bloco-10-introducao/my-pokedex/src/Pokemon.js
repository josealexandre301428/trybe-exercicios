import React from 'react'
import PropTypes from 'prop-types';

class Pokemon extends React.Component {
  render() {
    const { pokemon: { name, type, averageWeight, image } } = this.props;
    return (
      <div className="pokemon">
        <div>
          <h1>{ name }</h1>
          <div className='cardBody'>
            <h3>{ type }</h3>
            <h4>
            {`Average weight: ${averageWeight.value} ${averageWeight.measurementUnit}`}
            </h4> 
            <img src={ image } alt={ `${name} sprite` } />
          </div>
          
        </div>
       
      </div>
    );
  }
}

Pokemon.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string,
    type: PropTypes.string,
    averageWeight: PropTypes.shape({
      measurementUnit: PropTypes.string,
      value: PropTypes.number,
    }),
    image: PropTypes.string,
  }).isRequired,
};

export default Pokemon;