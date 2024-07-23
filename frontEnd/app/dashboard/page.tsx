import { getServerSession } from "next-auth"
import ButtonLogout from "./ButtonLogout";
import { redirect } from "next/navigation";
import Image from "next/image"

export default async function Page(){
    const session = await getServerSession();

    console.log(session);
    
    if(!session) {
        redirect("/")
    }

    return <div>
        {session.user?.image && <div className="w-[150px] rounded-xl"><Image src={session.user?.image} alt="Avatar" width={100} height={100}/></div>}
        <div>Olá {session?.user?.name}</div>
        <div>Dashboard</div>
        <div>
            <ButtonLogout/>
        </div>
        </div>
}