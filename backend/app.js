const express= require('express');
const app= express();
const bodyParser= require('body-parser');
const stripe = require('stripe');

const stripe_obj= stripe("sk_test_51I0jSuCdJXWbhyer18xN6ibf1pJfwwGGXuofSH9pA7Xhvkg7EdYltIZQPL6MU9B4Rsf4mKl9r3VUtjefWS6Qsdqo00fSrkVw4U");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use((req,res,next)=>{
  res.setHeader("Access-Control-Allow-Origin","*");
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With , Content-Type, Accept, Authorization");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE, OPTIONS");
  next();

});

app.use("/start",(req,res,next)=>{
  res.status(200).json({message:"Sever Started"});
})

app.post("/create-checkout-session",(req,res,next)=>{
  stripe_obj.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [
      {
        price_data: {
          currency: 'INR',
          product_data: {
            name: 'T-shirt',
          },
          unit_amount: 2000,
        },
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: req.protocol + "://" + req.get('host')+'/success',
    cancel_url: req.protocol + "://" + req.get('host')+'/cancel'
  })
  .then((session)=>{
      res.status(200).json({
        id:session.id
      });
  })
});

module.exports=app;
