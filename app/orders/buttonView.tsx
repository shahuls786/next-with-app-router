'use client'
 
import { useEffect, useState } from 'react'
 
export default function ButtonView() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('SDebug > count updated', count);
  },[count])
 
  return (
    <div>
      <p>You clicked view order {count} times</p>
      <button onClick={() => setCount(count + 1)}>View Order</button>
    </div>
  )
}