const express= require('express');
const app= express();
const bodyParser= require('body-parser');
const stripe = require('stripe')("sk_test_51I0jSuCdJXWbhyer18xN6ibf1pJfwwGGXuofSH9pA7Xhvkg7EdYltIZQPL6MU9B4Rsf4mKl9r3VUtjefWS6Qsdqo00fSrkVw4U");;


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
  console.log(req.body);
  stripe.customers.create({
    email: req.body.stripeToken.email,
    source: req.body.stripeToken.id
  })
  .then(customer => {
    console.log(customer.id);
    stripe.charges.create({
      amount: req.body.amount,
      currency:'inr',
      customer:customer.id,
      description:"stripe-angular-node-trial"
    });
  })
  .then(charge=>{
    res.status(200).json({message:"Successful"});
  })
  .catch(error => console.error(error));
});

module.exports=app;
