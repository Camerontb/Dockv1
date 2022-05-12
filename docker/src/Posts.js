
import React, { useEffect,useState} from "react"
import axios from "axios"
import _ from "lodash"
import { Icon } from "semantic-ui-react"
// import pagination from "pagination"




const pageSize = 10 
const Posts= ()=>{
    const [posts , setposts] = useState()
    const [paginatedPosts, setpaginatedPosts] = useState()
    const [currentPage, setcurrentPage] = useState()
    useEffect(()=>{
        axios.get('http://192.168.0.8:4000/test')
        .then((res, data)=>{
            console.log(res.data)
            

            setposts(res.data)
            setpaginatedPosts(_(res.data).slice(0).take(pageSize).value())
            // setDel(res.data.date)
        })

    },[])
    // console.log(setposts,posts)
    const pageCount = posts? Math.ceil(posts.length/pageSize):5;
    if (pageCount === 1) return null;
    const pages = _.range(1, pageCount+3)

    const pagination =(pageNo)=>{
        setcurrentPage(pageNo);
        const startIndex = (pageNo - 1) * pageSize;
        const paginatedPosts = _(posts).slice(startIndex).take(pageSize).value()
        setpaginatedPosts(paginatedPosts)
    }

    // const delFind=()=>{
    //     console.log(setDel)

    // }


    const deletePost = ()=>{
        console.log("this is working")
        axios('http://192.168.0.8:4000/delete')
        .then((res, data)=>{
            console.log("your post has been delted")
        })

    }
    return(
        <div>
        {
            !paginatedPosts ? ("No Data Found"):(
                <table className="table">
                    <thead>
                        <tr>
                            {/* <th>ID</th> */}
                            <th>Date</th>
                            <th>Vendor</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            paginatedPosts.map((post, index)=>(
                                <tr key={index}>
                                    <td>{post.Date}</td>
                                    <td>{post.Vendor}</td>
                                    <td>{post.Total}</td>
                                    <td>
                                        <button onClick={deletePost} className="trash" >
                                            <Icon name = 'trash'></Icon>
                                       
                                        </button>
                                    </td>
                                </tr>
                            ))                               
                        }                      
                        
                    </tbody>
                </table>
            )
        }
        <nav className= "d-flex justify-content-centre "> 
            <ul className = "pagination">
                {
                pages.map((page)=>(
                    <li className={
                        page === currentPage? "page-item active":"page-item"
                    }>
                        <p className="page-link" 
                        onClick={()=>pagination(page)}
                        >{page}</p>
                    </li>
                    
                ))
                }
                
            </ul>
        </nav>
            
        </div>
    )
}

export default Posts