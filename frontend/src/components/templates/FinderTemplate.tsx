import { AnagramFinder } from "../organisms/AnagramFinder";

const FinderTemplate = () => {
  return (
    <main className="flex flex-col justify-center items-center w-screen h-screen bg-black text-gray-400 p-6">
      <AnagramFinder />
    </main>
  );
};

export default FinderTemplate;
