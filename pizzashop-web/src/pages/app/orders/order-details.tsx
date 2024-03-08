import { getorderDetails } from "@/api/get-order-details";
import { OrderStatus } from "@/components/order-status";
import { DialogHeader, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { Table, TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useQuery } from "@tanstack/react-query";
import { formatDistanceToNow} from 'date-fns'
import { ptBR } from 'date-fns/locale'

export interface OrderDetailsprops {
    orderId:string
    open:boolean
}


export function OrderDetails({orderId, open}:OrderDetailsprops){
    const {data:order} = useQuery({
        queryKey:['order',orderId],
        queryFn: ()=> getorderDetails({orderId}),
        enabled:open
    })

    

    return(
        <DialogContent>
            <DialogHeader>
                <DialogTitle>
                    Pedido: aushasuhs
                    {/* Pedido: {orderId} */}
                </DialogTitle>
                <DialogDescription>
                    Detalhes do pedido:
                </DialogDescription>
            </DialogHeader>
            {order && (
                <div className="space-y-6">
                <Table>
                    <TableBody>
                        <TableRow>
                            <TableCell className="text-muted-foreground">
                                Status
                            </TableCell>
                            <TableCell className="flex justify-end">
                                {/* <OrderStatus status={order.status} /> */}
                                <div className="flex items-center gap-2">
                                    <span className="h-2 w-2 rounded-full bg-slate-400"></span>
                                    <span className="font-medium text-muted-foreground">Pendente</span>
                                </div>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="text-muted-foreground">
                                Cliente
                            </TableCell>
                            <TableCell className="flex justify-end">
                                Everton Vargas Guetierres
                                {/* {order.customer.name} */}
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="text-muted-foreground">
                                Telefone
                            </TableCell>
                            <TableCell className="flex justify-end">
                                (47)99999-9999
                                {/* {order.customer.phone} || 'Não informado' */}
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="text-muted-foreground">
                                Email
                            </TableCell>
                            <TableCell className="flex justify-end">
                                Evertoniee@yahoo.com.br
                                {/* {order.customer.email} */}
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="text-muted-foreground">
                                Realizado há
                            </TableCell>
                            <TableCell className="flex justify-end">
                                há 3 minutos
                                {/* { formatDistanceToNow(order.createdAt,{
                                    locale: ptBR,
                                    addSuffix:true
                                })} */}
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>

                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Produto</TableHead>
                            <TableHead className="text-right">Qtd.</TableHead>
                            <TableHead className="text-right">Preço</TableHead>
                            <TableHead className="text-right">Subtotal</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {/* {order.orderItems.map((item)=>{
                            return (
                                <>
                                    <TableRow key={item.id}>
                                        <TableCell>
                                            {item.product.name}
                                        </TableCell>
                                        <TableCell className="text-right">
                                            {item.quantity}
                                        </TableCell>
                                        <TableCell className="text-right">
                                            {(item.priceInCents / 100).toLocaleString('pt-BR',{
                                                style:'currency',
                                                currency: 'BRL',
                                            })}
                                        </TableCell>
                                        <TableCell className="text-right">
                                            {(item.priceInCents * item.quantity / 100).toLocaleString('pt-BR',{
                                                style:'currency',
                                                currency: 'BRL',
                                            })}
                                        </TableCell>
                                    </TableRow><TableRow></TableRow>
                                </>
                            )
                        })} */}
                        <TableRow>
                            <TableCell>
                                Pizza Pepperoni Familia
                            </TableCell>
                            <TableCell className="text-right">
                                2
                            </TableCell>
                            <TableCell className="text-right">
                                R$ 59,90
                            </TableCell>
                            <TableCell className="text-right">
                                R$ 119,80
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>
                                Pizza Muzzarela Familia
                            </TableCell>
                            <TableCell className="text-right">
                                2
                            </TableCell>
                            <TableCell className="text-right">
                                R$ 59,90
                            </TableCell>
                            <TableCell className="text-right">
                                R$ 119,80
                            </TableCell>
                        </TableRow>
                    </TableBody>
                    <TableFooter>
                        <TableRow>
                            <TableCell colSpan={3}>
                                Total do pedido:
                            </TableCell>
                            <TableCell className="text-right font-medium">
                                {/* {(order.totalInCents / 100).toLocaleString('pt-BR',{
                                    style:'currency',
                                    currency: 'BRL',
                                })} */}
                                R$ 200,00
                            </TableCell>
                        </TableRow>
                    </TableFooter>
                </Table>
            </div>
            )}
        </DialogContent>
    )
}