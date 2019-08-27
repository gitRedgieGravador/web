var id = 1;
var editing = false;
var num = 0;
var list = [["defualt", "defualt", "defualt", "defualt"]];
$(document).ready(function () {
    $("#addStudent").on("click", function () {
        $("#divFrom").css("height", "100%");
    });

    $("#idNum").val(id);

    $(function(){
        $("#cancel").click(function () {
            $("#divFrom").css("height", "0%");
            $("input").val("");
            $("#idNum").val(id);
            editing = false;

        });
    });

    $(function () {
        $("#save").click(function () {
            let pid = id;
            let pfname = $("#firstname").val();
            let plname = $("#lastname").val();
            let pname = pfname + " " + plname;
            let pcy = $("#cy").val();
            let padd = $('#address').val();
            let pemail = $("#email").val();
            if (pfname == "" || plname == "" ||pcy == "" || pemail == "" || padd == "") {
                alert("All fields are required!");
            } else {
                if (editing) {
                    let editId = $("#idNum").val();

                    $("#name" + editId).text(pname);
                    $("#cy" + editId).text(pcy);
                    list[editId][0] = pname;
                    list[editId][1] = pcy;
                    list[editId][2] = pemail;
                    list[editId][3] = padd;

                    $("#divFrom").css("height", "0%");
                    $("input").val("");
                    $("#idNum").val(id);
                    editing = false;

                } else {
                    let parent = $("#tbodyContainer");
                    let row = $("<tr></tr>");
                    let th = $("<th></th>").text(pid);
                    let name = $("<td></td>").text(pname);
                    let CY = $("<td></td>").text(pcy);
                    let action = $("<td></td>");
                    let edit = $("<span></span>").text("Edit");
                    let remove = $("<span></span>").text("Delete");

                    row.attr("id", pid);
                    th.attr("id", "th" + pid);
                    th.attr("scope", "row");
                    name.attr("id", "name" + pid);
                    CY.attr("id", "cy" + pid);
                    edit.attr("id", "btnEdit" + pid);
                    edit.addClass("btn btn-success paddingLeft");
                    remove.attr("id", "btnRemove" + pid);
                    remove.addClass("btn btn-danger paddingRight");

                    edit.hide();
                    remove.hide();

                    parent.append(row);

                    $("#" + pid).append(th, name, CY, action);
                    action.append(edit, remove);

                    let arr = [pfname,plname, pcy, pemail, padd];
                    list.push(arr);

                    id += 1;
                    $("#divFrom").css("height", "0%");

                    $("input").val("");
                    $("#idNum").val(id);
                }
            }
        });
    });

    $(function () {
        $("#tbodyContainer").on('mouseover', "tr", function (event) {
            $(this).css("background", "rgb(242, 242, 242)");
            num = $(this).attr('id');
            $("#btnEdit" + num).show();
            $("#btnRemove" + num).show();

            $("#btnEdit" + num).on('click', function () {
                editing = true;
                $("#idNum").val(num);
                $("#firstname").val(list[num][0]);
                $("#lastname").val(list[num][1]);
                $("#cy").val(list[num][2]);
                $("#email").val(list[num][3]);
                $('#address').val(list[num][4]);

                $("#divFrom").css("height", "100%");
            });

            $("#btnRemove" + num).on('click', function () {
                $("#" + num).remove();
            });
        });

        $("#tbodyContainer").on('mouseleave', "tr", function (event) {
            $(this).css("background", "white");
            $("#btnEdit" + num).hide();
            $("#btnRemove" + num).hide();
        });

    });

});
