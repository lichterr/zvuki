import React, {Component} from 'react';
import wind from './icon.svg';

export class IconBirds extends Component {
  render() {
    return (
      <img height={this.props.size} width={this.props.size} src={wind} alt="birds" />
    );
  }

}