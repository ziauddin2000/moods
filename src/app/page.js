import Link from "next/link";

export default function Home() {
  return (
    <div className="py-5 lg:py-10 px-10">
      <p className="mb-5">Landing Page will come here</p>
      <Link
        className="btn px-3 py-2 bg-green1 text-white rounded-sm"
        href="/auth"
      >
        Auth Page
      </Link>
    </div>
  );
}
