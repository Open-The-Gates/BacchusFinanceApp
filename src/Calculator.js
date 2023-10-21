import React, { useState } from "react";

const Calculator = () => {
    const [investment, setinvestment] = useState(
        {
            baccAmount :0,
            epochs : 0,
            nftType : 0,
            baccReward:  baccAmount * ( 1 + (epochs**2)/200 ) * (1 + nftType/100) ,
        }
    );
return(<>    <div className="wrapper"></div>
</>)
}