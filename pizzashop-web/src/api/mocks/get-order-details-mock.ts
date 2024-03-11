import { http, HttpResponse } from 'msw'

import {
  GetOrderDetailsParams,
  GetOrderDetailsResponse,
} from '../get-order-details'

export const getOrderDetailsMock = http.get<
  GetOrderDetailsParams,
  never,
  GetOrderDetailsResponse
>('/orders/:orderId', ({ params }) => {
  return HttpResponse.json({
    id: params.orderId,
    customer: {
      name: 'john Doe',
      email: 'email@email.c0m',
      phone: '12341412451',
    },
    status: 'pending',
    createdAt: new Date().toString(),
    totalInCents: 4500,
    orderItems: [
      {
        id: 'order-item-1',
        priceInCents: 1000,
        product: {
          name: 'Pizza Pepperoni',
        },
        quantity: 1,
      },
      {
        id: 'order-item-2',
        priceInCents: 1500,
        product: {
          name: 'Pizza Marguerita',
        },
        quantity: 1,
      },
      {
        id: 'order-item-3',
        priceInCents: 900,
        product: {
          name: 'Pizza Tripla',
        },
        quantity: 2,
      },
    ],
  })
})
