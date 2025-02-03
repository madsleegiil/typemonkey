import {KoreanKeyboard} from "~/components/KoreanKeyboard";
import {ChangeEvent, useState} from "react";
import {oneBlockWords, pickRandomWord} from "~/.client/words";
import {newExpression} from "@babel/types";

enum GameState {
    NOT_STARTED,
    TYPING_WORD,
    CORRECT_WORD_SUBMITTED,
    FINISHED
}

export const GamePlay = () => {
    const wordsToFinish = 5;
    const [wordsFinished, setWordsFinished] = useState(0);
    const [gameState, setGameState] = useState<GameState>(GameState.NOT_STARTED);
    const [words, setWords] = useState<string[]>(oneBlockWords)
    const [currentWord, setCurrentWord] = useState<string | undefined>();
    const [typedWord, setTypedWord] = useState("");

    const pickNewWord = () => {
        const [randomWord, remainingWords] = pickRandomWord(words);
        setCurrentWord(randomWord);
        setWords(remainingWords);
        setGameState(GameState.TYPING_WORD)
    }

    const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
        const typed = e.currentTarget.value
        setTypedWord(typed);
        if (typed == currentWord) {
            setTypedWord("");
            const wordsNowFinished = wordsFinished + 1;
            setWordsFinished(wordsNowFinished);
            if (wordsNowFinished === wordsToFinish) {
                setGameState(GameState.FINISHED)
            } else {
                setGameState(GameState.CORRECT_WORD_SUBMITTED);
            }
        }
    }

    return (
        <div className="mt-8 container md:max-w-xl mx-auto flex flex-col place-content-center text-center">
            {wordsFinished > 0 &&
                <div>
                    {wordsFinished} words out of {wordsToFinish} finished!
                </div>
            }
            { gameState === GameState.NOT_STARTED &&
                <div>
                    <button className="btn" onClick={() => pickNewWord()}>Start game</button>
                </div>
            }
            { gameState === GameState.TYPING_WORD &&
                <div>
                    <h3 className="text-gray-800">Word to type:</h3>
                    <div className="mt-6 mb-6 text-6xl">{currentWord}</div>
                    <input autoFocus value={typedWord} onChange={handleInput}/>
                </div>
            }
            { gameState === GameState.CORRECT_WORD_SUBMITTED &&
                <div>
                    <h3>Correct!</h3>
                    <button className="btn" onClick={() => pickNewWord()}>New word</button>
                </div>
            }
            { gameState === GameState.FINISHED &&
                <div>
                    <h3>Finished!</h3>
                </div>
            }
            <KoreanKeyboard/>
        </div>
    )
}
