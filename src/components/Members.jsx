import React from 'react'
import Profile1 from '../img/profile1.jpg';
import Profile2 from '../img/profile2.jpg';
import Profile3 from '../img/profile3.jpg';
import Profile4 from '../img/profile4.jpg';


function Members() {
    
    const cardItem=[
      {
          id:1,
          logo:Profile1,
          name:"Profile1",
      
      },
      {
          id:2,
          logo:Profile2,
          name:"Profile2",
         
      },
      {
          id:3,
          logo:Profile3,
          name:"Profile3",
          
      },
      {
          id:4,
          logo:Profile4,
          name:"Profile4",
          
      },
      
      
  ]
return (
  <>
  <div name="Members" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16">
      <div>
          <h1 className="text-3xl font-bold mb-5">Team Members</h1>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-9 my-3">
              {
                  cardItem.map(({id,logo,name}) =>(
                      <div className="md:w-[200px] md:[200px] shadow-lg hover:bg-blue-400 hover:text-white flex flex-col items-center justify-center border-[2px] p-1 cursor-pointer hover:scale-110 duration-200" key={id}>
                          <img src={logo} className="W-[150px] rounded-full" alt="img" />
                          <div>
                          <div className="font-bold mt-2 text-xl mb-8">{name}</div>
                          
                          </div>
                        
                      </div>
                  ))
              }
          </div>
      </div>
  </div>
  <hr></hr>
  </>
  )
}

export default Members