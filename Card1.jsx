import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
export default class Card1 extends React.Component{
    render(){
        return(

        <>
            <div style={{display:'flex'}} className="card-container">
                <Card style={{ width: '18rem',border:"none"}} >
                <Card.Img variant="top" src="https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/offers/md/CHKZINGER.jpg?ver=69.48" />
                <Card.Body style={{textAlign:'center',border:"2px"}}>
                <Card.Title><b>FREE CLASSIC ZINGER</b></Card.Title>
                <Card.Text>
                    Min.Order Value 499
                </Card.Text>
                <a>View Details</a> <br />

                <Button variant="dark">Apply Offer</Button>
            </Card.Body>
       </Card>

       <Card style={{ width: '18rem',border:"none" }} >
            <Card.Img variant="top" src="https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/offers/xs/ADDCHK99.jpg?ver=69.48" />
            <Card.Body style={{textAlign:'center'}}>
                <Card.Title><b>2 PC HOT AND CRISPY CHICKEN @ 99</b></Card.Title>
                <Card.Text>
                    Min.Order Value 499
                </Card.Text>
                <a>View Details</a> <br />

                <Button variant="dark">Apply Offer</Button>
            </Card.Body>
       </Card>
        
        <Card style={{ width: '18rem',border:"none" }} >
            <Card.Img variant="top" src="https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/offers/xs/BIGSAVE.jpg?ver=69.48" />
            <Card.Body style={{textAlign:'center'}}>
                <Card.Title><b>UPTO RS 100 OFF</b></Card.Title>
                <Card.Text>
                    Min.Order Value 499
                </Card.Text>
                <a>View Details</a> <br />

                <Button variant="dark">Apply Offer</Button>
            </Card.Body>
       </Card>
       <Card style={{ width: '18rem',border:"none" }} >
            <Card.Img variant="top" src="https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/offers/xs/PHP75.jpg?ver=69.48" />
            <Card.Body style={{textAlign:'center'}}>
                <Card.Title><b>RS 75 OFF</b></Card.Title>
                <Card.Text>
                    Min.Order Value 499
                </Card.Text>
                <a>View Details</a> <br />

                <Button variant="dark">Apply Offer</Button>
            </Card.Body>
       </Card>
            </div>
       </>

        //     <>
        // <Card style={{ width: '18rem' }}>
        // <Card.Img variant="top" src="https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/offers/xs/CHKZINGER.jpg?ver=69.48" />
        // <Card.Body>
        // <Card.Title><b>FREE CLASSIC ZINGER</b></Card.Title>
        // <Card.Text>Min. Order Value 499</Card.Text>
        // <a href="">View Details</a>
        // <Button variant="primary">Apply Offer</Button>
        // </Card.Body>
        // </Card>
        //     </>
        )
        
    }
}