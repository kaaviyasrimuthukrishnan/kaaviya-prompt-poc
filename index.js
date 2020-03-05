var name=prompt("Enter Name");
var start_slice=prompt("Enter start_slice");
if(isNaN(start_slice))
{
  alert("Ënter valid details");
}
var end_slice=prompt("Enter end_slice");
if(isNaN(end_slice))
{
  alert("Ënter valid details");
}
alert(name.slice(start_slice,end_slice));