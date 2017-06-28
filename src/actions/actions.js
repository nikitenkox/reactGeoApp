export const getCountries = (data) => {
    return {
        type: 'countriesFromJSON',
        data
    }
}

export const getCities = (data) => {
    return {
        type: 'citiesFromJSON',
        data
    }
}

export const addCity = (city) => {
    return {
        type: 'add',
        city
    }
}

export const changeCity = (city) => {
    return {
        type: 'change',
        city
    }
}

export const deleteCity = (id) => {
    return {
        type: 'delete',
        id
    }
}

export const pickCountry = (id) => {
    return {
        type: 'chooseCountry',
        id
    }
}