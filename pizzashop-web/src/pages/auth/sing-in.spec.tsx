import { render } from '@testing-library/react'
import { Signin } from './sign-in'
import { MemoryRouter } from 'react-router-dom'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from '@/lib/react.query'
import { HelmetProvider } from 'react-helmet-async'



describe('SigIn',()=>{

    it('should set default email input value if email is presetn on search params',()=>{
        const wrapper = render(
            <Signin />,{
                wrapper: ({children})=>{
                    return (
                        <HelmetProvider>
                            <MemoryRouter initialEntries={['/sign-in?email=johdoe@example.com']}>
                                <QueryClientProvider client={queryClient}>
                                    {children}
                                </QueryClientProvider>
                            </MemoryRouter>
                        </HelmetProvider>
                    )
                }
            })

        const emailInput = wrapper.getByLabelText('Seu e-mail') as HTMLInputElement
        // console.log(emailInput.outerHTML)
        expect(emailInput.value).toEqual('johdoe@example.com')
    })

    
})