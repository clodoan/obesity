var objects = require(["/Users/claudio/Desktop/geotocsv/out.geojson"]);
console.log(objects);

  for(var i = 0; i < objects.length; i++){
    var obj = objects[i];
      for(var prop in obj){
        if(obj.hasOwnProperty(prop) && !isNaN(obj[prop])){
            obj[prop] = +obj[prop];
          }
      }
  }

  console.log(JSON.stringify(objects, null, 2));
