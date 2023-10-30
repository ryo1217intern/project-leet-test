'use client'
import Image from 'next/image'
import { useState } from 'react'
import InputTitleAndText, { ChildComponentProps }  from './components/InputTitleAndText'

const sampleTitle = "hogehoge"
const sampleText = "fugafuga"

export default function Home() {
  const [title, setTitle] = useState("")
  const [testInputArray, setTestInputArray] = useState<string[]>([])
  const [testOutputArray, setTestOutputArray] = useState<string[]>([])

  return (
    <main>
      <InputTitleAndText
        setTitle={setTitle}
        setTestInputArray={setTestInputArray}
        setTestOutputArray={setTestOutputArray}
      />
      <h1>{title}</h1>
    </main>
  )
}