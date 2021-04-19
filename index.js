const FetchTweets=require('twit');
const http=require('http');
const express=require('express');
const PORT= process.env.PORT || 3001;
const app=express();


     const apikeys=new FetchTweets({
        consumer_key:         'e0EPk1AtUVE0m1lsguLVanqCn',
        consumer_secret:      'kxqkg4CMyiI2AISzzIh33ehbBXeymw9ijACNFvxjXJECrn5vIg',
        access_token:         '957931550452142081-zAQDrrHMmhPZTbFJ1xoGt2Wt1m5TbWC',
        access_token_secret:  'KigeKx4aEDX21XFl2zNCugdggUaZWiIyTobSiFGPW1Rfk',
    });
    
    
    const options={
        count:1,
        id:1,
        lang:'en'
    
    }
    
    apikeys.get('trends/place',options,(req,data)=>{
      const datafetched=JSON.stringify(data);

      //app.get('/api', (req,res)=>{
         //const json=res.json(datafetched);
    //      for(j in json){
    //          console.log(j);
    //      }
    //   })
    });
         

  
app.listen(PORT,()=> {console.log(`Server running on port ${PORT}`)});



