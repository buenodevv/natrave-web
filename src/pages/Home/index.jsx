import {Navigate} from  'react-router-dom'
import { useLocalStorage } from 'react-use'

const Title = ({ children, ...props }) => (
  <h1{...props}>{children}</h1>
)
export function Home() {
  const [auth] = useLocalStorage('auth', {})

  if(auth?.user?.id){
    return <Navigate to="/dashboard" replace={true}/>
  }
  return (
    <div className="h-screen p-4 bg-red-700 text-white flex flex-col items-center space-y-6">

      <header className="container flex justify-center p-4 max-w-5xl">
        <img src="/imgs/Logo.svg" className="w-40 " alt="logo" />
      </header> 

      <div className="container max-w-5xl p-4 items-center flex-1 flex flex-col md:flex-row space-y-6 md:justify-center md:space-y-0 md:space-x-6 ">
   
        <div className="md:flex-1 flex justify-center">
          <img src="/imgs/img.png" className="w-full max-w-sm " alt="logo" />
        </div>

        <div className="md:flex-1 flex flex-col space-y-6">
          <h1 className="text-3xl text-center md:text-left font-bold" >Dê seu palpite na copa do Mundo do Catar 2022!</h1>

          <a href="/signup" className=" text-center text-red-700 bg-white text-xl px-8 py-4 rounded-xl" >
            Criar minha conta
          </a>

          <a href="/login" className="text-center text-white border border-white text-xl px-8 py-4 rounded-xl" >
            Fezer Login
          </a>

        </div>
      </div>
    </div>

  )
}

