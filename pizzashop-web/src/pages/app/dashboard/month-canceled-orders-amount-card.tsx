import { getMonthCanceledOrdersAmount } from "@/api/get-month-canceled-orders-amount";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";
import { DollarSign } from "lucide-react";

export function MonthCanceledOrdersAmountCard(){
    const {data: monthCanceledOrdersAmount } = useQuery({
        queryFn: getMonthCanceledOrdersAmount,
        queryKey:['metrics','month-canceled-amount']
    })
    return(
        <Card>
            <CardHeader className='items-center justify-between pb-2 space-y-2 flex-row'>
                <CardTitle className='text-base font-semibold'>Cancelamentos (mês)</CardTitle>
                <DollarSign className='h-4 w-4 text-muted-foreground'/>
            </CardHeader>
            <CardContent className='space-y-1'>
                 {monthCanceledOrdersAmount && (
                    <>
                        <span className='text-2xl font-bold tracking-tighter'>
                        {monthCanceledOrdersAmount.amount}
                    </span>
                    <p className='text-xs text-muted-foreground'>

                        { monthCanceledOrdersAmount?.diffFromLastMonth < 0 ? 
                            <span className='text-rose-500 dark:text-emerald-400'>
                                -{monthCanceledOrdersAmount.diffFromLastMonth}
                            </span>
                        :
                            <span className='text-rose-500 dark:text-rose-400'>
                                +{monthCanceledOrdersAmount.diffFromLastMonth}
                            </span>
                        } 
                        
                        { } em relação ao mes passado
                    </p>
                    </>
                )}
                
            </CardContent>
        </Card>
    )
}