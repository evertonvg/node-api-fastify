import { useForm } from "react-hook-form"
import { Button } from "./ui/button"
import { DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "./ui/dialog"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { Textarea } from "./ui/textarea"
import { z } from "zod"
import { zodResolver } from '@hookform/resolvers/zod'

export function StoreProfileDialog(){
    // a requisição n irá repetir 
    // const { data: managedRestaurant, isLoading: isLoadingManagerRestaurant } =useQuery({
    //     queryKey: ['managed-restaurant'],
    //     queryFn: getManagerRestaurant
    // })

    const storeprofileSchema = z.object({
        name: z.string().min(1),
        description: z.string()
    })

    type StoreprofileSchema = z.infer<typeof storeprofileSchema>

    // const { register, handleSubmit } = useForm<StoreprofileSchema>({
    //     resolver: zodResolver(storeprofileSchema),
    //     values:{
    //         name: managedRestaurant?.name ?? '',
    //         description: managedRestaurant?.description ?? ''
    //     }
    // })

    const {} = useForm()

    return <DialogContent> 
            <DialogHeader>
                <DialogTitle>
                    Perfil da loja
                </DialogTitle>
                <DialogDescription>
                    Atualize as informações do seu estabelecimento visíveis ao seu cliente
                </DialogDescription>
            </DialogHeader>
            <form action="">
                <div className="space-y-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label className="text-right" htmlFor="name">
                            Nome
                        </Label>
                            <Input className="col-span-3" id="name" 
                            // {...register('name')} 
                            />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label className="text-right" htmlFor="description" 
                        // {...register('description')}
                        >
                            Descrição
                        </Label>
                        <Textarea className="col-span-3" id="description" />
                    </div>
                </div>
                <DialogFooter>
                    <Button variant="ghost">Cancelar</Button>
                    <Button variant="success">Salvar</Button>
                </DialogFooter>
            </form>
        </DialogContent>
}