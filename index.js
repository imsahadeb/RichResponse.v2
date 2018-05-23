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
            
                "payload": {
                  "google": {
                    "expectUserResponse": true,
                    "richResponse": {
                      "items": [
                        {
                          "simpleResponse": {
                            "textToSpeech": "This is a Basic Card:"
                          }
                        },
                        {
                          "basicCard": {
                            "title": "Card Title",
                            "image": {
                              "url": "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png",
                              "accessibilityText": "Google Logo"
                            },
                            "buttons": [
                              {
                                "title": "Button Title",
                                "openUrlAction": {
                                  "url": "https://www.google.com"
                                }
                              }
                            ],
                            "imageDisplayOptions": "WHITE"
                          }
                        }
                      ]
                    }
                  }
                }
              
        });
    }
    else{
        res.status(201).json({
            fulfillmentText:"This is not a default welcome intent"
            
        })
    }
});




app.listen(process.env.PORT || 80);