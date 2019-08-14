const initialState = {
    additionalPrice: 0,
    car: {
      price: 26395,
      name: '2019 Ford Mustang',
      image:
        'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
      features: []
    },
    store: [
      { id: 1, name: 'V-6 engine', price: 1500 },
      { id: 2, name: 'Racing detail package', price: 1500 },
      { id: 3, name: 'Premium sound system', price: 500 },
      { id: 4, name: 'Rear spoiler', price: 250 }
    ]
}

export const storeReducer = (state = initialState, action) => {
    const priceUpdate = [state.additionalPrice]
    
    switch( action.type ) {
        case "ADDED_FEATURE":
            console.log(state.car)
            const filterdStore = state.store.filter(feature => feature !== action.payload)
            return {
                ...state,
                car: {...state.car, features: [...state.car.features, action.payload]},
                store: filterdStore
            };
        case "ADDED_ADDITIONALPRICE":
            const reducer = ((num, total) => {return num + total})
            console.log(state.additionalPrice)
            return {
                ...state,
                additionalPrice: priceUpdate.reduce(reducer, action.payload) 
            };
        case "REMOVE_FEATURE":
              const newStore = [...state.store, action.payload];
            return {
                ...state,
                car:  { ...state.car, features: state.car.features.filter(feature =>{ return feature !== action.payload })},
                store: newStore
            }
        case "REMOVE_ADDITIONALPRICE":
            const reducer2 = ((num, total) => {return total - num})
            console.log(state.additionalPrice)
            return {
                ...state,
                additionalPrice: priceUpdate.reduce(reducer2, action.payload)
            }
        // case ""
        default: 
        return state;
    }
}