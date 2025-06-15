import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-900 to-blue-200 flex flex-col items-center justify-center p-8">
      <div className="max-w-2xl text-center">
        <h1 className="text-5xl font-bold text-white mb-6">
          Happy Father&apos;s Day!
        </h1>
        <p className="text-xl text-blue-100 mb-8">
          Welcome to your special Father&apos;s Day puzzle adventure! 
          Solve these riddles to unlock your surprise message.
        </p>
        <Link 
          href="/puzzle/1" 
          className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold py-3 px-8 rounded-full text-lg transition-colors duration-300"
        >
          Start Your Adventure
        </Link>
      </div>
    </main>
  );
}
