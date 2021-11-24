import 'regenerator-runtime'
import 'bootstrap/dist/css/bootstrap.min.css'
import $ from 'jquery'
import '../component/navbar.js'
import '../component/meal-card.js'
import '../component/meal-list.js'
import '../../styles/style.css'
import DataSource from '../data/data-source.js'

const main = () => {
    $('.keyword').text('')

    const fetchMealsElement = document.querySelector('meals-list')

    const retriveMeals = async () => {
        try {
            const result = await DataSource.fetchMeals()
            fetchMealsElement.meals = result
        } catch (error) {
            alert(error)
        }
    }
    retriveMeals()
    const searchMeal = async (keyword) => {
        try {
            const result = await DataSource.searchMeal(keyword)
            fetchMealsElement.meals = result
            $('.keyword').text(keyword)
        } catch (error) {
            alert(error)
        }
    }

    $(document).on('submit', 'nav-bar form', function (e) {
        e.preventDefault()
        const keyword = $('input[name="search"]').val()
        fetchMealsElement.meals = []
        searchMeal(keyword)
    })
}

export default main
