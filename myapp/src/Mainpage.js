import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import veg from './vegimage.jpg'
import './Mainpagge.css'
import Navigationbar from './Navigationbar.js'
const Mainpage = () => {
    const [user_search, setuser_search] = useState("")
    const [mydata, setmydata] = useState([])
    const onChangeHandler=(e)=>{
        // this function is called when the input field is changed, 
        // it sets the value of user_search as typed by the user
        setuser_search(e.target.value)
    }
    const getData=async(e)=>{
        // this function is called on button click and fetches the data
        // we will use here the Meal db api and fetch method to retrive the data
        const response=await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${user_search}`)
        const jsonData=await response.json()
        setmydata(jsonData.meals)
    }
    console.log(mydata)
    
  return (
    <div style={{paddingLeft:'10px',paddingRight:'10px',backgroundColor:'black'}}>
        <Navigationbar/>
        <div style={{zIndex:'1',position:'relative',display:'flex',flexWrap:'wrap-reverse',justifyContent:'space-evenly',alignItems:'center',backgroundColor:'black',fontFamily:'serif',color:'white',fontSize:'20px',padding:'20px'}}>
            <img id='top_image' src={veg} alt='meal' style={{height:'200px',width:'300px',borderRadius:'10px'}}></img>
            <div style={{overflow:'hidden',padding:'4px',margin:'10px',borderRadius:'8px'}}>
            <div id='textbox'>
                <h1 id='welcome'>Welcome To The MealsHub</h1>
                <p>One Search. Endless Deliciousness. Find Your Next Meal at The MealsHub</p>           
            </div>
            </div>
        </div>
        <hr style={{borderColor:'yellow',marginLeft:'20px',marginRight:'20px'}}/>
        <div style={{display:'flex',alignItems:'center',justifyContent:'center',flexWrap:'wrap',padding:'20px'}}>
            <div>      
        <input type='text' placeholder='Search Recipe Here:' value={user_search} onChange={onChangeHandler} style={{height:'25px',width:'300px',fontFamily:'serif',fontSize:'20px',borderRadius:'7px'}}></input>          
            </div>
        <button id='searchbutton' onClick={getData} style={{height:'30px',width:'60px',marginLeft:'10px'}}>Search</button>
        </div>
        <div style={{display:'flex',flexWrap:'wrap',justifyContent:'space-evenly',alignItems:'center'}}>
            {!mydata ? <h2 style={{color:'white'}}>Recipe not found!</h2> : mydata.map((items)=>{
                const recipeId=items.idMeal
                return(
                    <div className='mainpage_card' style={{color:'white',fontFamily:'serif',fontSize:'20px',paddingTop:'20px',paddingBottom:'20px'}}>                
                    <img src={items.strMealThumb} alt='meal' style={{height:'300px',width:'300px',borderRadius:'10px'}}></img>
                    <div style={{textAlign:'center'}}>
                    <p>{items.strMeal}</p>
                    <Link to={`/description/${recipeId}`} ><button id='card_button'>View Recipe</button></Link>
                    </div>
                    <hr style={{borderColor:'yellow'}}/>
                    </div>                    
                );
            })}
        </div>
    </div>
  )
}

export default Mainpage