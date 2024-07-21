import React from 'react';
export default function Login() {
  return (
    <div className="bg-byfenix h-auto w-auto">
      <div className="flex min-h-screen ">
        <div className="bg-transparent  w-1/3 h-screen ml-auto p-4 flex flex-col justify-center">
          <h1 className="font-sans text-lg text-center pb-16">Register</h1>
          <div className="grid grid-rows-6 grid-flow-col gap-2 pb-4 justify-center">
            <label>Name</label>
            <input type='text' className="rounded-md w-72 h-10 border-black text-gray-900 p-1" />
            <label>E-mail</label>
            <input type='email' className="rounded-md w-72 h-10 border-black text-gray-900 p-1" required />
            <label>Informe uma Senha</label>
            <input type='password' className="rounded-md w-72 h-10 border-black text-gray-900 p-1" required/>
          </div>
          <div className="grid grid-rows-1 grid-flow-col gap-1 justify-center p-14">
            <button className="p-2 rounded-lg bg-sky-500 hover:bg-sky-700" type="submit">Salvar</button>
            <button className="p-2 rounded-lg bg-sky-500 hover:bg-sky-700" type="reset">Limpar</button>
          </div>
        </div>
      </div>
    </div>
  )
}