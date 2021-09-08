const express = require('express');
const app = express();
const port=process.env.port||8080


app.get('/', (req, res)=> {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.send('Hello Supriya, Good to start NodeJS')
})

app.get('/rewards',(req, res)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    let rewards='';
    let customerAccountNumber = req.query.customerAccountNumber;
    let portfolio = req.query.portfolio;
    let eligible=req.query.CUSTOMER_ELIGIBLE;
    let noeligible=req.query.CUSTOMER_INELIGIBLE;
   
    if(eligible==1 && noeligible==0 && portfolio=='SPORTS'){
     rewards='CHAMPIONS_LEAGUE_FINAL_TICKET'
    } else if(eligible==0 && noeligible==1 && portfolio=='KIDS'){
        rewards='NA'
    } else if(eligible==1 && noeligible==0 && portfolio=='MUSIC'){
        rewards='KARAOKE_PRO_MICROPHONE'
    } else if(eligible==0 && noeligible==1 && portfolio=='NEWS'){
        rewards='NA'
    }else if(eligible==1 && noeligible==0 && portfolio=='MOVIES'){
        rewards='PIRATES_OF_THE_CARIBBEAN_COLLECTION'
    }else{
      rewards='NA'
    }

    if(rewards!=='NA'){
        res.json({ rewards: rewards })
        res.send(rewards)
    } 
})
 
app.listen(port, ()=>{
     console.log('app is listening port')
})