import Head from 'next/head';
import { useState } from 'react';
import {removeLineBreaks} from '@/utils/text';



export default function TextProcess() {
  const [text, setText] = useState('');
  const [result, setResult] = useState('');

  const handleInputChange = (event) => {
    setText(event.target.value);
  };

  const handleDoubleClick = (event) => {
    navigator.clipboard.writeText(result)
      .then(() => console.log('Text copied to clipboard'))
      .catch((error) => console.error('Failed to copy text: ', error));
  };


  const lineBreakhandler = () => {
    const txt = removeLineBreaks(text);
    setResult(txt);
  }

  const quoteEscapeHandler = () => {
    const txt = text.replace(/"/g, '\\"');
    setResult(txt);
  }


  return (
    <>
        <Head>
            <title>Text Process - YeungYeah&apos;s tool collection</title>        
        </Head>
        <div className='flex flex-col justify-center items-center max-w-6xl mx-auto px-2 sm:px-6 lg:px-8'>
          <h2 className='py-2 my-2 text-xl font-bold'>文本处理工具合集</h2>
          <textarea type="text" className='w-2/3 h-48 border whitespace-pre-wrap p-3'
           value={text} onChange={handleInputChange}/>   

          <button className='py-2 px-5 my-3 border-emerald-300 bg-orange-300 rounded-lg'
            onClick={lineBreakhandler}
          >去除换行符</button>

          <button className='py-2 px-5 my-3 border-emerald-300 bg-orange-300 rounded-lg'
            onClick={quoteEscapeHandler}
          >双引号转义</button>
          

          <div className='w-2/3 h-48 border p-3'
          onDoubleClick={handleDoubleClick}>
            {result}
          </div>
      
        </div>
    </>
  );
}
