export interface OrderAddressI {
    district: string,
    city: string
}

export interface orderDescriptionI {
    cargoType: string
    volume: number
    weight: number
}

export interface OrderI {
    _id: string
    addressFrom: OrderAddressI
    addressTo: OrderAddressI
    cargoLoadingDate: Date
    distance: number
    intermediateDeliveryPointsCount: number
    cargoType:string
    orderNumber: string
    price: number
    gsm: number
    description:orderDescriptionI
}