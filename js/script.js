//=====METHODS FOR RETRIEVING HTML CONTENT=====
function getBody(content) {
   var x = content.indexOf("<body");
   x = content.indexOf(">", x);
   var y = content.lastIndexOf("</body>");
   return content.slice(x + 1, y);
};

function getContent(content, target){
    target.innerHTML = getBody(content);
}

//retrieves elements from imported html based on ID
function getHTMLFragment(linkID){
    //get the link using the ID
    var link = document.querySelector(linkID); //link is an HTMLDocument object
    //clone template from about.html
//    var nodes = link.getElementsByClassName(' template'); //imports template from link
//    alert(template);
    var template = link.import.querySelector('template'); //should select template element

    // imports content in template element, boolean (true) indicates
    //  whether descents of imported node need to be imported
    var frag = document.importNode(template.content, true);

    return frag;
}

//removes any content already in container, if any at all
function removeCurrent(){
    document.getElementById('container').innerHTML = "";
}

//goes to container view, towards bottom of page
function goToContainer(){
    //scroll down to it
    location.href = "#";
    location.href = "#container" //fixes bug in Chrome & Safari
}


//===============JQUERY METHODS===========
$(document).ready(function(){
    $(".btnAbout").click(function(){
        //remove any current child in container
        removeCurrent();

        //append content to container
        var content = getHTMLFragment('#aboutHTML'); //get template as DocumentFragment object
        document.querySelector('#container').appendChild(content); //append container element

    });

    $(".btnSkill").click(function(){
        removeCurrent();
        var content = getHTMLFragment('#skillsHTML'); //get template as DocumentFragment object
        document.querySelector('#container').appendChild(content);
        goToContainer();
    });

    $(".btnEdu").click(function(){
        removeCurrent();
        var content = getHTMLFragment('#eduHTML'); //get template as DocumentFragment object
        document.querySelector('#container').appendChild(content);
    });

    $(".btnExp").click(function(){
        removeCurrent();
        var content = getHTMLFragment('#expHTML'); //get template as DocumentFragment object
        document.querySelector('#container').appendChild(content);
        goToContainer();
    });

    //when clicked menu Contact Me item, TODO: link to email form
    $(".btnContact").click(function(){
        removeCurrent();
        var content = getHTMLFragment('#infoHTML'); //get template as DocumentFragment object
        document.querySelector('#container').appendChild(content);
        goToContainer();
    });


    //When clicked bottom text
    $( ".contactBtm" ).click(function() {
        removeCurrent();
        var content = getHTMLFragment('#infoHTML');
        document.querySelector('#container').appendChild(content);
        goToContainer();
    });
});
