"use server";

import { db } from ".";
import { posts } from "./schema";
import { revalidatePath } from "next/cache";
import { eq } from "drizzle-orm";
import { redirect } from "next/navigation";

export const getPosts = async () => {
  const posts = await db.query.posts.findMany();

  if (!posts) {
    return { error: "No posts found." };
  }

  return { success: posts };
};

export const getPost = async (id: number) => {
  const post = await db.query.posts.findFirst({
    where: eq(posts.id, id),
  });
  if (!post) {
    redirect("/");
  }
  return { success: post };
};

export const createData = async (formData: FormData) => {
  const title = formData.get("title")?.toString();
  const description = formData.get("description")?.toString();
  if (!title || !description) {
    return { error: "Invalid data format" };
  }

  await db.insert(posts).values({ title, description });
  revalidatePath("/");
  redirect("/");
};

export const deleteData = async (formData: FormData) => {
  const id = Number(formData.get("id"));
  if (!id) {
    return { error: "No id found" };
  }
  await db.delete(posts).where(eq(posts.id, id));
  revalidatePath("/");

  redirect("/");
};

export const updateData = async (formData: FormData) => {
  const title = formData.get("title")?.toString();
  const description = formData.get("description")?.toString();
  const id = Number(formData.get("id"));

  if (!title || !description || !id) {
    return { error: "No post found." };
  }

  await db.update(posts).set({ title, description }).where(eq(posts.id, id));
  revalidatePath(`/post/${id}`);
  revalidatePath("/");
  redirect("/");
};
