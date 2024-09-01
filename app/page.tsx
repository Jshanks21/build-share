import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Repos } from '@/components/Repos';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <button className="btn btn-primary">Build</button>
        <Repos />
      </main>
      <Footer />
    </>
  );
}
