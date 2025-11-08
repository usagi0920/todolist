"use client"
// import { useState, useEffect } from "react"
import { useCounterView } from "./hooks"

// export function CounterView() {
//     const [count, setCount] = useState(0)
//     const handlePlusButtonClick = () =>{
//         setCount(count + 1)
//     }
//     const handleMinusButtonClick = () =>{
//         console.log("マイナスボタンがおされた")
//         if(count <= 0) return
//         setCount(count - 1)
//     }

//     useEffect(() => {
//         console.log("現在のカウント", count)
//     }, [count])

export function CounterView() {
  const {
    count,
    handlePlusButtonClick,
    handleMinusButtonClick
  } = useCounterView()

  return (
    // <div style={{ maxWidth: 400, margin: "40px auto", textAlign: "center" }}>
    <div className="max-w-md mx-auto mt-10 text-center">
      <h1 className="text-2xl font-bold">カウンター</h1>
      <p style={{ fontSize: 32 }}>{count}</p>
      <div style={{ marginTop: 16, display: "flex", justifyContent: "center", gap: 8 }}>
        <button
        className="px-4 py-2 rounded border border-gray-300 hover:bg-gray-50 active:scale-95"
        onClick={handlePlusButtonClick}>プラス</button>
        <button
        className="px-4 py-2 rounded border border-gray-300 hover:bg-gray-50 active:scale-95"
        onClick={handleMinusButtonClick}>マイナス</button>
      </div> 
    </div>
  )
}