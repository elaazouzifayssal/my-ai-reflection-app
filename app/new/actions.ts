"use server";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";

export async function createReflection(title: string, content: string) {
  const { userId } = await auth();

  // 1. what should we do if userId is null? (user not logged in)
  if (!userId) {
    redirect("/sign-in");
  }
  await prisma.reflection.create({
    data: {
      title,
      content,
      userId,
    },
  });

  // 3. where do we redirect after saving?
  redirect("/");
}
