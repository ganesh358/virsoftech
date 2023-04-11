import { useState } from "react"


export default function BMI(){
     const [age,setAge] = useState()
     const [gender,setGender] = useState("")
     const [height,setHeight] = useState()
     const [weight,Setweight] = useState()
     const [result,setResult] = useState("")
 
    
     const handleBMI = (event) => {
        event.preventDefault()
           let bmi = Number(weight)/((Number(height)*0.0254)*(Number(height)*0.0254))
         
        
          if(gender === "male"){
            if(bmi < 18.5){
                setResult("Underweight")
               }else if( bmi >= 30){
                  setResult("Obesity")
               }else if(bmi >= 18.5 && bmi <= 24.9){
                   setResult("Normal Weight")
               }else if(bmi >= 25 && bmi <=29.9 ){
                  setResult("Over weight")
               }
          }else if(gender == "female"){
            if(bmi < 20.5){
                setResult("Underweight")
               }else if( bmi >= 32){
                  setResult("Obesity")
               }else if(bmi >= 20.5 && bmi <= 26.9){
                   setResult("Normal Weight")
               }else if(bmi >= 27 && bmi <=31.9 ){
                  setResult("Over weight")
               }
          }
          
        
     }
      return (
        <div>
            <h1>BMI Calculator</h1>

            <div style={{display:"flex",justifyContent:"center"}}>
                <form style={{display:"grid", width:"20rem",gridGap:"1rem"}} onSubmit={handleBMI}>
                    <input style={{height:"1.5rem"}} type="number" 
                    placeholder="Age"
                    min='2'
                    max='100'
                     onChange={(e) => setAge(e.target.value)}
                    />
                    <select style={{height:"1.5rem"}} name="" onChange={(e)=> setGender(e.target.value)} id="">
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                    <input style={{height:"1.5rem"}} type="number" onChange={(e) => setHeight(e.target.value)} placeholder="Height(Inches)" min='24' max='96' />
                    <input style={{height:"1.5rem"}} type="number" onChange={(e)=>Setweight(e.target.value)} placeholder="Weight(Kg)" />
                    <input style={{height:"1.5rem"}} type="submit" value="submit" />
                </form>

               
            </div>
            <h1>Result : {result}</h1>

        </div>
      )
}