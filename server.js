// sk_test_51OgUZMGSGCprzML865e9UtjmyPoUFcO4PEsL9KEpqC9Jy8I4khFIXGY3C0iLXFCRT31JoX3Oflfymtnydqo1TVtK00Q92e8Go8
// coffee: price_1OgUfuGSGCprzML8cPnRLcG6
// sunglasses: price_1OgUhYGSGCprzML8MPyYERa9
// camera: price_1OgUi6GSGCprzML8wM85S8hj

const express = require('express');
var cors = require('cors');
const stripe = require('stripe')('sk_test_51OgUZMGSGCprzML865e9UtjmyPoUFcO4PEsL9KEpqC9Jy8I4khFIXGY3C0iLXFCRT31JoX3Oflfymtnydqo1TVtK00Q92e8Go8')

const app = express();
app.use(cors())
app.use(express.static("public"));
app.use(express.json())

app.post("/checkout", async (req, res)=> {

    console.log(req.body)
    const items = req.body.items;
    let lineItems = [];
    items.forEach((item) => {
        lineItems.push(
            {
                price: item.id,
                quantity: item.quantity
            }
        )
    })

    const session = await stripe.checkout.sessions.create({
        line_items: lineItems,
        mode: 'payment',
        success_url: "http://localhost:3000/success",
        cancel_url: "http://localhost:3000/cancel",
    })

    res.send(JSON.stringify({
        url: session.url
    }))

});

app.listen(4000, () => console.log("Listening on port 4000"))