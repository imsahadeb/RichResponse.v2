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
            fulfillmentMessages:[
                {
                   "simpleResponses": [
                       {
                        "textToSpeech": "This is default intent",
                        //"ssml": string,
                        "displayText": "default intent"
                        }
                     ]
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