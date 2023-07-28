// import classes from './index.module.css'


// function Home(){
//   return(
//     <div className={classes.section}>
//       <h1>This is home page</h1>
//     </div>
//   )
// }

// export default Home


// function WitNDlight(){
//   return(
//     <div className={classes.picture}><div><img src='https://media.witanddelight.com/content/uploads/2023/06/21132752/Nine-Pines-Bathroom.jpg'></img></div>
//     <div className={classes.Writeup}>
//       <h1>INTERIORS & DECOR</h1>
//       <a href='#'>Introducing My First
//       <br></br> Interior Design Project: <br></br>
//       A 1980s House Full of<br></br> Ornate Details</a><br></br>
//       <p>
//         I've been designing in a more hands-on capacity outside of my own <br></br>
//         home.I'm excited to introduce my first interior design project.
//       </p>
//       <hr></hr>
//       <h2>READ POST</h2>

//     </div>
    
    
//     </div>
  
//   )
  
// }
// export default WitNDlight


import BannerSection from './components/banner/bannerSection'

import classes from './index.module.css'

function Home(){
  return(
    <div className={classes.section}>
      <BannerSection/>
    </div>
  )
}
export default Home











