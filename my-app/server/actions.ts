'use server'

import { db } from "@/server"
import {todos} from './schema'
import { revalidatePath } from "next/cache";
import { eq } from "drizzle-orm";
import { redirect } from "next/navigation";

export const readData = async () => {
   const todos = await db.query.todos.findMany();

   if(!todos){
    return {error:"No todos found."}
   }

   return {success:todos};
}

export const createData = async (formData:FormData) => {
   const todoTitle = formData.get("todoTitle")?.toString()
   if(!todoTitle){
      return {error:"No todo title found"}
   }

   await db.insert(todos).values({
      title: todoTitle
   })
   revalidatePath("/")

   return {success:"Todo created"}
}

export const deleteData = async (formData: FormData) => {
   const id = Number(formData.get("id"))
   if(!id){
      return {error:"No id found"}
   }
   await db.delete(todos).where(eq(todos.id, id));
   revalidatePath("/")

   return {success:"Todo deleted"}
}

export const updateData = async (formData:FormData)=>{
   const todoTitle = formData.get("title")?.toString();
   const todoID = Number(formData.get("id"))

   if(!todoTitle){
      return {error:"No todo title found."}
   }

   await db.update(todos).set({title:todoTitle}).where(eq(todos.id,todoID))
   revalidatePath("/")
   redirect("/")
}