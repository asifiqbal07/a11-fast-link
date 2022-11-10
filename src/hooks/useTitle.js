import { useEffect } from "react"

const useTitle = title =>{
    useEffect(()=>{
        document.title = `${title} - Fast Link`;
    },[title])
};

export default useTitle;