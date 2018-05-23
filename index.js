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
            
                "expectUserResponse": true,
                "isSsml": false,
                "noInputPrompts": [],
                "richResponse": {
                  "items": [
                    {
                      "simpleResponse": {
                        "displayText": "hi",
                        "textToSpeech": "hello"
                      }
                    }
                  ],
                  "suggestions": [
                    {
                      "title": "Say this"
                    },
                    {
                      "title": "or this"
                    }
                  ]
                },
                "systemIntent": {
                  "data": {
                    "@type": "type.googleapis.com/google.actions.v2.OptionValueSpec",
                    "listSelect": {
                      "items": [
                        {
                          "optionInfo": {
                            "key": "key1",
                            "synonyms": [
                              "key one"
                            ]
                          },
                          "title": "must not be empty, but unique"
                        },
                        {
                          "optionInfo": {
                            "key": "key2",
                            "synonyms": [
                              "key two"
                            ]
                          },
                          "title": "must not be empty, but unique"
                        }
                      ]
                    }
                  },
                  "intent": "actions.intent.OPTION"
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