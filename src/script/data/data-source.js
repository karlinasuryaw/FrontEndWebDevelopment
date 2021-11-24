/* eslint-disable prefer-promise-reject-errors */
class DataSource {
    static fetchMeals () {
        return fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=b')
            .then(response => {
                return response.json()
            })
            .then(responseJson => {
                return Promise.resolve(responseJson.meals)
            })
            .catch(error => {
                return Promise.reject(error)
            })
    }

    static searchMeal (keyword) {
        return fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${keyword}`)
            .then(response => {
                return response.json()
            })
            .then(responseJson => {
                if (responseJson.meals) {
                    return Promise.resolve(responseJson.meals)
                } else {
                    return Promise.reject(`${keyword} not found`)
                }
            })
            .catch(error => {
                return Promise.reject(error)
            })
    }
}

export default DataSource
