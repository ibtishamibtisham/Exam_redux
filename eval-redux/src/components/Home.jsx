import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { store } from "../redux/store"
import { adddata,ascsort,decsort} from "../redux/action";

export const Home=()=>
{ const [text,setText]=useState("")
    const store=useSelector((store)=>store.dataitems)
    // console.log(store);
    const dispatch=useDispatch();
    const datafetch=async()=>
    {
        let res=await fetch("https://fast-reef-22226.herokuapp.com/data")
        let data=await res.json()
        dispatch(adddata(data))
    }
    useEffect(()=>
    {datafetch();

    },[])

const datatake=(e)=>
{
  setText(e.target.value)

}

    return(<>
    <input className="search-box" placeholder="Searchbytitle" value={text} onChange={datatake}></input>
    {
        store.map((item)=>
        {
            if(item.title==text)
            {return <div classname="dta">
                <p>{item.id}</p>
                <p>{item.title}</p><p>{item.author}</p><p>{item.url}</p>
            <p>{item.description}</p>
            </div>
        }
        })
    }<button>Search</button>
    <br/>
    <button id="sort-alphabetically" onClick={()=>
       { dispatch(ascsort(store))
    console.log(store,"acs");}
   
    }>asc</button>

     
    <button id="sort-alphabetically-desc" onClick={()=>
      {  dispatch(decsort(store))  
        console.log(store,"decs");
    } 
   
    }>DESC</button>
    <button id="sort-by-date">Date-asc</button><button id="sort-by-date-desc">Date-desc</button>
     <button id="sort-by-quality">quality-asc</button><button id="sort-by-quality-desc ">Quality-desc</button>
     
       
    </>)
    
}