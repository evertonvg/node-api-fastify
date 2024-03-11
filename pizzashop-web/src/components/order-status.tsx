export type OrderStatus =
  | 'pending'
  | 'canceled'
  | 'processing'
  | 'delivering'
  | 'delivered'

interface OrderStatusPros {
  status: OrderStatus
}

const orderStatusMap: Record<OrderStatus, string> = {
  pending: 'pendente',
  canceled: 'Cancelado',
  delivered: 'Entregue',
  delivering: 'Em entrega',
  processing: 'Em preparo',
}
export function OrderStatus({ status }: OrderStatusPros) {
  return (
    <div className="flex items-center gap-2">
      {status === 'pending' && (
        <span className="h-2 w-2 rounded-full bg-slate-400"></span>
      )}
      {status === 'canceled' && (
        <span className="h-2 w-2 rounded-full bg-rose-400"></span>
      )}
      {status === 'delivered' && (
        <span className="h-2 w-2 rounded-full bg-emerald-400"></span>
      )}
      {['processing', 'delivering'].includes(status) && (
        <span className="h-2 w-2 rounded-full bg-amber-400"></span>
      )}

      <span className="font-medium text-muted-foreground">
        {orderStatusMap[status]}
      </span>
    </div>
  )
}
