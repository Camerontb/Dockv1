
import React, { useEffect,useState} from "react"
import axios from "axios"




const Posts= ()=>{
    const [posts , setposts] = useState()
    useEffect(()=>{
        axios.get('http://192.168.0.8:4000/test')
        .then((res, data)=>{
            console.log(res.data)

            setposts(res.data)

        })

    },[])
    // console.log(setposts,posts)
    return(
        <div>{
            !posts ? ("No Data Found"):(
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Date</th>
                            <th>Vendor</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            posts.map((post, index)=>(
                                <tr key={index}>
                                    <td>{post.Date}</td>
                                    <td>{post.Vendor}</td>
                                    <td>{post.Total}</td>
                                </tr>
                            ))                               
                        }                      
                        
                    </tbody>
                </table>
            )
}
            
        </div>
    )
}
export default Posts