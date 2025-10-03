import { useRef, useState } from "react";

import { Button } from "../atoms/Button";
import { Input } from "../atoms/Input";
import { Title } from "../atoms/Title";

export const AnagramFinder = () => {
  const [anagrams, setAnagrams] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const apiBaseUrl = (import.meta.env.VITE_API_BASE_URL ?? "http://localhost:3000").replace(/\/$/, "");

  const handleFind = async () => {
    if (!inputRef.current || inputRef.current.value === "") return;

    try {
      const word = inputRef.current.value;

      const response = await fetch(`${apiBaseUrl}/anagram`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ word }),
      });

      if (!response.ok) {
        alert("Csak 5 betűs szót adj meg!");
        throw new Error(`${response.status} - ${response.statusText}`);
      }

      const data = await response.json();

      if (data.success) {
        setAnagrams(Array.isArray(data.anagrams) ? data.anagrams : []);
      } else {
        alert("Response failed!");
        throw new Error("Response failed!");
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <section className="w-full md:w-3xl">
      <fieldset className="flex flex-col md:flex-row justify-between items-center gap-6 w-full">
        <Title>Anagram Finder</Title>
        <Input name="finder" ref={inputRef} />
        <Button onClick={handleFind}>Let's Go!</Button>
      </fieldset>
      <aside className="flex justify-center mt-5">
        <ul className="list-disc">
          {anagrams && anagrams.length > 0 ? (
            anagrams.map((anagram) => <li key={anagram}>{anagram}</li>)
          ) : (
            <li>Nincs ilyen szó!</li>
          )}
        </ul>
      </aside>
    </section>
  );
};
