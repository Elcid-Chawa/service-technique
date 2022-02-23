let users = {
    root: {
        id: "root",
        password: "admin",
        accesLevel: "admin"
    },
    regular: {
        id: "regular",
        password: "regular",
        accessLevel: "default"
    }
}

let products = {
    "pid1": { 
        id: "pid1",
        name: "product1",
        qty: 2,
        createDate: 1489579767190,
    },
    "pid2": { 
        id: "pid2",
        name: "product2",
        qty: 2,
        createDate: 1489579767190, 
    }
}

let base = {
    mowb: {
        id: "mowb",
        services: []
    }
}

let service = {
    "serviceid": {
        id: "Serviceid",
        type: "Liverasion",
        requestDate: 1489579767190,
        status: "pending"
    }
}

let mission = {
    
}

function generateUID () {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
  }

  export function _getUsers(){
      return new Promise((res, rej) => {
          setTimeout(() => res({...users}), 1000)
      })
  }

  export function _getUser(id){
    return new Promise((res, rej) => {
        setTimeout(() => res(users[id]), 1000)
    })
}

  export function _getProducts() {
      return new Promise((res, rej) => {
          setTimeout(() => res({...products}), 1000)
      })
  }

  function formatProduct(productName, qty){
      return {
          id: generateUID(),
          name: productName,
          qty,
          createDate: Date.now(),
      }
  }

  export function _addProduct (product){
      return new Promise((res, rej) => {
          
          const formarttedProduct = formatProduct(product.name, product.qty);

          setTimeout(() => {
              products = {
                  ...products,
                  [formarttedProduct.id]: formarttedProduct
              }

              res(formarttedProduct)
          }, 1000)
      })
  }