import React, { Component }                       from 'react';
import { pickCountry }                            from '../actions/actions';
import { connect }                                from 'react-redux';

class Country extends Component {

  constructor(props) {
    super(props);
    this.state = {

    }
  }

  setCountry() {
    this.props.selectCountry(this.props.country.id);
  }

  render() {
    return(
      <div onClick={this.setCountry.bind(this)} className={(this.props.state.selectedCountryId  === this.props.country.id ? 'count-wr active' : 'count-wr')}>
          <div>
            <h3>{this.props.country.title}</h3>
            <p>
              {this.props.country.text}
            </p>
          </div>
          <div className={(this.props.state.selectedCountryId  === this.props.country.id ? 'tr' : '')}></div>
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
    selectCountry: (id) => {
      dispatch(pickCountry(id));
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Country);
