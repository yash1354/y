const express =require("express")
const app=express()
const users =[{
    Name :'john',
    Age :'22',
    kidneys :[{
        healthy : true  
    }]
}];
app.use(express.json());
app.get("/",function(req,res){
    const johnkidneys =users[0].kidneys;
    const numberofkidneys = johnkidneys.length;
    let number0fhealthykidneys =0;
    for(let i=0;i<johnkidneys.length;i++){
        if(johnkidneys[i].healthy){
            numberofhealthykidneys =number0fhealthykidneys+1;
        }
    }
    const numberofunhealthykidneys = numberofkidneys - numberofhealthykidneys;
    res.json({
        numberofkidneys,
        numberofhealthykidneys,
        numberofunhealthykidneys
    })
})

app.post("/",function(req,res){
    const isHealthy =  req.body.isHealthy;
users[0].kidneys.push({
    healthy : isHealthy
})
res.json({
    msg : "done"
})
})

app.put("/", function(req, res) {
    for (let i = 0; i<users[0].kidneys.length; i++) {
        users[0].kidneys[i].healthy = true;
    }
    res.json({});
})

app.delete("/",function(req,res){
    if(isthereatleastoneunhealthykidney()){
        const newKidneys = [];
        for (let i = 0; i<users[0].kidneys.length; i++) {
            if (users[0].kidneys[i].healthy) {
                newKidneys.push({
                    healthy: true
                })
            }
        }
        users[0].kidneys = newKidneys;
        res.json({msg: "done"})   
    } else {
        res.status(411).json({
            msg: "You have no bad kidneys"
        });
    }
})
function isthereatleastoneunhealthykidney(){
    let atleastoneunhealthykidney = false;
    for (let i = 0; i<users[0].kidneys.length; i++) {
        if(!users[0].kidneys[i].healthy){
            atleastoneunhealthykidney = true ;
        }
    }
    return atleastoneunhealthykidney
}
app.listen(3000);