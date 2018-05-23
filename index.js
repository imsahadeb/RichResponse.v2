const express =require('express');
const bodyParser = require('body-parser');
const app = express();
const API_KEY1= "q86si59pft";
const API_KEY2 = "ye1rpmx0tk";
app.use(
    bodyParser.urlencoded({
      extended: true
    })
  );
  app.use(bodyParser.json());

app.post('/api',(req,res)=>{
    //var parameters= req.body.queryResult.parameters;
    var parameters= req.body.queryResult.parameters;

    
    var intent=req.body.queryResult.intent.displayName;
    console.log(intent);
    if(intent='Default Welome Intent'){
        res.status(200).json({
            
               // "fulfillmentText": "This is a text response",
                "fulfillmentMessages": [
                  {
                    "card": {
                      "title": "card title",
                      "subtitle": "card text",
                      "imageUri": "https://assistant.google.com/static/images/molecule/Molecule-Formation-stop.png",
                      "buttons": [
                        {
                          "text": "button text",
                          "postback": "https://assistant.google.com/"
                        }
                      ]
                    }
                  }
                ]      
        });
    }
    else{
        res.status(201).json({
            fulfillmentText:"This is not a default welcome intent"
            
        })
    }
});




app.listen(process.env.PORT || 80);