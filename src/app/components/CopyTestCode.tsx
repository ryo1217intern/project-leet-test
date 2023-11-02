import React from 'react'
import { useState } from 'react'

const CopyTestCode = (props: any) => {
  const copyTestCodeText = `
    package leetcode${props.propTitle}

    import "testing"

    func Test${props.propTitle}(t *testing.T) {

      assertCorrectMessage := func(t testing.TB, got, want string) {
        t.Helper()
        if got != want {
          t.Errorf("got %q want %q", got, want)
        }
      }

      t.Run("Example1", func(t *testing.T) {
        got := ${props.propTitle}("${props.propInputArray[0][0]}","${props.propInputArray[0][1]}")
        want := "${props.propOutputArray[0]}"
        assertCorrectMessage(t, got, want)
      })

      t.Run("Example2", func(t *testing.T) {
        got := ${props.propTitle}("${props.propInputArray[1][0]}","${props.propInputArray[1][1]}")
        want := "${props.propOutputArray[1]}"
        assertCorrectMessage(t, got, want)
      })

      t.Run("Example2", func(t *testing.T) {
        got := ${props.propTitle}("${props.propInputArray[2][0]}","${props.propInputArray[2][1]}")
        want := "${props.propOutputArray[2]}"
        assertCorrectMessage(t, got, want)
      })

    }
  `

  const [isPressed, setIsPressed] = useState(false);

  const copyTextToClipboard = () => {
    navigator.clipboard.writeText(copyTestCodeText);
    setIsPressed(true); // ボタンが押されたことを状態に反映
    setTimeout(() => setIsPressed(false), 100); // 300ms後に状態をリセット
  }

  return (
    <div className='flex flex-col p-2 space-y-4'>
      <label
        className='pr-2'
      >
        LeetCode TestCode
      </label>
      <textarea
        className='mt-1 p-2 w-full text-amber-400 border-2 border-amber-400 rounded-md bg-black transition-all focus:outline-none'
        value={copyTestCodeText}
        readOnly
        rows = { 10 }
        onChange={() => {}}
      />
      <button
          className={`bg-blue-500 text-white p-2 rounded transform ${isPressed ? 'scale-110' : 'scale-100'} transition-transform duration-300 ease-in-out`} // アニメーションのクラスを追加
          onClick={copyTextToClipboard}
      >
      Copy
      </button>
    </div>

  )
}

export default CopyTestCode

