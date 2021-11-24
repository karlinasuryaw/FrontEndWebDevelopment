class Mealcard extends HTMLElement {
    set meal (meal) {
        this._meal = meal
        this.render()
    }

    render () {
        this.classList.add('col')
        this.innerHTML = `
        <div  class="card-group">
            <div class="card border-0">
                <img style="width: 100%; height:100%;" class="border-0 card-img-top" src="${this._meal.strMealThumb}" alt="Card image cap">
            </div>
            <div class="card border-0">
                <div class="card-body">
                <h2 class="card-title">${this._meal.strMeal}</h2>
                <p class="card-text">${this._meal.strCategory}</p>
                </div>
                <div class="card-footer">
                <p class="text-muted">${this._meal.strInstructions}</p>
                </div>
            </div>
        </div>
        `
    }
}

customElements.define('meal-card', Mealcard)
