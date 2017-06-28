import React, { Component }                                 from 'react';

export default class CityForm extends Component {

    render() {
        return(
            <div>
                <h4>{this.props.type}</h4>
                <form  onSubmit={this.props.submit}>
                    <input type="text" name="title" placeholder="city name" defaultValue={this.props.city ? this.props.city.title : '' } />
                    <textarea name="desc" rows="8" placeholder="city description" defaultValue={this.props.city ? this.props.city.desc : ''}></textarea>
                    <button type="submit">submit</button>
                    <button type="button" onClick={this.props.cancel}>cancel</button>
                </form>
            </div>
        )
    }
}
