alert("welcome");
var arr = [];

$(document).ready(function () {
    $("#myTable").DataTable();

});


function addDataToTable()

{

    var name = document.getElementById("name").value;
    var address = document.getElementById("address").value;
    var email = document.getElementById("email").value;
    var contactno = document.getElementById("contactno").value;

    var mydata = {
        "name": name,
        "address": address,
        "email": email,
        "contactno": contactno,
    }

    console.log(mydata);
    arr.push(mydata);

    populateTable(arr);
}


function populateTable(arr) {

    console.log(arr);
    $("#myTable tbody").html("");

    for (var i = 0; i < arr.length; i++) {
        var tblRow = "<tr>" + "<td>" + arr[i].name + "</td>" + "<td>" + arr[i].address + "</td>" +
            "<td>" + arr[i].email + "</td>" + "<td>" + arr[i].contactno + "<td>" + "<button type='button' alt='edit" + i + "' id='editBtn' data-toggle='modal' data-target='#editmodal' onclick='onEdit(this)' class='btn btn-default'>" +
            "<span class='glyphicon  glyphicon-pencil' />" + "</button>" + "</td>" +

            "<td>" + "<button type='button' alt='del" + i + "' onclick='onDelete(this)'><span class='glyphicon  glyphicon-remove' /></button>" + "</td>" + "</td>" +
            +"</tr>"

        $(tblRow).appendTo("#myTable tbody");
    }


    $('input[type="text"], textarea').val('');
    $('input[type="email"], textarea').val('');
    $("[data-dismiss=modal]").trigger({
        type: "click"
    });

}


function onEdit(ctl) {


    editIndex = parseInt($(ctl).attr("alt").replace("edit", ""));
    alert(editIndex);

    console.log(editIndex);

    $("#editname").val(arr[editIndex].name);
    $("#editaddress").val(arr[editIndex].address);
    $("#editemail").val(arr[editIndex].email);
    $("#editcontactno").val(arr[editIndex].contactno);


}


$("#update").click(function () {


    UpdateFunction(editIndex);

});

function UpdateFunction(editIndex) {

    var name = document.getElementById("editname").value;
    var address = document.getElementById("editaddress").value;
    var email = document.getElementById("editemail").value;
    var contactno = document.getElementById("editcontactno").value;

    alert(name + address + email + contactno);

    arr[editIndex].name = name;
    arr[editIndex].address = address;
    arr[editIndex].email = email;
    arr[editIndex].contactno = contactno;

    populateTable(arr);




    console.log(arr);
    $('input[type="text"], textarea').val('');
    $('input[type="email"], textarea').val('');
    $("[data-dismiss=modal]").trigger({
        type: "click"
    });



}



function onDelete(del) {

    delIndex = parseInt($(del).attr("alt").replace("del", ""));

    var r = confirm("Are you sure?");
    if (r == true) {
        arr.splice(delIndex, 1);
        console.log(arr);
        populateTable(arr);

    }


}