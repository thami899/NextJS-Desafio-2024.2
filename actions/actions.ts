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

export async function criarCripto(variavel: { title: string, price: string, description: string }) {
    const { title, price, description } = variavel;

    await prisma.product.create({
        data: {
            title,
            price: parseFloat(price), 
            description,
        },
    });
    redirect("/listadeproduto");
}

export async function editarCripto(id: number | undefined, formData: { title?: string, price?: string, description?: string }) {
    if (id === undefined) throw new Error("ID inválido");

    const { title, price, description } = formData;

    if (title) {
        await prisma.product.update({
            where: { id },
            data: { title },
        });
    }

    if (price) {
        await prisma.product.update({
            where: { id },
            data: { price: parseFloat(price) },  
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
