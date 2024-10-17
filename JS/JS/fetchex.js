const res=fetch("https://api.github.com/users/Hariom1007");
    res.then((data)=>{
       return data.json();
    }).then((d)=>{
        console.log(d);
    }).catch((err)=>{
        console.log("error is",err);
    })