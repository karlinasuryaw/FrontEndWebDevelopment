class NavBar extends HTMLElement {
    connectedCallback () {
        this.render()
    }

    render () {
        this.innerHTML = `

        <nav style="width: 100%;" class="navbar navbar-light bg-light opacity-50">
            <div class="container-fluid">
                <form class="d-flex" style="width: 100%;">
                    <input class="form-control me-2" name="search" type="search" placeholder="Search Meals" aria-label="Search">
                    <button class="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>
        </nav>
        `
    }
}

customElements.define('nav-bar', NavBar)
