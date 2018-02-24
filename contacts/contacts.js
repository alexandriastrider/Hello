<ul id = "contact-array"></ul>
 let contactArray = ['Allie Strider', 423-555-5555, 'alexandria.strider@yahoo.com']
 contactArray[3] = 'A new item'
 contactArray[4] = 'alexandria.strider@yahoo.com'

 function addContent(array){
   console.log(array)
   $("#contact-array").append("<li>" + array + "</li>");
 }
 contactArray.forEach(addContent)
 
