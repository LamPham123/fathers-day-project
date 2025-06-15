import PuzzleCard from '@/components/PuzzleCard';
import Link from 'next/link';

const puzzles = [
  {
    riddle: "When is Dzanh's birthday?",
    answer: "07/10/2001",
    hint: "xx/xx/xxxx",
    imageUrl: "/puzzle-images/Dzanh.png"
  },
  {
    riddle: "Where did we go to vacation last summer?",
    answer: "Hawaii",
    hint: "I am in the United States ",
    imageUrl: "/puzzle-images/hawaii.png"
  },
  {
    riddle: "Where was this photo taken?",
    answer: "New Orleans",
    hint: "August 2015",
    imageUrl: "/puzzle-images/NewOrleans.png"
  },
  {
    riddle: "What did you buy to convince Dzanh to move to a new house and new elementary school??",
    answer: "Xbox",
    hint: "console device",
    imageUrl: "/puzzle-images/Xbox.jpeg"
  },
  {
    riddle: "When is my birthday?",
    answer: "07/21/2005",
    hint: "xx/xx/xxxx",
    imageUrl: "/puzzle-images/Lam.png"
  },
  {
    riddle: "Which boxer did your coworkers say you looked like a long  time ago?",
    answer: "Manny Pacquiao",
    hint: "",
    imageUrl: "/puzzle-images/Manny.jpeg"
  },
  {
    riddle: "What is Mom's favorite color??",
    answer: "Purple",
    hint: "",
    imageUrl: "/puzzle-images/MomColor.png"
  },
  {
    riddle: "Where was this photo taken?",
    answer: "Naples",
    hint: "___, Florida",
    imageUrl: "/puzzle-images/Naples.png"
  },
  {
    riddle: "Karate or Kung Fu?",
    answer: "Kung Fu",
    hint: "",
    imageUrl: "/puzzle-images/Kung.jpeg"
  },
  {
    riddle: "Where am I working this summer?",
    answer: "Amazon",
    hint: "You should know this...",
    imageUrl: "/puzzle-images/Work.png"
  },
  {
    riddle: "What stock did you sell to buy our house??",
    answer: "Costco",
    hint: "____ Stock",
    imageUrl: "/puzzle-images/Stock.jpeg"
  },
  {
    riddle: "When is Mom's birthday?",
    answer: "10/17/1969",
    hint: "xx/xx/xxxx",
    imageUrl: "/puzzle-images/Mom.png"
  },
  {
    riddle: "What kind of fish is Dory from Finding Nemo?",
    answer: "Hippo Tang",
    hint: "blue",
    imageUrl: "/puzzle-images/Dory.webp"
  },
  {
    riddle: "What is your favorite quote right now?",
    answer: "Teach your kids to be happy not rich",
    hint: "Teach your ____ to be ____ not ____",
    imageUrl: "/puzzle-images/puzzle1.jpg"
  },
];

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function PuzzlePage({ params }: PageProps) {
  const { id } = await params;
  const puzzleNumber = parseInt(id);
  const puzzle = puzzles[puzzleNumber - 1];
  const nextPuzzleUrl = puzzleNumber < puzzles.length ? `/puzzle/${puzzleNumber + 1}` : null;

  if (!puzzle) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-blue-900 to-blue-700 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-3xl font-bold mb-4">Puzzle Not Found</h1>
          <Link href="/" className="text-blue-200 hover:text-white underline">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 to-blue-700 py-12 px-4">
      <PuzzleCard
        riddle={puzzle.riddle}
        answer={puzzle.answer}
        hint={puzzle.hint}
        puzzleNumber={puzzleNumber}
        totalPuzzles={puzzles.length}
        nextPuzzleUrl={nextPuzzleUrl}
        imageUrl={puzzle.imageUrl}
      />
    </div>
  );
} 