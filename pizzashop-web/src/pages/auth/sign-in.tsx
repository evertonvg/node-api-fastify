import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Helmet } from 'react-helmet-async'
import { toast } from 'sonner'
import { z } from 'zod'
import  { useForm } from 'react-hook-form'
import { Link, useSearchParams } from 'react-router-dom'
import { useMutation } from '@tanstack/react-query'
import { signIn } from '@/api/sign-in'

const signInForm = z.object({
    email:z.string().email(),
})

type signInForm = z.infer<typeof signInForm>

export function Signin() {
    const [searchParams] = useSearchParams()

    const { register, handleSubmit, formState:{isSubmitting} } = useForm<signInForm>({
        defaultValues:{
            email: searchParams.get('email') ?? ''
        }
    })

    // const { mutateAsync: authenticate } = useMutation({
    //     mutationFn:signIn
    // })

    async function handleSignIn(data: signInForm){
        try{

            await new Promise(resolve=> setTimeout(resolve,2000))

            // await authenticate({
            //     email:data.email
            // })

            toast.success('enviamos um link de autenticação para seu email.',{
                action:{
                    label: 'Reenviar',
                    onClick:()=>handleSignIn(data)
                }
            })
        }catch{
            toast.error('Credenciais invalidas.')
        } 
    }


    return (
        <>
            <Helmet title="Login" />
            
            <div className='p-8'>
                <Button variant="ghost" asChild className='absolute right-4 top-8'>
                    <Link to="/sign-up" >
                        novo estabelecimento
                    </Link>
                </Button>

                <div className='w-[350px] flex flex-col justify-center gap-6'>

                    <div className='flex flex-col gap-2 text-center'>
                        <h1 className='text-2xl font-semibold tracking-tight'>
                            Acessar Painel
                        </h1>
                        <p className='text-sm text-muted-foreground'>
                            Acompanhe suas vendas pelo painel do parceiro!
                        </p>
                    </div>

                    <form action="" className='space-y-4' onSubmit={handleSubmit(handleSignIn)}>
                        <div className='space-y-2'>
                            <Label htmlFor='email'>
                                Seu e-mail
                            </Label>
                            <Input type='email' id='email' {...register('email')} />
                        </div>
                        <Button className='w-full' type='submit' disabled={isSubmitting}>
                            Acessar painel
                        </Button>
                    </form>
                </div>
            </div>
        </>
    )
}
