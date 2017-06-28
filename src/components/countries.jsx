import React, { Component }                     from 'react';
import Country                                  from './country';
import axios                                    from 'axios';
import { connect }                              from 'react-redux';
import { getCountries }                         from '../actions/actions';

class Countries extends Component {

  constructor(props) {
    super(props);
    this.state = {
      countries: []
    }
  }

  componentDidMount() {
      axios.get('/shared/countries.json')
        .then((res) => {
          this.props.recieveData(res.data);
          this.setState({
            countries: (this.props.state.countries.length) ? this.props.state.countries: res.data
          })
        })
  }

  render() {
    if (this.state.countries.length) {
      return (
        <div className="countries">
          {this.state.countries.map((country, index) => (
            <Country key={index} country={country} />
          ))}
        </div>);
    } else {
      return(
        <p>loading</p>
      )
    }
  }
}

const mapStateToProps = (state) => {
  return {
    state: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    recieveData: (data) => {
      const asyncData = () => {
          return (dispatch) => {
              dispatch(getCountries(data))
          }
      }
      dispatch(asyncData());
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Countries);
