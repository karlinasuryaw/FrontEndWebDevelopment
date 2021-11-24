import './meal-card.js'

class Meallist extends HTMLElement {
    set meals (meals) {
        this._meals = meals
        this.render()
    }

    render () {
        this.innerHTML = ''
        this.classList.add('row', 'row-cols-1', 'row-cols-md-1', 'g-3')
        this._meals.forEach(meal => {
            const mealsContainer = document.createElement('meal-card')
            mealsContainer.meal = meal
            this.appendChild(mealsContainer)
        })
    }
}

customElements.define('meals-list', Meallist)
