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
    switch( action.type ) {
        case "ADDED_FEATURE":
            console.log(state.car)
            return {
                ...state,
                car: {features: [...state.car.features, action.payload], price: state.car.price, name: state.car.name, image: state.car.image} 
            };
        case "ADDED_ADDITIONALPRICE":
            const priceUpdate = [state.additionalPrice]
            const reducer = ((num, total) => {return num + total})
            console.log(state.additionalPrice)
            return {
                ...state,
                additionalPrice: priceUpdate.reduce(reducer, action.payload)

                    
                
            };
        // case ""
        default: 
        return state;
    }
}