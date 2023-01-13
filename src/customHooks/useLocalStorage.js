
import React,{useEffect} from 'react'
function useLocalStorage(localKey , localValue) {
 localStorage.setItem(localKey,localValue);
    useEffect(()=>{
        localStorage.setItem(localKey, '')
    },[localValue])
}

export default useLocalStorage
