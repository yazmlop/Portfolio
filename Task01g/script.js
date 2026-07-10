// Feature 1: add two dynamic interaction components to your page. Javascript can be included in an external JS file such as this, or within the HMTL. Use docstring to describe the components created in the external .js file.

function footer_date() {
    var last_modified_date = new Date(document.lastModified);
    return (last_modified_date.toDateString());
}

//This function inserts the last modified date into the footer
function insert_footer_last_modified(){
    var footer = document.getElementById("footer");
    const last_modified = document.createElement("div");
    const modified_date = document.createTextNode("Last Updated on: " + footer_date());
    last_modified.appendChild(modified_date);
    footer.appendChild(last_modified);
}

function myFunction() {
  var x = document.getElementById("myDIV");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

document.addEventListener("DOMContentLoaded", (event) => {
    insert_footer_last_modified();
   
});