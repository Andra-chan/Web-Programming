let numberOfSelected = 0;
const delay = ms => new Promise(res => setTimeout(res, ms));

async function show(el){

    el = el.childNodes[0];
    if (el.getAttribute("class","done"))
        el.removeAttribute("class");
    el.setAttribute("class", "uncovered");
    numberOfSelected ++;

    if(numberOfSelected == 2){

        await delay(200);
        var list = document.getElementsByClassName("uncovered");

        let item1 = list[0];
        console.log(item1);
        let item2 = list[1];
        console.log(item2);

        if(item1.getAttribute("src") == item2.getAttribute("src")){
            item1.removeAttribute("class");
            item1.setAttribute("class", "done");
            item2.removeAttribute("class");
            item2.setAttribute("class", "done");
        }
        else{
            item1.removeAttribute("class");
            item1.setAttribute("class", "covered");
            item2.removeAttribute("class");
            item2.setAttribute("class", "covered");
        }

        numberOfSelected = 0;

    }

}

async function showNr(el){

    //el = el.childNodes;
    el.removeAttribute("class");
    el.setAttribute("class", "uncoveredNr");
    numberOfSelected ++;

    if(numberOfSelected == 2){

        await delay(200);
        var list = document.getElementsByClassName("uncoveredNr");

        let item1 = list[0];
        console.log(item1);
        let item2 = list[1];
        console.log(item2);

        if(item1.innerHTML == item2.innerHTML){
            item1.removeAttribute("class");
            item1.setAttribute("class", "done");
            item2.removeAttribute("class");
            item2.setAttribute("class", "done");
        }
        else{
            item1.removeAttribute("class");
            item1.setAttribute("class", "coveredNr");
            item2.removeAttribute("class");
            item2.setAttribute("class", "coveredNr");
        }

        numberOfSelected = 0;

    }

}
