import React from 'react'
import { useLocation ,useSearchParams,useParams} from 'react-router-dom'
function NewsDetail(props) {
    const [a,b] = useSearchParams();
    const param = useParams();
    const location= useLocation();
    console.log('news Detail param',a,param,location);
    // console.log('news Detail param',location);
  return (
    <div>
        <img/>
        {/* <h1>{.id}</h1> */}
    </div>
  )
}

export default NewsDetail
