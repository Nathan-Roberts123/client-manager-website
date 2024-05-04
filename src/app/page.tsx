import Navbar from "@/app/components/navbar";
import Features from "./components/features";

export default function Home() {
  return (
    <div className="p-4 h-full flex-col">
      <Navbar />
      <main className="mt-16">
        <div className="flex-col justify-content-center text-center mb-24">
          <h1 className="font-bold text-3xl mb-4">
            Empower Your Client Relationships with Smart Management.
          </h1>
          <h2 className="font-semibold">
            Free Open Source, Client Management Software.
          </h2>
        </div>
        <Features />
      </main>
      <footer className="flex justify-center fixed bottom-0 right-0 left-0 text-center bg-secondary py-4">
        <p>Copyright ©2024 ClientMaster. All rights reserved.</p>
      </footer>
    </div>
  );
}
