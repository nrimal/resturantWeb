import React from 'react'

class StoreHour extends React.Component {
    render()
    {
        return (
           
            <div className="col" id="restaurant-hour-container">
            <label> Hours</label>
            <p>Lunch Buffet: 11:00 AM-2:30 PM(Wednesday-Sunday)</p>
            <p> No Buffet on Monday & Tuesday(Lunch is served on menu) </p>
            <p> Dinner: 5:00 PM to 9:30 PM</p>
          </div>
          
        )
    }
}

export default StoreHour