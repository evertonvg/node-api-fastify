import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { Button } from "./ui/button";
import { Building, ChevronDown, LogOut } from "lucide-react";
import { Skeleton } from "./ui/skeleton";
import { Dialog, DialogTrigger } from "@radix-ui/react-dialog";
import { StoreProfileDialog } from "./store-profile-dialog";
import { useMutation } from "@tanstack/react-query";
import { signOut } from "@/api/sign-out";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { useQuery } from "@tanstack/react-query";
import { getProfile } from "@/api/get-profile";
import { getManagerRestaurant } from "@/api/get-manager-restaurant";


export function Accountmenu(){
    const navigate = useNavigate()

    const { data: profile, isLoading: isLoadingProfile } =useQuery({
        queryKey: ['profile'],
        queryFn: getProfile,
        staleTime: Infinity
    })
    const { data: managedRestaurant, isLoading: isLoadingManagerRestaurant } =useQuery({
        queryKey: ['managed-restaurant'],
        queryFn: getManagerRestaurant,
        staleTime: Infinity
    })

    const { mutateAsync: signOutFn, isPending: isSigningOut} = useMutation({
        mutationFn: signOut,
        onSuccess:()=>{
            toast.success('Deslogado com sucesso')
            navigate('/sign-in',{replace:true})
        }
    })

    return (
        <Dialog>
            <DropdownMenu >
                <DropdownMenuTrigger asChild className="bg-white">
                    <Button variant="outline" className="flex items-center gap-2 select-none">
                        { isLoadingManagerRestaurant ? (
                            <Skeleton className="h-4 w-40" />
                        ) :(
                            managedRestaurant?.name
                        )}
                        <ChevronDown className="w-4 h-4" />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56 mt-6 border border-gray-200 p-2 flex flex-col gap-2 bg-white">
                    <DropdownMenuLabel className="flex flex-col">
                        {
                            isLoadingProfile ? (
                                <div className="space-y-1.5">
                                    <Skeleton className="h-4 w-32" />
                                    <Skeleton className="h-4 w-24" />
                                </div>
                                
                            ) : (
                                <>
                                    <span>
                                        {profile?.name}
                                    </span>
                                    <span className="text-xs font-normal text-muted-foreground">
                                        {profile?.email}
                                    </span>
                                </>
                            )
                        } 
                    
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator className="bg-gray-200 h-1"/>
                    <DialogTrigger asChild>
                        <DropdownMenuItem className="flex items-center cursor-pointer">
                            <Building className="mr-2 h-4 w-4" />
                            <span>
                                Perfil da loja
                            </span>
                        </DropdownMenuItem>
                    </DialogTrigger>
                    <DropdownMenuItem asChild 
                        disabled={isSigningOut} 
                        className="text-rose-500 dark:text-rose-400 flex items-center cursor-pointer">
                        <button 
                            onClick={()=>{signOutFn}} 
                            className="w-full">
                            <LogOut className="mr-2 h-4 w-4" />
                            Sair
                        </button>
                        
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
            <StoreProfileDialog />
        </Dialog>
    )
}