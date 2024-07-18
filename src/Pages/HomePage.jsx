import React from 'react'
import Header from '../Components/Header/Header'
import ProductCard from '../Components/Product/ProductCard'
import "./HomePage.css"
import AmulMilk from "../assets/Images/AmulMilk.avif"
import AmulButter from "../assets/Images/AmulButter.avif"
import AmulFreshMalaiPaneer from "../assets/Images/AmulFreshMalaiPaneer.avif"
import ModernSandwichBread from "../assets/Images/ModernSandwichBread.avif"
import MotherDiaryCurd from "../assets/Images/MotherDiaryCurd.avif"
import AmulCheeseCubes from "../assets/Images/AmulCheeseCubes.avif"
import DaldaRefinedSoyabeanOil from "../assets/Images/DaldaRefinedSoyabeanOil.avif"
import DaldaRefinedSunflowerOil from "../assets/Images/DaldaRefinedSunflowerOil.avif"
import FortuneMustardOil from "../assets/Images/FortuneMustardOil.avif"
import FortuneSunflowerOil from "../assets/Images/FortuneSunflowerOil.avif"
import SafolaGold from "../assets/Images/SafolaGold.avif"
import GeminiRefinedSunflowerOil from "../assets/Images/GeminiRefinedSunflowerOil.avif"



function HomePage() {
  return (
    <div className = "home">
         <Header/>

         <div className="dairyBreadAndEggs">
         <h1>Dairy, Bread & Eggs </h1>
         <div className="productCardSlider">
         <ProductCard
         productId ={1} 
         productImage = {AmulMilk} 
         productDescription = "Amul Taaza Toned Fresh Milk" 
         productNetWeight = "500 ml"
         productPrice = {28} />


        




         <ProductCard productId = {2} 
         productImage = {AmulButter}  
         productDescription = "Amul Salted Butter"
         productNetWeight  = "500 g"
         productPrice = {285} />


         <ProductCard productId = {3} 
         productImage = {AmulFreshMalaiPaneer} 
         productDescription = "Amul Fresh Malai Paneer"
         productNetWeight = "200 g"
         productPrice = {91} />

         <ProductCard productId = {4} 
         productImage = {ModernSandwichBread}  
         productDescription = "Modern Sandwich Bread"
          productNetWeight = "400 g"
          productPrice = {38} /> 

         <ProductCard productId = {5} 
         productImage = {MotherDiaryCurd} 
          productDescription = "Mother Dairy Classic Curd"
           productNetWeight = "400 g"
            productPrice = {35}/>

         <ProductCard productId = {6}
          productImage = {AmulCheeseCubes}
            productDescription ="Amul Cheese Cube"
            productNetWeight="200 g"
             productPrice = {129} />
             
            </div>
             </div>









             <div className="dairyBreadAndEggs">
         <h1>Edible Oil </h1>
         <div className="productCardSlider">
         <ProductCard
         productId ={7} 
         productImage = {DaldaRefinedSoyabeanOil} 
         productDescription = "Dalda Refined Soyabean Oil" 
         productNetWeight = "1 ltr."
         productPrice = {104} />


        




         <ProductCard productId = {8} 
         productImage = {DaldaRefinedSunflowerOil}  
         productDescription = "Dalda Refined Sunflower Oil"
         productNetWeight  = "1 ltr."
         productPrice = {106} />


         <ProductCard productId = {9} 
         productImage = {FortuneMustardOil} 
         productDescription = "Fortune Premium Kachi Ghani Pure Mustard Oil"
         productNetWeight = "1 ltr."
         productPrice = {155} />

         <ProductCard productId = {10} 
         productImage = {FortuneSunflowerOil}  
         productDescription = "Fortune Sunlite Refined Sunflower Oil"
          productNetWeight = "1 ltr."
          productPrice = {121} /> 

         <ProductCard productId = {11} 
         productImage = {GeminiRefinedSunflowerOil} 
          productDescription = "Gemini Refined Sunflower Oil"
           productNetWeight = "1 ltr."
            productPrice = {124} />

         <ProductCard productId = {12}
          productImage = {SafolaGold}
            productDescription ="Safola Gold Healthy Lifestyle and Heart Edible"
            productNetWeight="2 ltr."
             productPrice = {329} />
             
            </div>
             </div>


    </div>
  )
}

export default HomePage
