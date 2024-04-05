import {faker} from '@faker-js/faker';
import {OrderI} from "@/6-entities/Order/types";
import {districts} from "@/7-shared/config/districts.ts";
import {cities} from "@/7-shared/config/cities.ts";

export class FakerMock{
    data: OrderI[];
    constructor() {
        this.data = this.getOrdersData();
    }

    private createRandomOrder(): OrderI {
        const cargoLoadingDate = faker.date.soon({refDate: new Date()});
        const price = faker.number.int({min: 5000, max: 1_000_000})
        const gsm = faker.number.int({min: 1000, max: 10000})
        const orderNumber = 'A' + faker.number.int({min: 1000000, max: 1999999})
        const intermediateDeliveryPointsCount = faker.number.int({min: 0, max: 10})
        const addressFrom = {
            district: faker.helpers.arrayElement(districts),
            city: faker.helpers.arrayElement(cities)
        }
        const distance = faker.number.int({min: 100, max: 1000})
        const addressTo = {
            district: faker.helpers.arrayElement(districts),
            city: faker.helpers.arrayElement(cities)
        }

        const description = {
            cargoType: faker.helpers.arrayElement(['Стройматериалы', 'Нефтехимия', 'Металургия']),
            volume: faker.number.float({min: 0.1, max: 10, fractionDigits: 2}),
            weight: faker.number.float({min: 0.1, max: 10, fractionDigits: 2}),
        }

        return {
            _id: faker.string.uuid(),
            addressFrom,
            addressTo,
            cargoLoadingDate,
            distance,
            intermediateDeliveryPointsCount,
            orderNumber,
            cargoType:'Тент / полная',
            price,
            gsm,
            description,
        };
    }

    private getOrdersData():OrderI[] {
        const orders = [];
        for (let i = 0; i < 10_000; i++) {
            orders.push(this.createRandomOrder());
        }
        return orders;
    }

    public getOrders(){
        return this.data;
    }
}