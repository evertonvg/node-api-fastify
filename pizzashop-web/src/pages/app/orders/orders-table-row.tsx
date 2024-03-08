import { Button } from "@/components/ui/button";
import { TableCell, TableRow } from "@/components/ui/table";
import { Dialog, DialogTrigger } from "@radix-ui/react-dialog";
import { ArrowRight, Search, X } from "lucide-react";
import { OrderDetails } from "./order-details";
import { OrderStatus } from "@/components/order-status";
import { formatDistanceToNow} from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { cancelOrder } from "@/api/cancel-order";
import { GetOrdersResponse } from "@/api/get-orders";
import { approveOrder } from "@/api/approve-order";
import { deliverOrder } from "@/api/deliver-order";
import { dispatchOrder } from "@/api/dispatch-order";

export interface OrderTableRowProps {
    order: {
        orderId: string;
        createdAt: string;
        status: "pending" | "canceled" | "processing" | "delivering" | "delivered";
        customerName: string;
        total: number;
    }
}

export function OrderTableRow({order}: OrderTableRowProps){
    const [isDetailsOpen, setIsDetailsOpen ] = useState(false)
    const queryClient = useQueryClient()

    // function updateorderStatusOnCache(orderId:string, status:OrderStatus ){
    //     const ordersListCache = queryClient.getQueriesData<GetOrdersResponse>({
    //         queryKey:['orders'],
    //     })
    //     ordersListCache.forEach(([cacheKey, cacheData])=>{
    //         if(!cacheData){
    //             return
    //         }
    //         queryClient.setQueryData<GetOrdersResponse>(cacheKey,{
    //             ...cacheData,
    //             orders: cacheData.orders.map( order =>{
    //                 if(order.orderId === orderId){
    //                     return { ...order, status}
    //                 }
    //                 return order
    //             })
    //         })
    //     })
    // }

    // const { mutateAsync: cancelOrderFn, isPending: isCancelingOrder} = useMutation({
    //     mutationFn: cancelOrder,
    //     async onSuccess(_,{orderId}){
    //         updateorderStatusOnCache(orderId,'canceled')

    //     }
    // })
    // const { mutateAsync: approveOrderFn, isPending: isApprovingOrder} = useMutation({
    //     mutationFn: approveOrder,
    //     async onSuccess(_,{orderId}){
    //         updateorderStatusOnCache(orderId,'processing')

    //     }
    // })
    // const { mutateAsync: dispatchOrderFn, isPending: isDispatchingOrder } = useMutation({
    //     mutationFn: dispatchOrder,
    //     async onSuccess(_,{orderId}){
    //         updateorderStatusOnCache(orderId,'delivering')

    //     }
    // })
    // const { mutateAsync: deliverOrderFn, isPending: isDeliveringOrder} = useMutation({
    //     mutationFn: deliverOrder,
    //     async onSuccess(_,{orderId}){
    //         updateorderStatusOnCache(orderId,'delivered')

    //     }
    // })
   
    return (
        <TableRow>
            <TableCell>
                <Dialog open={isDetailsOpen} onOpenChange={setIsDetailsOpen}>
                    <DialogTrigger asChild>
                        <Button variant="outline" size="xs">
                            <Search className="h-3 w-3" />
                            <span className="sr-only">
                                Detalhes do pedido
                            </span>
                        </Button>
                    </DialogTrigger>
                    <OrderDetails open={isDetailsOpen}  orderId={order.orderId} />
                </Dialog>
            </TableCell>
            <TableCell className="font-mono text-xs font-medium">{order.orderId}</TableCell>
            <TableCell className="text-muted-foreground"> 
                {/* { formatDistanceToNow(order.createdAt,{
                    locale: ptBR,
                    addSuffix:true
                })} */}
                há 15 min
            </TableCell>
            <TableCell >
                {/* <OrderStatus status={order.status} /> */}
                <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-slate-400"></span>
                    <span className="font-medium text-muted-foreground">Pendente</span>
                </div>
            </TableCell>
            <TableCell className="font-medium">
                {/* {order.customerName} */}
                Everton V. Guetierres
            </TableCell>
            <TableCell className="font-medium">
                {/* {(order.total/100).toLocaleString('pt-BR',{
                    style:'currency',
                    currency: 'BRL',
                })} */}
                R$ 100,00
            </TableCell>
            <TableCell>
                {/* <Button onClick={()=> approveOrderFn({orderId: order.orderId})} variant="outline" size="xs" disabled={isApprovingOrder}>
                    <ArrowRight className="mr-2 h-3 w-3" />
                    Aprovar
                </Button>
                {order.status === 'pending' && (
                    <Button onClick={()=> approveOrderFn({orderId: order.orderId})} variant="outline" size="xs" disabled={isApprovingOrder}>
                        <ArrowRight className="mr-2 h-3 w-3" />
                        Aprovar
                    </Button>
                )}
                {order.status === 'processing' && (
                    <Button onClick={()=> dispatchOrderFn({orderId: order.orderId})} variant="outline" size="xs" disabled={isDispatchingOrder}>
                        <ArrowRight className="mr-2 h-3 w-3" />
                        Em entrega
                    </Button>
                )}
                {order.status === 'delivering' && (
                    <Button onClick={()=> deliverOrderFn({orderId: order.orderId})} variant="outline" size="xs" disabled={isDeliveringOrder}>
                        <ArrowRight className="mr-2 h-3 w-3" />
                        Entregue
                    </Button>
                )} */}
            </TableCell>
            <TableCell>
                {/* {order.status==='processing' && (
                    <Button variant="ghost" size="xs" disabled={!['pending','processing'].includes(order.status) || isCancelingOrder } onClick={()=> cancelOrderFn({orderId: order.orderId})}>
                        <X className="mr-2 h-3 w-3" />
                        Cancelar
                    </Button>
                )} */}
            </TableCell>
        </TableRow>

    )
}