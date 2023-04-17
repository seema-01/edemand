import React from 'react'
// import '../Style/about.css'

export const AboutPage = () => {
    
  return (
    <div className='ABOUT_US'>  
        <div className="about-header">
            <a href="">Home |&nbsp;</a>
            <a href=""><b>about</b></a>
        </div>
       
        <h2 className='about'>About us</h2>
        <div className="about-section">
        <div className="about-img">
            <img src={require('../Images/demo1.jpg')} alt="" />
        </div>
        <div className="about-details">
            <h1>Know &nbsp;About &nbsp; Us</h1><br />
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus deleniti nostrum molestiae modi cumque illo iusto dolores laudantium fuga? Molestias ipsam veritatis similique voluptate expedita, tempore mollitia alias at conseqtur, aperiam velit ullam neque?</p><br />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius maiores amet, aperiam beatae soluta sint delectus totam deserunt fugit mollitia dignissimos labore necessitatibus repellat nihil  expedita? Optio, at possimus perspiciatis hic in voluptatum.</p><br />
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima cumque accusamus ullam aperiam expedita? Eveniet suscipit totam tempore dolores quisquam rerum consectetur tempora incidunt vitae neque provident nobis libero exercitationem ducimus, ipsam distinctio illum? Perspiciatis praesentium nobis laudantium enim illo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, quasi. </p><br />
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut delectus, temporibus vitae ratione, nesciunt officia reiciendis neque ullam a veritatis quasi molestias accusantium velit, illum cupiditate est corrupti nihil consequuntur? Suscipit quasi odit veniam. Rem consequatur perferendis facilis sequi impedit exercitationem distinctio. Ipsa assumenda cupiditate debitis sapiente facilis exercitationem quaerat voluptatem a necessitatibus pariatur, voluptatibus beatae expedita minima reiciendis optio.</p><br /><br />

            <div className="about-list">
                <li >Complete Sanitization and cleaning of bathroom</li><br />
                <li>Biodegradable chemical are used </li><br/>
                <li>Cleaning Tools will be used to remove deep stains</li><br/>
                <li>Complets Sanitization and cleaning of bathroom</li><br/>
            </div>
        </div>
        </div>
    </div>
  )
}

export default AboutPage
