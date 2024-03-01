import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { Button } from "./ui/button";
import { Building, ChevronDown, LogOut } from "lucide-react";
import { Skeleton } from "./ui/skeleton";
import { Dialog, DialogTrigger } from "@radix-ui/react-dialog";
import { StoreProfileDialog } from "./store-profile-dialog";
// import { useQuery } from "@tanstack/react-query";
// import { getProfile } from "@/api/get-profile";
// import { getManagerRestaurant } from "@/api/get-manager-restaurant";
// import { Skeleton } from "./ui/skeleton";

export function Accountmenu(){

    // const { data: profile, isLoading: isLoadingProfile } =useQuery({
    //     queryKey: ['profile'],
    //     queryFn: getProfile
    // })
    // const { data: managedRestaurant, isLoading: isLoadingManagerRestaurant } =useQuery({
    //     queryKey: ['managed-restaurant'],
    //     queryFn: getManagerRestaurant
    // })

    return (
        <Dialog>
            <DropdownMenu >
                <DropdownMenuTrigger asChild className="bg-white">
                    <Button variant="outline" className="flex items-center gap-2 select-none">
                        Pizza Shop
                        {/* { isLoadingManagerRestaurant ? (
                            <Skeleton className="h-4 w-40" />
                        ) :(
                            managedRestaurant?.name
                        )} */}
                        <ChevronDown className="w-4 h-4" />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56 mt-6 border border-gray-200 p-2 flex flex-col gap-2 bg-white">
                    <DropdownMenuLabel className="flex flex-col">
                        {/* {
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
                                    <span span="text-xs font-normal text-muted-foreground">
                                        {profile?.email}
                                    </span>
                                </>
                            )
                        } */}
                        <span>
                            Everton V. Guetierrres
                        </span>
                        <span className="text-xs font-normal text-muted-foreground">
                            evertoniee@yahoo.com.br
                        </span>
                    
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
                    <DropdownMenuItem className="text-rose-500 dark:text-rose-400 flex items-center cursor-pointer">
                        <LogOut className="mr-2 h-4 w-4" />
                        <span>
                            Sair
                        </span>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
            <StoreProfileDialog />
        </Dialog>
    )
}