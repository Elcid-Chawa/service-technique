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
        services: [
            {
                service_type: "liverason",
                service_name: "BORDEREAU DE LIVRAISON",
                service_title: "BASE DE MAN O WAR BAY",
                service_subtitle: "DONATIONS DE 900 REPAS FROID POUR LA CAN A BAFOUSSAM",
                service_headinds: ["QUANTITEES", "DESIGNATION", "OBSERVATION"],
                service_items: [
                    {
                    QUANTITEES: ["108", "36", "4.5", "09"],
                    DESIGNATION: [  "CARTONS DE 50 PICES", 
                                    "CARTONS DE JUS TAM TAM DE 25PC", 
                                    "CARTONS DE MAMBO DE 200 PC", 
                                    "CARTONS DE BISCUIT DE 100 PC" ],
                    OBSERVATION: ["900", "900", "900", "900" ],

                    },
                ],
                service_copies: ["COM 6EME BIR", "C B A NDAM", "CUSINE BIR", "ARCHIVES"],
                service_creator: "Mr. AMOGA JEHU"
            }, 
        ]
    },
    kribi: {
        id: "kribi",
        services: [
            {
            service_id: "",
            status: "pending",
            mission: ""
        },
    ]
    },

    bakassi: {
        id: "bakassi",
        services: [
            {
                service_type: "maintenance_cusine",
                service_name: "SERVICE TECHNIQUE DES CUISINES BIR",
                service_title: "PROGRAMME DES MISSIONS DE MAINTENANCE CUISINES BIR SEPTEMBRE 2021.",
                service_subtitle: "BASES BAKASSI ( RIO +AKWA+DJABANE+ISSOBO+KUMBO A BEDIMO)",
                service_headinds: ["TECHNICIENS", "PREIOD", "OBJECTIF"],
                service_items: [
                    {
                        TECHNICIENS: ["DENIS ETONGOUE ( frigoriste )", "ABOUGNE JEAN LUC (plombier)"],
                        PREIOD: [ "CARTONS DE 50 PICES", 
                                    "CARTONS DE JUS TAM TAM DE 25PC", 
                                    "CARTONS DE MAMBO DE 200 PC", 
                                    "CARTONS DE BISCUIT DE 100 PC" ],
                        OBJECTIFS: "Résolution de tous les problèmes Résolution de tous les problèmes",

                    },
                ],
                service_creator: "Mr. AMOGA JEHU"
            },
        ],
    },

    basenaval_manoka: {
        id: "basenaval_manoka",
    }

}

let status = {
    pending: "encours",
    complete: "complet",
    hold: "arrete",
    active: "active"
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