import { api } from '@/lib/axios'

export interface RegisterRestaurantBody {
    email:string,
    restaurantName: String,
    managerName: String,
    phone: string,
}

export async function registerRestaurant({
    email,managerName,restaurantName,phone}:RegisterRestaurantBody)
    {
    await api.post('/authenticate',{
        email,restaurantName,managerName,phone
    })
}