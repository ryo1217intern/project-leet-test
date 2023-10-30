import React from 'react'

export type ChildComponentProps = {
  setTitle: React.Dispatch<React.SetStateAction<string>>
  setTestInputArray: React.Dispatch<React.SetStateAction<string[]>>
  setTestOutputArray: React.Dispatch<React.SetStateAction<string[]>>
}

const InputTitleAndText = (
  {setTitle, setTestInputArray, setTestOutputArray}: ChildComponentProps) => {

  function handleSomeEvent() {
    setTitle("hogehoge"),
    setTestInputArray(["test1", "test2"]),
    setTestOutputArray(["test2, test3"])
  }

  return(
    <div>hello</div>
  )

}

export default InputTitleAndText
