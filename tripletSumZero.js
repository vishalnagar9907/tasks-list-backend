const tripletSum =(arr)=>{
    arr.sort((a,b)=>a-b);
    let n = arr.length;
   
    
    for(let i=0;i<n-1;i++){
        let start = i+1;
        let end = n-1;
        
        while(start<end){
            if(arr[start]+arr[i]+arr[end]===0) return true;
            if(arr[start]+arr[i]+arr[end]<0){
                start++;
            }
            else {
                end--;
            }
        }
    }
    return false;
}

const arr = [0,-1,2,-3,1];

console.log(tripletSum(arr));