function move2(){
    var first = document.getElementById('firstSelect');
    var second = document.getElementById('secondSelect');

    var opt = document.createElement("option")
    opt.text = first.options[first.selectedIndex].text;

    first.remove(first.selectedIndex);
    second.add(opt);
}

function move1(){
    var first = document.getElementById('firstSelect');
    var second = document.getElementById('secondSelect');

    var opt = document.createElement("option")
    opt.text = second.options[second.selectedIndex].text;

    second.remove(second.selectedIndex);
    first.add(opt);
}