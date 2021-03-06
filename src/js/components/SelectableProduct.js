import React, { PropTypes } from 'react'
import { Entity } from 'aframe-react'

class SelectableProduct extends React.Component {

  render () {
    return (
      <Entity
        look-at='#main-camera'
        position={`${this.props.position.x} ${this.props.position.y - 2.5} ${this.props.position.z}`}
      >
        {!this.props.fadeOut && (
          <a-animation
            attribute='position'
            to={`${this.props.position.x} ${this.props.position.y} ${this.props.position.z}`}
            dur='1000'
          />
        )}
        {this.props.fadeOut && (
          <a-animation
            attribute='position'
            to={`${this.props.position.x} ${this.props.position.y - 2.5} ${this.props.position.z}`}
            dur='1000'
          />
        )}
        <Entity
          geometry='primitive: box; depth: 0.1; height: 0.75; width: 1.5'
          material={{ src: `url(../resources/${this.props.category}/${this.props.product.id}.png)` }}
          onClick={() => this.props.onSelect(this.props.hoverIn, this.props.product)}
        >
          {this.props.hoverIn &&
            <a-animation
              attribute='position'
              to='0 0 4'
              dur='1000'
            />
          }
          {!this.props.hoverIn &&
            <a-animation
              attribute='position'
              to='0 0 0'
              dur='1000'
            />
          }
        </Entity>
        <Entity
          position='0 0 0.1'
          geometry='primitive: box; depth: 0.1; height: 0.75; width: 1.5'
          material={{ opacity: 0.3 }}
          onClick={() => {}}
        />
      </Entity>
    )
  }
}

SelectableProduct.proptypes = {
  product: PropTypes.array,
  position: PropTypes.object,
  onSelect: PropTypes.func,
  fadeOut: PropTypes.bool,
  category: PropTypes.string,
  hoverIn: PropTypes.bool
}

export default SelectableProduct
