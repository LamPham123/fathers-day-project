import Link from 'next/link';
import Image from 'next/image';

export default function CompletionPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 to-blue-700 flex items-center justify-center p-8">
      <div className="max-w-2xl bg-white rounded-xl shadow-lg p-8 text-center">
        <h1 className="text-4xl font-bold text-blue-900 mb-6">
          Congratulations! 🎉
        </h1>
        <div className="relative w-full h-96 mb-8 rounded-lg overflow-hidden">
          <Image
            src="/puzzle-images/family.png"
            alt="Family Photo"
            fill
            className="object-contain"
            priority
          />
        </div>
        <div className="space-y-6 text-gray-700">
          <div className="bg-blue-50 p-6 rounded-lg">
            <p className="text-lg mb-4">
              To the best Father in the world,
            </p>
            <p className="text-lg mb-4">
              Thank you for teaching us how to be happy. I am very happy that you are my father and that you are being patient and understanding even though sometimes I do not listen. I hope you know that I care for you very much and I hope you have good fathers day. 
            </p>
            <p className="text-lg mb-4">
              You&apos;ve taught us the value of hard work, the importance of family, 
              and the power of a good laugh. Every day with you is a gift.
            </p>
            <p className="text-lg font-semibold text-blue-900">
              Happy Father&apos;s Day! We love you more than words can say! ❤️
            </p>
          </div>
        </div>
        <Link
          href="/"
          className="inline-block mt-8 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Start Over
        </Link>
      </div>
    </div>
  );
} 