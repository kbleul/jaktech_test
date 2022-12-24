
import { useEffect , useRef } from "react"


const ViewMessage = ( {messages} ) => {

  const scrollRef = useRef()

  useEffect(() => { 
    //scroll down to show the recent message
    scrollRef.current?.scrollIntoView({ behavior: 'smooth' })
  },[messages])
    
  return (
    <article className="shadow-lg h-[92vh] overflow-y-scroll">
    {messages.map(item => (
      <section ref={scrollRef} key={Math.random()} className="mx-2 p-4 mt-[4vh] shadow border-t font-serif"><p>{item}</p></section>
    ))}

      <section className="flex justify-center items-center text-2xl text-gray-300 font-bold h-full">
        {messages.length === 0 && <p className="">No messages yet</p>}
      </section>
    </article>
  )
}

export default ViewMessage
