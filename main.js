function prob(n,k,p){
    if(n==k){
        //return Math.pow(p,n)
        p.pow(k);
    }
    if(k==0){
        //return Math.pow(1-p,n)
        (new BigNumber(1).minus(p)).pow(k);
    }
    A=new BigNumber("1.0");
    let j=1;
    for(let i=n;i>k;i--){
        //console.log((i/j*(1-p)));
        //console.log(A);
        //console.log("i");
        //console.log(i);
        //console.log("j");
        //console.log(j);
        if(j<=k){      
            A=A.multipliedBy(i).dividedBy(j).multipliedBy(p);
            //A*=(i/j*p);
        }else{
            //A*=(i/j*(1-p));
            A=A.multipliedBy(i).dividedBy(j).multipliedBy((new BigNumber(1)).minus(p));
        }
        j++;
    }

    for(let i=j;i<=n;i++){
        if(i<=k){            
            //A*=(p);
            A=A.multipliedBy(p);
        }else{
            //A*=((1-p));
            A=A.multipliedBy(new BigNumber(1).minus(p));
        }
    }

    return A;

}

function interface_run(){
    let n=new BigNumber(document.getElementById("n").value);
    let k=new BigNumber(document.getElementById("k").value);
    let p=new BigNumber(document.getElementById("p").value);
    A=prob(n,k,p);
    document.getElementById("PA").innerText="確率(p値):"+A;
    if(A>=0.05){
        document.getElementById("AA").innerText="不正があったとは言えない";
    }else{
        document.getElementById("AA").innerText="不正があったと言える";
    }
}
