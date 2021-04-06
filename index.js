document.getElementById('generate').onclick = function() {
    let values = ["Option One", "Option Two", "Option Three"];

    let select = document.createElement('select');
    select.id = "options"
    select.name = "options-select";
 
    for(const val of values) {
        let option = document.createElement("option"); // should this option one?
        option.value = val;
        option.text = val.charAt(0).toUpperCase + val.slice(1);
        select.appendChild(option);
    } //end of this loop, but more need to be added to this js to make it functionl.
}