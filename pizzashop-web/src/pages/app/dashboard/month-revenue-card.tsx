import { useQuery } from '@tanstack/react-query'
import { DollarSign } from 'lucide-react'

import { GetMonthRevenue } from '@/api/get-month-revenue'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export function MonthRevenueCard() {
  const { data: monthRevenue } = useQuery({
    queryFn: GetMonthRevenue,
    queryKey: ['metrics', 'month-revenue'],
  })
  return (
    <Card>
      <CardHeader className="flex-row items-center justify-between space-y-2 pb-2">
        <CardTitle className="text-base font-semibold">
          Receita total (mês)
        </CardTitle>
        <DollarSign className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent className="space-y-1">
        {monthRevenue && (
          <>
            <span className="text-2xl font-bold tracking-tighter">
              {(monthRevenue.receipt / 100).toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              })}
            </span>
            <p className="text-xs text-muted-foreground">
              {monthRevenue?.diffFromLastmonth >= 0 ? (
                <span className="text-rose-500 dark:text-emerald-400">
                  +{monthRevenue.diffFromLastmonth}
                </span>
              ) : (
                <span className="text-rose-500 dark:text-rose-400">
                  {monthRevenue.diffFromLastmonth}
                </span>
              )}
              {} em relação ao mes passado
            </p>
          </>
        )}
      </CardContent>
    </Card>
  )
}
