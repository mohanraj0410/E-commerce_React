const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const stripe = require('stripe')('sk_test_51PawunRxOcoelWxWK36pKwUy1rJTt079vJ7SuXFPGthRAWpybm49ANfbdeyzU22AOdjBepxktr4Wy5aPzZ5xINnB00o9DNokC7');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.post('/payment', (req, res) => {
    const { token, amount } = req.body;

    const body = {
        source: token.id,
        amount,
        currency: 'usd',
    };

    stripe.charges.create(body, (stripeErr, stripeRes) => {
        if (stripeErr) {
            res.status(500).send({ error: stripeErr });
        } else {
            res.status(200).send({ success: stripeRes });
        }
    });
});

app.listen(port, error => {
    if (error) throw error;
    console.log('Server running on port ' + port);
});
