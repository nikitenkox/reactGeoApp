import React, { Component }                     from 'react';
import axios                                    from 'axios';
import City                                     from './city';
import { connect }                              from 'react-redux';
import CityForm                                 from './CityForm';
import {
    getCities,
    addCity
}                                               from '../actions/actions';

class Cities extends Component {

    constructor(props) {
        super(props);
        this.state = {
            cities: [],
            form: false
        }
    }

    componentDidMount() {
        axios.get('/shared/cities.json')
            .then((res) => {
                this.props.recieveData(res.data);
                this.setState({
                    cities: res.data
                })
            })
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
                cities: nextProps.state.cities
            })
        if (nextProps.state.selectedCountryId) {
            this.setState({
                cities: nextProps.state.cities.filter((c) => c.country_id === nextProps.state.selectedCountryId)
            })
        } else {
            this.setState({
                cities: nextProps.state.cities
            })
        }
    }

    showForm() {
        this.setState({
            form: !this.state.form
        })
    }

    submitForm(event) {
        event.preventDefault();
        this.showForm();
        let nextId = Math.max.apply(null, this.props.state.cities.map((city) => city.id)) + 1;
        this.props.addCity({
            id: nextId,
            country_id: this.props.state.selectedCountryId,
            title: event.target.title.value,
            desc: event.target.desc.value
        })
    }

    render() {
        let button;
        let form;
        let noCities;
        if (this.props.state.selectedCountryId) {
            button = <button type="button" onClick={this.showForm.bind(this)}>+ Add city</button>;
        }
        if (this.state.form) {
            form = <CityForm type="add city" cancel={this.showForm.bind(this)} submit={this.submitForm.bind(this)} />;
        }
        if (!this.state.cities.length) {
            noCities = <p>no cities</p>
        }
        if (this.state.cities) {
            return (
                <div className="cities">
                    {button}
                    {form}
                    {noCities}
                    <div>
                        {this.state.cities.map((city, index) => (
                            <City key={index} city={city} country={this.props.state.selectedCountryId}/>
                        ))}
                    </div>
                </div>
            )
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
              dispatch(getCities(data));
          }
      }
      dispatch(asyncData());
    },
    addCity: (city) => {
        dispatch(addCity(city));
    }
  }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Cities)