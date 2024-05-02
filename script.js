function getFormvalue() {
    //Write your code here
    var form = document.querySelector("#form1");
    let first = document.querySelector("[name='fname']").value;
    let second = document.querySelector("[name='lname']").value;
    console.log(first);
    console.log(second);
    alert(
        first + " " + second
    )
}
