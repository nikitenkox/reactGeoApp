import React, { Component }                                 from 'react';
import { connect }                                          from 'react-redux';
import CityForm                                             from './CityForm';
import {
    deleteCity,
    changeCity
}                                                           from '../actions/actions';

class City extends Component {

    constructor(props) {
        super(props);
        this.state = {
            changeCity: false
        }
    }

    deleteCity() {
        this.props.deleteCity(this.props.city.id);
    }

    showChangeForm() {
        this.setState({
            changeCity: !this.state.changeCity
        })
    }

    changeCity(event) {
        event.preventDefault();
        this.showChangeForm();
        this.props.changeCity({
            id: this.props.city.id,
            country_id: this.props.city.country_id,
            title: event.target.title.value,
            desc: event.target.desc.value
        })
    }

    render() {
        let form;
        if (this.state.changeCity) {
            form = <CityForm cancel={this.showChangeForm.bind(this)} submit={this.changeCity.bind(this)} city={this.props.city}/>
        } else {
            form = null;
        }
        return(
            <div className="city-wr">
                <div className="del" onClick={this.deleteCity.bind(this)}>
                    <span>X</span>
                </div>
                <div className="changecity" onClick={this.showChangeForm.bind(this)}>
                    <span>&#9998;</span>
                </div>
                <h4>{this.props.city.title}</h4>
                <p>{this.props.city.desc}</p>
                {form}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
  return {
    state: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteCity: (id) => {
        dispatch(deleteCity(id));
    },
    changeCity: (city) => {
        dispatch(changeCity(city));
    }
  }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(City);