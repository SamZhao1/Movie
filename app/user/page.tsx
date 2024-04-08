import {getServerSession} from 'next-auth';
import { redirect } from "next/navigation";

export default async function App(){
    
    const session = await getServerSession();

    if(!session || !session.user){
        redirect('/');
    }

    return(
        <>
            {session?.user?.name ? (
                <div>{session?.user?.name}</div>
            ) : (
                <div>Not Logged In</div>
            )}
        </>
    );
}