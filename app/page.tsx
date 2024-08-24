import Login from '@/components/Login';
import Navbar from '@/components/Navbar';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1>Build & Share</h1>
        <Login />
      </main>
    </>
  );
}
