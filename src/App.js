
import SendMessage  from "./components/SendMessage"
import ViewMessage  from "./components/ViewMessage"

import { useState , useEffect } from "react"
import Pusher from 'pusher-js';

function App() {

  const [ messages , set_messages ] = useState([])

  useEffect(() => {
    const pusher = new Pusher( process.env.REACT_APP_key , { cluster: process.env.REACT_APP_cluster , encrypted: true  } );
    const channel = pusher.subscribe( process.env.REACT_APP_channel );
  
    channel.bind( process.env.REACT_APP_event , data => { set_messages(prev => [ ...prev , data.message ]); });
    
  }, [])
  
  
  return (
    <article className="h-[98vh] flex justify-center py-2">
      <section className="md:w-2/5 w-full flex flex-col border shadow-2xl  shadow-blue-50">
        <ViewMessage messages={messages} />
        <SendMessage />
      </section>
    </article>
  );
}

export default App;
