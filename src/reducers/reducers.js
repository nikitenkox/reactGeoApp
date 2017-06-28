export const cities = (state = [], action) => {
  let index;
  switch (action.type) {
    case 'citiesFromJSON':
      return action.data;
    case 'add':
      return [
        ...state,
        action.city
      ];
    case 'change':
      index = state.findIndex((city) => city.id === action.city.id);
      state.splice(index, 1, action.city);
      return [
        ...state
      ]
    case 'delete':
      index = state.findIndex((city) => city.id === action.id);
      state.splice(index, 1);
      return [
        ...state
      ];
    default:
      return state;
  }
}

export const countries = (state = {}, action) => {
  switch (action.type) {
    case 'countriesFromJSON':
      return action.data;
    default:
      return state;
  }
}

export const selectedCountryId = (state = null, action) => {
  switch (action.type) {
    case 'chooseCountry':
      return action.id;
    case 'showAll':
      return null;
    default:
      return state;
  }
}