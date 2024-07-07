import "./MainPage.css"

export default function MainPage(){
    return(
        <>
    <div className="mainpage">
        <div className="intro">
            <h1 className="greet">Hello,<div className="name"> Plaza Packaging</div> </h1>
            <h2 className="info">Crafting Quality, Delivering Trust.</h2>
            
        </div>
        <div class="contacts">
    <a href ="https://github.com/devanshugupta24" target="_blank"><img class="logo" src="maps logo.png"/></a>
    <a href="https://www.linkedin.com/in/devanshu-gupta24/" target="_blank"><img class="logo" src="linkedin (1).jpg"/></a>
    <a href="https://www.instagram.com/devanshu_2402/" target="_blank"><img class="logo" src="instagram (1).jpg"/></a>
   </div>
         

 <img className="photo" src="photo dev.jpeg"></img>
 <img className="photo_logo " src="photo dev.jpeg"></img>
    </div>
        </>
    );
}