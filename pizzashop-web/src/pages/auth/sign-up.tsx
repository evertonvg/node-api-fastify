import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Helmet } from 'react-helmet-async'
import { toast } from 'sonner'
import { z } from 'zod'
import  { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'

const signUpForm = z.object({
    email:z.string().email(),
    managerName: z.string(),
    restaurantName:z.string(),
    phone:z.string()

})

type signUpForm = z.infer<typeof signUpForm>

export function SignUp() {

    const navigate = useNavigate()

    const { 
        register, 
        handleSubmit, 
        formState:{
            isSubmitting
        } } = useForm<signUpForm>()

    async function handleSignUp(data: signUpForm){
        try{
            console.log(data)

            await new Promise(resolve=> setTimeout(resolve,2000))

            toast.success('Restaurante cadastrado com sucesso.',{
                action:{
                    label: 'Login',
                    onClick:()=> navigate('/sign-in')
                }
            })

        }catch{
        toast.error('Erro ao cadastrar restaurante.')
        } 
    }


    return (
        <>
            <Helmet title="Cadastro" />
            <div className='p-8'>

                <Button variant="ghost" asChild className='absolute right-4 top-8'>
                    <Link to="/sign-in" >
                        Fazer Login
                    </Link>
                </Button>

                <div className='w-[350px] flex flex-col justify-center gap-6'>

                    <div className='flex flex-col gap-2 text-center'>
                        <h1 className='text-2xl font-semibold tracking-tight'>
                            Criar conta gratis
                        </h1>
                        <p className='text-sm text-muted-foreground'>
                            Seja um parceiro e comece suas vendas!
                        </p>
                    </div>

                    <form action="" className='space-y-4' onSubmit={handleSubmit(handleSignUp)}>

                        <div className='space-y-2'>
                            <Label htmlFor='restaurantName'>
                                Nome do estabelecimento
                            </Label>
                            <Input type='text' id='restaurantName' {...register('restaurantName')} />
                        </div>

                        <div className='space-y-2'>
                            <Label htmlFor='managerName'>
                                Seu nome
                            </Label>
                            <Input type='text' id='managerName' {...register('managerName')} />
                        </div>

                        <div className='space-y-2'>
                            <Label htmlFor='email'>
                                Seu email
                            </Label>
                            <Input type='email' id='email' {...register('email')} />
                        </div>

                        <div className='space-y-2'>
                            <Label htmlFor='phone'>
                                Seu Telefone
                            </Label>
                            <Input type='tel' id='phone' {...register('phone')} />
                        </div>

                        <Button className='w-full' type='submit' disabled={isSubmitting}>
                            Finalizar cadastro
                        </Button>

                        <p className='px-6 text-center text-sm leading-relaxed text-muted-foreground'>
                            Ao continuar, você concorda com nossos 
                            <a href="" className='underline underline-offset-1'>Termos de serviço</a>
                            {' '} e {' '}
                            <a href="" className='underline underline-offset-1'>politicas de privacidade</a>.
                        </p>

                    </form>
                </div>
            </div>
        </>
    )
}
