import React from "react";
export default class Component3 extends React.Component{
    render(){
        return(
            <>
            <div className="menu-section">
                <h1>BROWSE MENU CATEGORIES</h1>
                <div style={{display:'flex'}} className="menu-row">
                    <div className="left-component">
                        <img src="https://images.ctfassets.net/wtodlh47qxpt/3FKqwvgXKVq5yEhGjNpVyV/d2ea446076c8aa56fc3caaa7ab2c3e8e/KFC-BOGO-Gold-Burger-Category-23MAY_3.jpg?fm=webp&fit=fill" alt="buy1get1" />
                        <div className="details"><h1>GOLD:BUY 1 GET 1</h1></div>
                    </div>
                    <div style={{display:"flex"}} className="rght-component">
                        <div>
                            <img src="https://images.ctfassets.net/wtodlh47qxpt/wAKmOMcpTm0yfspLrl20B/a49799960b22ba96b733f54971d96825/KFC-category-EPIC-Bucket-1_All-in-one-bucket-delivery_-28th-JAN_1.jpg?fm=webp&fit=fill" alt="" />
                            <div className="Rdetails"><h1>EPIC BUCKET OF THE DAY</h1></div>
                            <img src="https://images.ctfassets.net/wtodlh47qxpt/7zQ4a4xD9BW9Qyl03WlTqR/bbcea04b544b8700ea7fe7834d85feb7/KFC-Box-Meals.jpg?fm=webp&fit=fill" alt="" />
                            <div className="Rdetails"><h1>BOX MEALS</h1></div>
                        </div>
                        <div>
                            <img src="https://images.ctfassets.net/wtodlh47qxpt/4AcPJzGNNxfXiF1rWvlydj/2a8548a717ff678fbfb0d881b7367ba8/KFC-Gold-Burger-White-Category-23MAY_4.jpg?fm=webp&fit=fill" alt="" />
                            <div className="Rdetails"><h1>GOLD EDITION</h1></div>
                            <img src="https://images.ctfassets.net/wtodlh47qxpt/5iYMlSgO8gr09Rjbn185qs/8f330ee5eb94ba4eff4f4552e361218d/KFC-Variety-Bucket.jpg?fm=webp&fit=fill" alt="" />
                            <div className="Rdetails"><h1>VARIETY BUCKETS</h1></div>
                        </div>
                    </div>
                </div>
            </div>
            </>
        )
    }
}