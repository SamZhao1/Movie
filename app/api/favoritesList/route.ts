import { PrismaClient } from '@prisma/client'
import prisma from '../../../components/database'
 
export async function POST(request:Request){

  let body = await request.json() 
  //console.log('POST Request:', body);

  const addFav = await prisma.favorites.create({
    data:{
      userId: body.userID,
      movieId: body.movieID,
    },
  })

  return new Response('Success!', {
    status: 200,
  })
}

export async function DELETE(request: Request){

  let body = await request.json() ;

  const removeFav = await prisma.favorites.deleteMany({
    where:{
      userId: body.userID,
      movieId: body.movieID,
    },
  })

  return new Response('Success!', {
    status: 200,
  })
}
