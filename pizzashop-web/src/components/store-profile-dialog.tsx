import { useForm } from "react-hook-form"
import { Button } from "./ui/button"
import { DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "./ui/dialog"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { Textarea } from "./ui/textarea"
import { z } from "zod"
import { zodResolver } from '@hookform/resolvers/zod'
import { GetManagerRestaurantResponse, getManagerRestaurant } from "@/api/get-manager-restaurant"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { updateProfile } from "@/api/update-profile"
import { toast } from "sonner"

const storeprofileSchema = z.object({
    name: z.string().min(1),
    description: z.string().nullable()
})

type StoreprofileSchema = z.infer<typeof storeprofileSchema>

export function StoreProfileDialog(){
    const queryClient = useQueryClient()

    const { data: managedRestaurant, isLoading: isLoadingManagerRestaurant } = useQuery({
        queryKey: ['managed-restaurant'],
        queryFn: getManagerRestaurant,
        staleTime: Infinity
    })

    

    const { register, handleSubmit, formState: { isSubmitting } } = useForm<StoreprofileSchema>({
        resolver: zodResolver(storeprofileSchema),
        values:{
            name: managedRestaurant?.name ?? '',
            description: managedRestaurant?.description ?? ''
        }
    })

    function updateManagedRestaurantCache({name,description}:StoreprofileSchema){
        const cached = queryClient.getQueryData<GetManagerRestaurantResponse>(['managedRestaurant'])
        if(cached){
            queryClient.setQueryData<GetManagerRestaurantResponse>(['managed-restaurant'],{
                ...cached,
                name,description
            })
        }

        return {cached}
    }

    const { mutateAsync: updateProfileFn} = useMutation({
        mutationFn: updateProfile,
        onMutate({name,description}){
            const {cached} = updateManagedRestaurantCache({name,description})
            return {previousProfile:cached}
        },
        onError(_,__,context){
            if(context?.previousProfile){
                updateManagedRestaurantCache(context.previousProfile)
            }
        }
    })

    async function handleUpdateProfile(data:StoreprofileSchema) {
        try {
            await updateProfileFn({
                name: data.name,
                description: data.description
            })

            toast.success('perfil atualizado com sucesso')
        } catch {
            toast.error('Falha ao atualizar o perfil. tente novamente mais tarde!')
        }
    }

    return <DialogContent> 
            <DialogHeader>
                <DialogTitle>
                    Perfil da loja
                </DialogTitle>
                <DialogDescription>
                    Atualize as informações do seu estabelecimento visíveis ao seu cliente
                </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit(handleUpdateProfile)}>
                <div className="space-y-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label className="text-right" htmlFor="name">
                            Nome
                        </Label>
                            <Input className="col-span-3" id="name" 
                            {...register('name')} 
                            />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label className="text-right" htmlFor="description" 
                        {...register('description')}
                        >
                            Descrição
                        </Label>
                        <Textarea className="col-span-3" id="description" />
                    </div>
                </div>
                <DialogFooter>
                    <DialogClose asChild>
                        <Button variant="ghost">Cancelar</Button>
                    </DialogClose>
                    
                    <Button variant="success" type="submit" disabled={isSubmitting}>Salvar</Button>
                    
                </DialogFooter>
            </form>
        </DialogContent>
}