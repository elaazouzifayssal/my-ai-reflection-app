import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen p-8">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-3xl font-bold">Week 3 MVP</h1>
        <p className="mt-4 text-gray-600">
          Reflection app with Next.js, Prisma, Neon, and Clerk.
        </p>

        <div className="mt-6 flex gap-4">
          <Link
            href="/sign-up"
            className="rounded bg-black px-4 py-2 text-white"
          >
            Sign up
          </Link>
          <Link href="/sign-in" className="rounded border px-4 py-2">
            Sign in
          </Link>
        </div>
      </div>
    </main>
  );
}
