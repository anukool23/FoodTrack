import { useEffect, useState } from "react"

const useOnlineStatus = () =>{
    const [onlineStatus, setOnlineStatus] = useState(window.navigator.onLine)
    useEffect(()=>{
        try {
            window.addEventListener('online',()=>{
                setOnlineStatus(true)
            })
            window.addEventListener('offline',()=>{
                setOnlineStatus(false)
            })
        } catch (err) {
            console.log(err)
        }
    },[])
    return onlineStatus
}

export default useOnlineStatus