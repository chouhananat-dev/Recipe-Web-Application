import React,{useState,useEffect} from 'react'
import { NavLink, useParams } from 'react-router-dom'
import './Description.css'
import { useSpeechSynthesis } from 'react-speech-kit'
const Description = () => {
    const {recipeId}=useParams()
    const [meals_info, setmeals_info] = useState()
    const {speak,cancel,speaking}=useSpeechSynthesis()
    useEffect(()=>{
      async function load_function(){
      const response=await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipeId}`)
      const data=await response.json()
      console.log(data.meals[0])
      setmeals_info(data.meals[0])
      }
      load_function()
    },[recipeId])
    
    const speaktext=()=>{
      if(meals_info.strInstructions){
        speak({text:meals_info.strInstructions})
      }
    }
    const stoptext=()=>{
      cancel()
    }
    return (
      <div style={{paddingLeft:'10px',paddingRight:'10px',paddingTop:'20px',paddingBottom:'20px',textAlign:'center'}}>
        <h1 style={{color:'yellow',fontFamily:'inherit'}}>The MealsHub</h1>
        {!meals_info? "":
        <div id='description_card'>
        <img src={meals_info.strMealThumb} alt='meals' style={{height:'400px',width:'400px', borderRadius:'20px'}}></img>
        <div style={{textAlign:'center',color:'white',maxWidth:'500px'}}>
        <h1>{meals_info.strMeal}</h1>
        <p>{meals_info.strInstructions}</p>
        <hr style={{borderColor:'yellow'}}/>
        <NavLink to='/'><button id='previousbutton'>Previous</button></NavLink>
        </div>
        </div>        
        }
        <div style={{display:'flex',justifyContent:'center',alignItems:'center',paddingTop:'20px'}}>
          <button id='speakbutton' onClick={speaktext} disabled={speaking}>Speak</button>
          <button id='speakbutton' onClick={stoptext} disabled={!speaking}>Stop</button>
        </div>
      </div>
    )
}

export default Description
