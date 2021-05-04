import { Component } from 'react';
import Loader from 'react-loader-spinner';

export default class NewLoader extends Component {
  //other logic
  render() {
    return (
      <div className="Loader">
        <Loader
          type="Grid"
          color="#303f9f"
          height={30}
          width={30}
          timeout={3000} //3 secs
        />
      </div>
    );
  }
}
