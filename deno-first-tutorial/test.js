function FindIntersection(strArr) { 

    let a = strArr[0].split(',');
    let b = strArr[1].split(',');
    let max = Math.max(a[a.length - 1], b[b.length -1]);
    let c = new Array(max);

  
    for(let i=0; i< a.length; i++){
        const pa = parseInt(a[i]);
        if(c[pa] == undefined) c[pa] = 0;
        c[pa]++;
    }
  
    for(let i=0; i< b.length; i++){
        const pa = parseInt(b[i]);
        if(c[pa] == undefined) c[pa] = 0;
        c[pa]++;
    }
    let res = [];
  
    for(let i=0; i< c.length; i++){
      if(c[i] > 1){
        //s+= i + ',';
        res.push(i);
      }
    }
  
    return res.join(','); 
  }

  console.log(FindIntersection(["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"]));