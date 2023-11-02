'use client'
import Image from 'next/image'
import { useState } from 'react'
import InputTitleAndText, { ChildComponentProps }  from './components/InputTitleAndText'
import CopyTestCode from './components/CopyTestCode'

export default function Home() {
  const [title, setTitle] = useState("sampleTitle")
  const [testInputArray, setTestInputArray] = useState<string[][]>([["",""],["",""],["",""]])
  const [testOutputArray, setTestOutputArray] = useState<string[]>(["","",""])

  return (
    <main>
      <div className='bg-black'>
        <div  className='p-8'>
          <InputTitleAndText
            setTitle={setTitle}
            setTestInputArray={setTestInputArray}
            setTestOutputArray={setTestOutputArray}
          />
        </div>
        <div className='p-8'>
          <CopyTestCode
            propTitle = {title}
            propInputArray = {testInputArray}
            propOutputArray = {testOutputArray}
            />
        </div>
      </div>
    </main>
  )
}
