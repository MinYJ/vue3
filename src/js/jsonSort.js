const jsonSort={
  arrayAsc(data,key){
    let returnJson=data.sort(function(a,b){
      const cnt=a.length;
      let check=0;
      for(let i=0;i<cnt;i++){
        if(a[i].id==key){
          break;
        }
        check++;
      }
      return (a[check].value < b[check].value) ? -1 : (a[check].value > b[check].value) ? 1 : 0;
    });
    return returnJson;
  },
  arrayDesc(data, key){
    let returnJson=data.sort(function(a,b){
      const cnt=a.length;
      let check=0;
      for(let i=0;i<cnt;i++){
        if(a[i].id==key){
          break;
        }
        check++;
      }
      return (a[check].value > b[check].value) ? -1 : (a[check].value < b[check].value) ? 1 : 0;
    });
    return returnJson;
  },

  arrayOrder(data,order,keyName){
    let returnData=[];
    data.forEach(itemArray => {
      let orderItem = [];
      order.forEach(keyValue=>{
        itemArray.forEach(item=>{
          if(item[keyName]==keyValue){
            //console.log(item[keyName]+'=='+keyValue)
            orderItem.push(item)
            // return item;
          }
        })
      })
      returnData.push(orderItem);
    });
    return returnData;
  },

  asc(data,key){
    let returnJson=data.sort(function(a,b){
      return (a[key] < b[key]) ? -1 : (a[key] > b[key]) ? 1 : 0;
    })
    return returnJson;
  },
  desc(data,key){
    let returnJson=data.sort(function(a,b){
      return (a[key] > b[key]) ? -1 : (a[key] < b[key]) ? 1 : 0;
    })
    return returnJson;
  }
}
export default jsonSort;