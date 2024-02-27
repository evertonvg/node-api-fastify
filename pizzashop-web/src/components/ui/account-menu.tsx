import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { Button } from "./button";
import { Building, ChevronDown, LogOut } from "lucide-react";

export function Accountmenu(){
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" className="flex items-center gap-2 select-none">
                    Pizza Shop
                    <ChevronDown className="w-4 h-4" />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56 mt-6 border border-gray-200 p-2 flex flex-col gap-2">
                <DropdownMenuLabel className="flex flex-col">
                    <span>Everton Guetierres</span>
                    <span className="text-xs font-normal text-muted-foreground">
                        evertoniee@yahoo.com.br
                    </span>
                </DropdownMenuLabel>
                <DropdownMenuSeparator className="bg-gray-200 h-1"/>
                <DropdownMenuItem className="flex items-center cursor-pointer">
                    <Building className="mr-2 h-4 w-4" />
                    <span>
                        Perfil da loja
                    </span>
                </DropdownMenuItem>
                <DropdownMenuItem className="text-rose-500 dark:text-rose-400 flex items-center cursor-pointer">
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>
                        Sair
                    </span>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}