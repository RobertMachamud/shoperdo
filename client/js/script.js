window.onload = () => {

// structure
	axios.get('http://localhost:3000/api/products').then((res) => {
		let products = res.data
		let products_ul = document.getElementById('products')
		products.forEach( (p) => {
			products_ul.insertAdjacentHTML('beforeEnd', `
      <div class="product">
        <div class="product-image">
          <i class="far fa-star"></i>
        </div>
        <div class="product-extras">
          <div class="description">
            <h4>${p.brand}</h4>
            <small>${p.model}</small>
          </div>
          <div class="price">
            <span>$${p.price}</span>
            <a href="#" class="button">shop now</a>
          </div>
        </div>
      </div>
      `)
		})
	})


	axios.get('http://localhost:3000/api/categories').then((res) => {
		let categories = res.data
		let categories_ul = document.getElementById('categories')
		categories.forEach( (c) => {
			categories_ul.insertAdjacentHTML('beforeEnd', `
      <li>
        <a href="#" class="cat" id="${c.id}">${c.name}</a>
      </li>
      `)
		})
	})


	document.addEventListener('click', (e) => {
		if (e.target.classList.contains('cat')) {
			axios.get(`http://localhost:3000/api/click/${e.target.id}`).then((res) => {
				let products = res.data
				let products_ul = document.getElementById('products')
				products_ul.innerHTML = ''
				products.forEach( (p) => {
				    products_ul.insertAdjacentHTML('beforeEnd', `
	       <div class="product">
            <div class="product-image" style="background: url('../${p.picture} center cover;')">
              <i class="far fa-star"></i>
            </div>
            <div class="product-extras">
              <div class="description">
                <h4>${p.brand}</h4>
                <small>${p.model}</small>
              </div>
              <div class="price">
                <span>$${p.price}</span>
                <a href="#" class="button">shop now</a>
              </div>
            </div>
          </div>
          `)
				})
      })
    }
  })


}
