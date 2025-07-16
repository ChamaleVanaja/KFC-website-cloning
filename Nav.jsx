import React from "react";
export default class Nav extends React.Component{
    render(){
        return(
            <>
            <nav > 
                <div style={{display:'flex'}}>
                    <a href=""><img src="https://tse3.mm.bing.net/th/id/OIP.aSs3OpmVnCYl_9RvVE7ZlgHaCE?pid=Api&P=0&h=180" alt="KFC" /></a>
                    <a href="https://online.kfc.co.in/menu"><b>Menu</b></a>
                    <a href="https://online.kfc.co.in/offers"><b>Deals</b></a>
                </div>
                <div style={{display:'flex'}} className="navright">
                    <div>
                        <img src="//images.ctfassets.net/wtodlh47qxpt/6bJdGLRkksNvWP4LI9ZiFF/cb89d6393492fd093e0f99980abfa39e/Account_Icon.svg?h=36&w=36&fm=webp&fit=fill" alt="" className="signin" />
                        <a href="https://login.kfc.co.in/auth/realms/ki/protocol/openid-connect/auth?scope=openid+phone+profile+email&response_type=code&client_id=reg54y8ws34xvp9&redirect_uri=https://online.kfc.co.in/login&state=X9BEUW20azUzSWXSerYxSPx4VbAh-x7FoNcL60Vj3bk&code_challenge=iOV-NnIBmA8bx2vLvi4C6SdFq5oPw6jOKfZ9uuKwtBo&code_challenge_method=S256&platform=undefined&env=PROD&TermsConditions=undefined&MarketPreference=undefined&showVipBanner=true&market=in&gtmKey=GTM-5C886DC&lan=en-US&ui_locales=en"><b>Sign In</b></a>
                    </div>
                    <a href="https://online.kfc.co.in/cart"><img src="http://images.ctfassets.net/wtodlh47qxpt/6qtBVFuno7pdwOQ9RIvYm9/d13e9b7242980972cf49beddde2cc295/bucket_cart_icon.svg" alt="" className="cartimg"/></a>
                </div>
            </nav>  
            </>
        )
    }
}


//