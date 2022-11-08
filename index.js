
const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
const UserModel = require("./models/Users");
const CarModel = require("./models/carModel");
const CustomerModel = require("./models/Customer");
//const { render } = require("ejs");
const dbConnection = require('./db');

mongoose.connect('mongodb+srv://neha:neha123@cluster0.5k7fhgl.mongodb.net/rsnv_cars',{useUnifiedTopology: true, useNewUrlParser: true})

//mongoose.connect('mongodb+srv://riswana1:riswana1@cluster0.uhgwwji.mongodb.net/test');
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.post("/signup", async (req, res) => {

  const O_name = req.body.username;
  const O_email = req.body.email;
  const O_pwd = req.body.pwd;
  const O_contact_no = req.body.contactno;
 
  

  const newUser = new UserModel({

    O_name: O_name,
    O_email: O_email,
    O_pwd: O_pwd,
    O_contact_no: O_contact_no,
  });
 
 // newUser.O_pwd=hash;

  await newUser.save();
  res.send('Entry Saved In The Database');


});
app.post("/owner", async (req, res) => {
  //const Car_id = req.body.Car_id;
  const Car_name = req.body.Car_name;
  const Car_image=req.body.Car_image;
  const Rent_per_day = req.body.Rent_per_day;
  const Fuel_type = req.body.Fuel_type;
  const Seater = req.body.Seater;


  const newCar = new CarModel({
    //Car_id: Car_id,

    Car_name: Car_name,
    Car_image:Car_image,
    Rent_per_day: Rent_per_day,
    Fuel_type: Fuel_type,
    Seater: Seater
  });


  await newCar.save();
  res.send('Entry Saved In The Database');

});
app.post("/customer", async (req, res) => {

  const C_name = req.body.username;
  const C_email = req.body.email;
  const C_pwd = req.body.pwd;
  const C_contact_no = req.body.contactno;


  const newCustomer = new CustomerModel({

    C_name: C_name,
    C_email: C_email,
    C_pwd: C_pwd,
    C_contact_no: C_contact_no,
  });


  await newCustomer.save();
  res.send('Entry Saved In The Database');

});
app.post("/login", (req, res) => {
  const givenemail = req.body.email;
  const givenpwd = req.body.pwd;
  var data = {
    O_email: givenemail,
    O_pwd: givenpwd
  }
  var flag = 0;
  UserModel.findOne(data, function (err, user) {
    if (err) {
      res.send(
        " err"
      );
    }

    if (user) {
      flag = 1;
      res.send(
        'login successful as owner'
      );
    }
  })
  if (flag == 0) {
    var data1 = {
      C_email: givenemail,
      C_pwd: givenpwd
    }
    CustomerModel.findOne(data1, function (err, customer) {
      if (err) {
        // res.send(
        //   " err"
        // );
      }

      if (customer) {
        flag = 1;
        res.send(
          " login successful as customer");
         
      }

    })
  }
  

});
//app.get('')
app.use('/cars/',require('./routes/carsRoute'));
app.get('/carsdisplay',(req,res)=> res.send('Hello World!'));



app.listen(3002, () => { console.log("server started to listen at port http://localhost:3002 "); });


