import { useQuery } from '@tanstack/react-query'
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from 'recharts'
import colors from 'tailwindcss/colors'

import { getDailyRevenueInPeriod } from '@/api/get-daily-revenue-in-period'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Label } from '@/components/ui/label'

const data = [
  {
    date: '10/12',
    receipt: 400,
  },
  {
    date: '11/12',
    receipt: 500,
  },
  {
    date: '12/12',
    receipt: 1200,
  },
  {
    date: '13/12',
    receipt: 6000,
  },
  {
    date: '14/12',
    receipt: 100,
  },
  {
    date: '15/12',
    receipt: 300,
  },
  {
    date: '16/12',
    receipt: 1200,
  },
]

export function RevenueChart() {
  const { data: dailyRevenueinperiod } = useQuery({
    queryFn: getDailyRevenueInPeriod,
    queryKey: ['metrics', 'revenue-in-period'],
  })
  return (
    <Card className="col-span-6">
      <CardHeader className="flex-row items-center justify-between pb-8">
        <div className="space-y-1">
          <CardTitle className="text-base font-medium">
            Receita no periodo
          </CardTitle>
          <CardDescription>Receita diária no peiodo</CardDescription>
        </div>
        <div className="flex items-center gap-3">
          <Label>
            {/* date picker ta dando erro  */}
            {/* <DatePicker /> */}
          </Label>
        </div>
      </CardHeader>
      <CardContent>
        {dailyRevenueinperiod && (
          <ResponsiveContainer width="100%" height={240}>
            <LineChart data={dailyRevenueinperiod} style={{ fontSize: 12 }}>
              <XAxis dataKey="date" tickLine={false} axisLine={false} dy={16} />
              <YAxis
                stroke="888"
                axisLine={false}
                tickLine={false}
                width={80}
                tickFormatter={(value: number) =>
                  value.toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                  })
                }
              />
              <Line
                type="linear"
                strokeWidth={2}
                dataKey="receipt"
                stroke={colors.violet['400']}
              />
              <CartesianGrid vertical={false} className="stroke-muted" />
            </LineChart>
          </ResponsiveContainer>
        )}
      </CardContent>
    </Card>
  )
}
