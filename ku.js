/**
 * Created by Administrator on 2016/9/22.
 */

function change(type,key,value){
    var typeKey=typeof key;
    if(typeKey=='boolean'){
        if(key){
            type.clear();
        }
    }else{
        if(value){
            var a=typeof value;
            if(a=="string"){
                type.setItem(key,"0\&"+value);
            }else if(a=='object'){
                var str=JSON.stringify(value);
                type.setItem(key,"1\&"+str);
            }else if(a=='number'){
                type.setItem(key,"2\&"+value);
            }else if(a=='boolean'){
                if(a){
                    type.removeItem(key);
                }
            }
        }else{
            var old=type.getItem(key);
            if(old){
                var new1=old.split("&");
                if(new1[0]==0){
                    return new[1];
                }else if(new1[0]==1){
                    return JSON.parse(new1[1]);
                }else if(new1[0]==2){
                    return parseInt(new1[1]);
                }

            }else{
                console.log("没有这个");
            }
            

        }
    }
}






