import React,{Component} from "react";
export default class Component4 extends Component{
    render(){
        return(
            <>
            <div style={{display:'flex'}} className="component4-container">
                <div style={{display:'flex'}} className="left">
                <div>
                    <img src="https://images.ctfassets.net/wtodlh47qxpt/2A4wJjZ8ZvCyj7RSxI3iTk/f403b8ceb2f120bf7ef36d5a913ddf6f/KFC-White-Chicken-Bucket.jpg?fm=webp&fit=fill" alt="" />
                    <div className="details"><h1>CHICKEN BUCKETS</h1></div>
                    <img src="https://images.ctfassets.net/wtodlh47qxpt/7tEmaFwdTOKmVNf724nD21/cb386eac4c508bce817d3daa22a1d3b6/KFC-rice-bowl.jpg?fm=webp&fit=fill" alt="" />
                    <div className="details"><h1>RICE BOWLZ</h1></div>
                </div>
                <div>
                    <img src="https://images.ctfassets.net/wtodlh47qxpt/3NdeHBtjjYPHMAoOTpEZ0w/d6c6fadd15bcfa8f6bc969aa02207f0c/KFC-Burger.jpg?fm=webp&fit=fill" alt="" />
                    <div className="details"><h1>BURGERS</h1></div>
                    <img src="https://images.ctfassets.net/wtodlh47qxpt/1cS5c1DDcmYuwT0g2edC3f/48712d8b753b8cb6c6abd662398fec70/KFC-Beverages.jpg?fm=webp&fit=fill" alt="" />
                    <div className="details"><h1>BEVERAGES & DESSERTS</h1></div>
                </div>
            </div>
            <div style={{display:'flex'}} className="right">
                <div>
                    <img src="https://images.ctfassets.net/wtodlh47qxpt/1cS5c1DDcmYuwT0g2edC3f/48712d8b753b8cb6c6abd662398fec70/KFC-Beverages.jpg?fm=webp&fit=fill" alt="" />
                    <div className="details"><h1>SNACKS</h1></div>
                    <img src="https://images.ctfassets.net/wtodlh47qxpt/169o6qKazOgakFLMKkHUGY/d9d657af816a140bdaf3f5a7d64e3ef7/KFC-Veg.jpg?fm=webp&fit=fill" alt="" />
                    <div className="details"><h1>VEG</h1></div>
                </div>
                <div>
                    <img src="https://images.ctfassets.net/wtodlh47qxpt/3XJELuUtdk0lTpnGRWnJvW/bc0cf7c981fb86e85a8b75be1fdc5f39/KFC-Value-Lunch.jpg?fm=webp&fit=fill" alt="" />
                    <div className="details"><h1>VALUE LUNCH SPECIAL</h1></div>
                     <a href="https://online.kfc.co.in/menu"> <img src="https://online.kfc.co.in/static/media/Finger_lickInMob.fc23e8b1.svg" alt=""  /></a>
                    
                </div>
            </div>
            </div>
            </>
        )
    }
}