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
                          "textToSpeech": "Choose a item"
                        }
                      }
                    ]
                  },
                  "systemIntent": {
                    "intent": "actions.intent.OPTION",
                    "data": {
                      "@type": "type.googleapis.com/google.actions.v2.OptionValueSpec",
                      "carouselSelect": {
                        "items": [
                          {
                            "optionInfo": {
                              "key": "first title"
                            },
                            "description": "first description",
                            "image": {
                              "url": "https://developers.google.com/actions/images/badges/XPM_BADGING_GoogleAssistant_VER.png",
                              "accessibilityText": "first alt"
                            },
                            "title": "first title"
                          },
                          {
                            "optionInfo": {
                              "key": "second"
                            },
                            "description": "second description",
                            "image": {
                              "url": "https://lh3.googleusercontent.com/Nu3a6F80WfixUqf_ec_vgXy_c0-0r4VLJRXjVFF_X_CIilEu8B9fT35qyTEj_PEsKw",
                              "accessibilityText": "second alt"
                            },
                            "title": "second title"
                          }
                        ]
                      }
                    }
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