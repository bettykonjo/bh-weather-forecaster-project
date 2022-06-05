import React from 'react'
import styled from 'styled-components'
const DayCardsWrapper = styled.div`
  /* display: flex; */
  background-color:wheat;
  border-radius: 5px;
  /* padding:10px; */
  /* box-shadow:0px 0px 0px 3px black; */
  /* flex-direction:column; */
  /* align-items:flex-start;  */
 /* justify-content:space-between; */
   margin:15px; 
  flex-wrap:wrap;
  flex-direction:row; 
  information {


  }
  p {

  }
`;

const DayCards = ({days}) => {
  return (
    <DayCardsWrapper>
        {
          <div className='information'>
            <img src='https://www.weatherbit.io/api/icons'alt/>
            <p> temp:{days.temp}</p>
            <p> max_temp:{days.max_temp}</p>
            <p> min_temp:{days.min_temp}</p>
            <p> precip:{days.precip}</p>
             {/* <p> icon:{days.weather.icon}</p>  */}
             {/* <p>description:{days.weather.description}</p>  */}
            </div>
            
        }
    </DayCardsWrapper>
  )
}

export default DayCards