function llenarVector(arreglo,tam){
    for (let i = 0; i < tam; i++) {
       arreglo.push(Math.round(Math.random()*100));    
    }
    return arreglo;
    }
    let vec=new Array();
    let x=10;
    llenarVector(vec,x);
    console.log(vec);
    vec.pop();
    console.log(vec);
    vec.shift();
    console.log(vec);
    vec.unshift(120);
    console.log(vec);
    
    //let x=Math.round((Math.random()*10));
    //console.log(x);
    //var let const
    // let vec=[1,2,3,4,];
    // vec[0]='x';
    // vec[2]='tres';
    // console.log(vec[1]);
    // vec=new Array();
    // let vec1=new Array();