import { useState } from "react"

const SendMessage = () => {

    const [msg , set_msg] = useState("")


    const SendMyMessage = async () => {
	
     const options = {
        method : "POST",
        body : JSON.stringify({message : msg }),
        headers :  { "content-Type": "application/json" },
      }
  
      const response = await fetch( process.env.REACT_APP_endpoint , options)
  
       response.ok &&  set_msg("")
  
    }

  return (
    <article className="w-full flex justify-center items-center">
        <input className="w-4/5 h-[8vh] bg-inherit border-b-2 border-red-500 px-4 outline-white" onChange={e => set_msg(e.target.value)} value={msg} placeholder="Message ..." />
        <button className="w-1/5 h-[100%] border bg-black text-white font-bold hover:opacity-90" onClick={SendMyMessage} >Send</button>
    </article>
  )
}

export default SendMessage
