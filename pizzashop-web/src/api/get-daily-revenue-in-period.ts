import { api } from '@/lib/axios'

export type GetDailyRevenueInPeriodResponse = {
  date: string
  receipt: number
}[]

export async function getDailyRevenueInPeriod() {
  const response = await api.get<GetDailyRevenueInPeriodResponse>(
    '/metrics/daily-in-receipt-in-period',
  )
  return response.data
}
