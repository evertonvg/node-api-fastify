import { http, HttpResponse } from 'msw'
import { GetPopularProductsResponse } from '../get-popular-produts' 

export const getPopularProductsMock = http.get<never,never, GetPopularProductsResponse>(
    '/metrics/popular-products',
    ()=>{
        return HttpResponse.json([
            {
                product: 'Pizza 01',
                amount: 3
            },
            {
                product: 'Pizza 03',
                amount: 4
            }, {
                product: 'Pizza 02',
                amount: 2
            }, {
                product: 'Pizza 01',
                amount: 2
            }, {
                product: 'Pizza 04',
                amount: 2
            }, {
                product: 'Pizza 01',
                amount: 2
            }, {
                product: 'Pizza 06',
                amount: 15
            }, {
                product: 'Pizza 01',
                amount: 2
            }, {
                product: 'Pizza 01',
                amount: 7
            }, {
                product: 'Pizza 07',
                amount: 5
            },
        ])

    }
)