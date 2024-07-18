'use server'

import prisma from "@/app/_lib/prisma";
import { revalidatePath } from "next/cache";
import { findCategory } from "./data";
import { redirect } from "next/navigation";

export async function deleteTransaction(id) {
    await prisma.transaction.delete({ where: { id } })
    revalidatePath('/transactions')

}

export async function createTransaction(formData) {
    const categoryId = formData.get('categoryId')
    const amount = formData.get('amount')
    const date = formData.get('date')
    const description = formData.get('description')

    if (!categoryId) {
        throw new Error('Category is Required')
    }

    const foundCategory = await findCategory(categoryId)

    if (!foundCategory) {
        throw new Error('Invalid Category')
    }

    if (!amount) {
        throw new Error('Amount is Required')
    }

    if (isNaN(amount)) {
        throw new Error('Invalid amount')
    }

    if (!date) {
        throw new Error('Date is Required')
    }

    const newDate = new Date(date)

    const data = {}
    data.categoryId = categoryId
    data.amount = +amount * 100
    data.date = newDate
    data.description = description

    await prisma.transaction.create({ data })

    redirect('/transactions')
}


export async function updateTransaction(id, formData) {
    const categoryId = formData.get('categoryId')
    const amount = formData.get('amount')
    const date = formData.get('date')
    const description = formData.get('description')

    if (!categoryId) {
        throw new Error('Category is Required')
    }

    const foundCategory = await findCategory(categoryId)

    if (!foundCategory) {
        throw new Error('Invalid Category')
    }

    if (!amount) {
        throw new Error('Amount is Required')
    }

    if (isNaN(amount)) {
        throw new Error('Invalid amount')
    }

    if (!date) {
        throw new Error('Date is Required')
    }
    const newDate = new Date(date)

    const data = {}
    data.categoryId = categoryId
    data.amount = +amount * 100
    data.date = newDate
    data.description = description

    await prisma.transaction.update({ data, where: { id } })

    redirect('/transactions')
}