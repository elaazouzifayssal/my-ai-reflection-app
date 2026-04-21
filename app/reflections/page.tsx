import { prisma } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function GetReflectionPage() {
  const { userId } = await auth();
  if (!userId) {
    redirect("/sign-in");
  }
  const reflections = await prisma.reflection.findMany({
    where: { userId },
    orderBy: { createdAt: "desc" },
  });

  return (
    <main>
      <h1>My Reflections</h1>
      {reflections.map((reflection) => (
        <div key={reflection.id}>
          <p>{reflection.createdAt.toLocaleDateString()}</p>
          <p>{reflection.content.slice(0, 100)}</p>
        </div>
      ))}
    </main>
  );
}
