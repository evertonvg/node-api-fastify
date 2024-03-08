import { api } from "@/lib/axios";

export interface GetMonthRevenueResponse {
    receipt: number
    diffFromLastmonth: number
}

export async function GetMonthRevenue () {
    const response = await api.get<GetMonthRevenueResponse>('/metrics/month-receipt')
    return response.data
}