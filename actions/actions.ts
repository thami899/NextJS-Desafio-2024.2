"use server"

import prisma from "@/lib/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function GetCripto() {
    const posts = await prisma.product.findMany({
        select: {
            id: true,
            title: true,
            description: true,
            price: true,
        }
    });
    return posts;
}

export async function deleteCripto(id: number | undefined) {
    if (id === undefined) throw new Error("ID inválido");

    await prisma.product.delete({
        where: { id },
    });
    revalidatePath("/listadeproduto");
    redirect("/listadeproduto");
}

export async function criarCripto(data:FormData) {
    const title = data.get("title") as string;
    const description = data.get("description") as string;
    const priceStr = data.get("price") as string;
    const price = Math.ceil(parseFloat(priceStr));
    await prisma.product.create({
        data: {
            title,
            price, 
            description,
        },
    });
    redirect("/listadeproduto");
}

export async function editarCripto(id: number | undefined,data:FormData) {
    const title:string|undefined = data.get("title") as string|undefined;
    const description:string|undefined = data.get("description") as string|undefined;
    const priceStr = data.get("price") as string;
    const price = Math.ceil(parseFloat(priceStr));


    if (title) {
        await prisma.product.update({
            where: { id },
            data: { title },
        });
    }

    if (price) {
        await prisma.product.update({
            where: { id },
            data: { price},  
        });
    }

    if (description) {
        await prisma.product.update({
            where: { id },
            data: { description },
        });
    }
    redirect("/listadeproduto");
}

export async function visualizarCripto(id: number | undefined) {
    if (id === undefined) throw new Error("ID inválido");

    const moeda = await prisma.product.findUnique({
        where: { id },
        select: {
            id: true,
            title: true,
            description: true,
            price: true,
        }
    });
    return moeda;
}

export async function Naoageuntomaisprodutos(currentPage:number){
    const maluco=(currentPage-1)*6;
     const produtos= await prisma.product.findMany({
        orderBy:{
            id:"asc",

        },
        take:6,
        skip:maluco,
     });
     const louco=await prisma.product.count();
     const totalPages= Math.ceil(louco/6);
     return{produtos,totalPages};

}
export async function pegaprodutoporid(id:number|undefined){
    const produto = await prisma.product.findUnique({
        where:{
            id
        },
        select:{
            id:true,
            title:true,
            price:true,
            description:true,
            createdAt:true,
        }
    })
    return produto;
}