import React, { useState } from 'react'

export type ChildComponentProps = {
  setTitle: React.Dispatch<React.SetStateAction<string>>
  setTestInputArray: React.Dispatch<React.SetStateAction<string[][]>>
  setTestOutputArray: React.Dispatch<React.SetStateAction<string[]>>
}

const InputTitleAndText = (
  {setTitle, setTestInputArray, setTestOutputArray}: ChildComponentProps) => {

  const [inputTitle, setInputTitle] = useState("")
  const [inputText, setInputText] = useState("")

  function handleSubmit() {
    const resultTitle = AnalysisLeetTitle(inputTitle)
    const resultText = AnalysisStringTestCode(inputText)
    setTitle(resultTitle),
    setTestInputArray(resultText.InputArray),
    setTestOutputArray(resultText.OutputArray)
  }

  return(
    <div className='flex flex-col p-2 space-y-4'>
      <div className=''>
        <label
          className='pr-2'
        >
          LeetCode Title
        </label>
        <input
          className = 'flex-grow mt-1 p-2 w-full text-amber-400 border-2 border-amber-400 rounded-md bg-black transition-all focus:outline-none'
          type = "text"
          value = { inputTitle }
          onChange = {(e) => setInputTitle(e.target.value)}
        />
      </div>
      <div className=''>
        <label
          className='pr-2'
        >
          LeetCode ExampleText
        </label>
        <textarea
          className = 'mt-1 p-2 w-full text-amber-400 border-2 border-amber-400 rounded-md bg-black transition-all focus:outline-none'
          rows = { 10 }
          value = { inputText }
          onChange = {(e) => setInputText(e.target.value)}
        />
      </div>
      <button
        className='w-15 bg-blue-500 text-white px-4 py-2 rounded'
        onClick={handleSubmit}
      >
        Make test code!
      </button>
    </div>
  )
}

export default InputTitleAndText

function AnalysisStringTestCode(exampleText: string) {
  const inputPattern = /Input: word1 = "(.*?)", word2 = "(.*?)"/g;
  const outputPattern = /Output: "(.*?)"/g;

  const inputMatches: Array<[string, string]> = [];
  const outputMatches: string[] = [];

  let match;

  while (match = inputPattern.exec(exampleText)) {
      inputMatches.push([match[1], match[2]]);
  }

  while (match = outputPattern.exec(exampleText)) {
      outputMatches.push(match[1]);
  }
  
  return {
      InputArray: inputMatches,
      OutputArray: outputMatches
  };
}

function AnalysisLeetTitle(exampleTitle: string) {
  return String(
    exampleTitle.substring(0, 4) //最初の文字から４文字がleetcodeの問題に割り振られている数字
    )
}