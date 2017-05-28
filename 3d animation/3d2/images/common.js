function uploadPhoto(fid, id, formid) {
    /*		$("#loading")
    .ajaxStart(function(){
    $(this).show();
    })
    .ajaxComplete(function(){
    $(this).hide();
    });*/
    var inputNo = id;
    id = id + "_file";

    $.ajaxFileUpload
		(
			{

			    url: "UploadFile.ashx?job=upload&FormId=" + formid + "&InputId=" + inputNo,
			    secureuri: false,
			    fileElementId: id,
			    dataType: 'text',
			    timeout: 999999,
			    beforeSend: function () {
			        $("#" + fid + "_uploadBtn").hide();
			    },
			    complete: function () {
			        //$("#" + fid + "_uploadBtn").show();
			    },
			    success: function (data, status) {
			        var data = eval("(" + data + ")");
			        if (data.Code == "-1") {
			            alert(data.Message);
			            $("#" + fid + "_uploadBtn").show();
			        }
			        else {
			            $("#" + fid).val(data.Message);
			            $("#" + fid + "_photo").attr("src", data.Message);
			            $("#" + fid + "_photodiv").show();
			            $("#" + fid + "_uploadBtn").hide();
			            $("#" + id).hide();
			        }
			    },
			    error: function (data, status, e) {
			        alert(e);
			        $("#" + fid + "_uploadBtn").show();
			    }
			}
		)

    return false;

}

function DelPhoto(text, id, url) {
    if (confirm(text)) {
        var del = $("#" + id + "_del");
        del.val(del.val() + "," + url);

        $("#" + id).val("");
        $("#" + id + "_photodiv").hide();
        $("#" + id + "_div").show();


    }
    else {
        return false;
    }
}

function DelPhotoforMuti(text, id, photoid, url) {
    if (confirm(text)) {
        var del = $("#" + id + "_del");
        del.val(del.val() + "," + url);

        $("#" + photoid).val("");
        $("#" + photoid + "_photodiv").hide();
        $("#" + id + "_div").show();


    }
    else {
        return false;
    }
}


var currentFormId = null;
var havePosted = false;

var errFunc = null;
var successFunc = null;
function PostForm(formid) {

    if (havePosted) {
        return;
    }

    currentFormId = formid;
    for (var i = 0; i < document.all.length; i++) {


        if (document.all[i].id.indexOf("___Frame") > -1) {
            var id = document.all[i].id.split('_')[0];
            document.getElementById(id).value = FCKeditorAPI.GetInstance(id).GetXHTML();

        }

    }

    var options = {
        //target: '#output1',   // target element(s) to be updated with server response 
        beforeSubmit: showRequest,  // pre-submit callback 
        success: showResponse,  // post-submit callback 
        url: "../ReadHandler.ashx?job=postform"


        //timeout:   3000 
    };

    // bind form using 'ajaxForm'
    havePosted = true;
    $('#' + formid).ajaxSubmit(options);


}

function PostFormEvent(formid, ef, sf) {

    if (havePosted) {
        return;
    }
    errFunc = ef;
    successFunc = sf;
    currentFormId = formid;
    for (var i = 0; i < document.all.length; i++) {


        if (document.all[i].id.indexOf("___Frame") > -1) {
            var id = document.all[i].id.split('_')[0];
            document.getElementById(id).value = FCKeditorAPI.GetInstance(id).GetXHTML();

        }

    }

    var options = {
        //target: '#output1',   // target element(s) to be updated with server response 
        beforeSubmit: showRequest,  // pre-submit callback 
        success: showResponse,  // post-submit callback 
        url: "../ReadHandler.ashx?job=postform"


        //timeout:   3000 
    };

    // bind form using 'ajaxForm'
    havePosted = true;
    $('#' + formid).ajaxSubmit(options);


}

function PostModule(formid) {
    if (havePosted) {
        return;
    }

    currentFormId = formid;
    var options = {
        //target: '#output1',   // target element(s) to be updated with server response 
        beforeSubmit: showRequest,  // pre-submit callback 
        success: showResponse,  // post-submit callback 
        url: "../ReadHandler.ashx?job=postmodule",
        type: "POST"

        //timeout:   3000 
    };

    // bind form using 'ajaxForm'
    havePosted = true;
    $('#' + formid).ajaxSubmit(options);


}

function PostModuleEvent(formid, ef, sf) {
    if (havePosted) {
        return;
    }

    currentFormId = formid;
    errFunc = ef;
    successFunc = sf;
    var options = {
        //target: '#output1',   // target element(s) to be updated with server response 
        beforeSubmit: showRequest,  // pre-submit callback 
        success: showResponse,  // post-submit callback 
        url: "../ReadHandler.ashx?job=postmodule",
        type: "POST"

        //timeout:   3000 
    };

    // bind form using 'ajaxForm'
    havePosted = true;
    $('#' + formid).ajaxSubmit(options);


}

// pre-submit callback 
function showRequest(formData, jqForm, options) {

    var queryString = $.param(formData);

    return true;
}

// post-submit callback 
function showResponse(responseText, statusText, xhr, $form) {
    havePosted = false;
    if (statusText == "success") {
        var data = eval("(" + responseText + ")");
        //var back = responseText.split("|");

        if (data != null) {
            if (data.Code == -1) {
                if (data.ControlId != '' && data.ControlId != null) {
                    $("#" + data.ControlId).focus();
                }
                else if (data.ControlName != '' && data.ControlName != null) {
                    if (currentFormId != null) {
                        $("#" + currentFormId + " input[name='" + data.ControlName + "']").focus();
                    }
                    else {
                        $("input[name='" + data.ControlName + "']").focus();
                    }
                }
                alert(unescape(data.Message));
                if (errFunc != null) {
                    setTimeout(errFunc, 10);
                }

            }
            else {
                if (data.Message != "" && data.Message != null) {
                    alert(unescape(data.Message));
                }
                if (data.RedirectUrl != "" && data.RedirectUrl != null) {
                    document.location.href = data.RedirectUrl;
                }
                if (successFunc != null) {
                    setTimeout(successFunc, 10);
                }
            }
        }
    }
    else {
        alert(statusText);
        return false;
    }

    //alert('status: ' + statusText + '\n\nresponseText: \n' + responseText +
    //   '\n\nThe output div should have already been updated with the responseText.');
}

var loadImg = "<img src='/skin/images/loading.gif' style='width:16px;   margin:0 auto;position:absolute;   top:50%;   height:16px;    margin-top:8px;'>";

function LoadModel(DivId, ModelId, paras) {
    var oldtextalign = "";
    var oldposition = "";
    $.ajax({
        type: "POST",
        url: "../ReadHandler.ashx?ModelName=" + ModelId + "&" + Math.random() + "&" + paras,
        success: function (msg) {
            $('#' + DivId).css("text-align", oldtextalign);
            $('#' + DivId).css("position", oldposition);
            $('#' + DivId).html(msg);

        },
        beforeSend: function (data) {
            oldtextalign = $('#' + DivId).css("text-align");
            oldposition = $('#' + DivId).css("position");
            $('#' + DivId).css("text-align", "center");
            $('#' + DivId).css("position", "relative");
            $('#' + DivId).html(loadImg);
        }
    });
}

function LoadModelEvent(DivId, ModelId, paras, func) {
    var oldtextalign = "";
    var oldposition = "";
    $.ajax({
        type: "POST",
        url: "../ReadHandler.ashx?ModelName=" + ModelId + "&" + Math.random() + "&" + paras,
        success: function (msg) {
            $('#' + DivId).css("text-align", oldtextalign);
            $('#' + DivId).css("position", oldposition);
            $('#' + DivId).html(msg);

            if (func != null) {
                setTimeout(func, 10);
            }

        },
        beforeSend: function (data) {
            oldtextalign = $('#' + DivId).css("text-align");
            oldposition = $('#' + DivId).css("position");
            $('#' + DivId).css("text-align", "center");
            $('#' + DivId).css("position", "relative");
            $('#' + DivId).html(loadImg);
        }
    });
}

function AppendModel(DivId, ModelId, paras) {

    $.ajax({
        type: "POST",
        url: "../ReadHandler.ashx?ModelName=" + ModelId + "&" + Math.random() + "&" + paras,
        success: function (msg) {
            $('#' + DivId).append(msg);

        },
        beforeSend: function (data) {
            //$('#' + DivId).html("loading...");
        }
    });
}



function ShowTab(TabId, DivId, ModelId, TabType, paras, obj) {
    var oldtextalign = "";
    var oldposition = "";
    $.ajax({
        type: "POST",
        url: "../ReadHandler.ashx?ModelName=" + ModelId + "&" + Math.random() + "&" + paras,
        success: function (msg) {
            $('#' + DivId).css("text-align", oldtextalign);
            $('#' + DivId).css("position", oldposition);
            $('#' + DivId).html(msg);


        },
        beforeSend: function (data) {

            $('#' + TabId + " " + TabType).addClass("on").siblings().removeClass();
            $('#' + obj).addClass("on");
            oldtextalign = $('#' + DivId).css("text-align");
            oldposition = $('#' + DivId).css("position");
            $('#' + DivId).css("text-align", "center");
            $('#' + DivId).css("position", "relative");
            $('#' + DivId).html(loadImg);
        }
    });
}


var targetSelect = "";
function AjaxChoose(v, url, select, inputno, loading, pleaseselect) {
    targetSelect = select;
    var selecteditem = v.value;
    if (selecteditem != "") {
        document.all(targetSelect).options.add(new Option("(" + loading + "...)", ""));
        jQuery.get(url + "?" + Math.random() + "&keyno=" + selecteditem + "&inputno=" + inputno, {
            Action: "post",
            Name: "lulu"
        },
            function (data, textStatus) {
                if (data != null) {
                    document.getElementById(targetSelect).length = 0;
                    document.all(targetSelect).options.add(new Option("(" + pleaseselect + ")", ""));
                    $(data).find("Item").each(function (i) {
                        document.all(targetSelect).options.add(new Option($(this).children("OptionText").text(), $(this).children("OptionValue").text()));
                    });
                }
            });
    }
}

function showMap(id) {
    var current = $("#" + id).val();
    if ($("#" + id + "_map").html() == "test") {
        $("#" + id + "_map").html("<iframe src='GoogleMap.aspx?current=" + current + "&targetid=" + id + "' width='600px' height='400px' marginwidth=0 marginheight=0></iframe>");
        $("#" + id + "_map").show();
    }
    else {
        $("#" + id + "_map").html("test");
        $("#" + id + "_map").hide();
    }

}

function showBaiduMap(id) {
    var current = $("#" + id).val();
    if ($("#" + id + "_map").html() == "test") {
        $("#" + id + "_map").html("<iframe src='BaiduMap.aspx?current=" + current + "&targetid=" + id + "' width='600px' height='400px' marginwidth=0 marginheight=0></iframe>");
        $("#" + id + "_map").show();
    }
    else {
        $("#" + id + "_map").html("test");
        $("#" + id + "_map").hide();
    }

}

//获取多级联动
function ajaxGetMoreSelect(selectid, id, level, divid, inputno, keyvalue) {

    var count = $("#" + selectid + "_count").val();
    level = level + 1;
    for (var i = level; i <= count; i++) {
        $("#" + selectid + i).remove();
    }

    count = level;
    //alert("/ajaxmoreselect.aspx?" + Math.random() + "&keyno=" + id + "&inputno=" + inputno + "&KeyValue=" + keyvalue);
    jQuery.get("../ajaxmoreselect.aspx?" + Math.random() + "&keyno=" + id + "&inputno=" + inputno + "&KeyValue=" + keyvalue, {
        Action: "post",
        Name: "lulu"
    },
    function (data, textStatus) {

        if (data != null) {
            var optionString = "";

            $(data).find("Item").each(function (i) {

                optionString = optionString + "<option value=\"" + $(this).children("OptionValue").text() + "\">" + $(this).children("OptionText").text() + "</option>";
            });

            if (optionString != "") {
                optionString = "<option value=''>(全部)</option>" + optionString;
                count++;
                var $select = "<select id='" + selectid + count + "' name='" + selectid + "' onchange=\"ajaxGetMoreSelect('" + selectid + "',$('#" + selectid + count + "').val()," + count + ",'" + divid + "','" + inputno + "','" + keyvalue + "');\">" + optionString + "</select>";
                //把创建好的加载到div中
                //alert($select);
                $("#" + divid).append($select);

                $("#" + selectid + "_count").val(count)

            }

        }
    });
}

function loadSelectMoreText(divId, value, inputNo) {
    jQuery.get("../loadselectmoreText.aspx?" + Math.random() + "&value=" + escape(value) + "&inputNo=" + escape(inputNo), {
        Action: "get",
        Name: "lulu"
    },
    function (data, textStatus) {

        if (data != null) {

            var str = "";
            $(data).find("Item").each(function (i) {


                if (str == "") {
                    str = $(this).children("OptionText").text();
                }
                else {
                    str = str + "-" + $(this).children("OptionText").text();
                }
            });

            $("#" + divId).html(str);

        }
    });
}

function GetModule(ModelId, paras) {

    $.ajax({
        type: "POST",
        url: "../ReadHandler.ashx?ModelName=" + ModelId + "&" + Math.random() + "&" + paras,
        success: function (responseText) {
            var data = eval("(" + responseText + ")");

            if (data != null) {



                if (data.Message != "" && data.Message != null) {
                    alert(unescape(data.Message));
                }
                if (data.RedirectUrl != "" && data.RedirectUrl != null) {
                    document.location.href = data.RedirectUrl;
                }



            }

        },
        beforeSend: function (data) {


        }
    });
}


function GetModuleEvent(ModelId, paras, ef, sf) {

    $.ajax({
        type: "POST",
        url: "../ReadHandler.ashx?ModelName=" + ModelId + "&" + Math.random() + "&" + paras,
        success: function (responseText) {
            var data = eval("(" + responseText + ")");

            if (data != null) {
                if (data.Message != "" && data.Message != null) {
                    alert(unescape(data.Message));
                }
                if (data.RedirectUrl != "" && data.RedirectUrl != null) {
                    document.location.href = data.RedirectUrl;
                }
                if (data.Code == -1) {





                    if (ef != null) {
                        setTimeout(ef, 10);
                    }

                }
                else {



                    if (sf != null) {
                        setTimeout(sf, 10);
                    }

                }
            }


        },
        beforeSend: function (data) {


        }
    });
}


function GetCookieValue(cookieKey) {
    //获取cookie字符串 
    var strCookie = document.cookie;
    //将多cookie切割为多个名/值对 
    var arrCookie = strCookie.split("; ");
    var cookieValue;
    //遍历cookie数组，处理每个cookie对 
    for (var i = 0; i < arrCookie.length; i++) {
        var arr = arrCookie[i].split("=");
        if (cookieKey == arr[0]) {
            cookieValue = arr[1];
            break;
        }
    }
    return cookieValue;
}

function CheckForm(inputid) {
    $.ajax({
        type: "POST",
        url: "checkform.aspx?InputId=" + inputid + "&" + Math.random(),
        data: { postdata: $("#" + inputid).val() },
        success: function (responseText) {
            var data = eval("(" + responseText + ")");

            if (data != null) {



                if (data.Code == -1) {

                    $("#" + inputid).css("border-color", "red");
                    $("#" + inputid).css("border-width", "1px");
                    if ($("#" + inputid + "_warn").length > 0) {
                        $("#" + inputid + "_warn").html("*" + data.Message);
                        $("#" + inputid + "_warn").css("display", "");
                    }
                    else {
                        var X = $("#" + inputid).position().top - 3;
                        var Y = $("#" + inputid).position().left + $("#" + inputid).width();
                        $("#" + inputid).parent().append("<font color=red id='" + inputid + "_warn' style='top:" + X + "px;left:" + Y + "px;position: absolute;padding: 0px 10px;line-height: 23px;border-top-left-radius: 5px;border-top-right-radius: 5px;border-bottom-right-radius: 5px;border-bottom-left-radius: 5px;margin: 5px;background-color: white;border-width: 1px;border-color: #c0c0c0;border-style: solid;margin-left: 9px;'>*" + data.Message + "</font>");
                    }

                }
                else {
                    $("#" + inputid + "_warn").hide();
                    $("#" + inputid).css("border-color", "");
                    $("#" + inputid).css("border-width", "");
                }



            }

        },
        beforeSend: function (data) {


        }
    });
}

var editorid = null;
function seteditid(id) {
    editorid = id;
}
function clipboard(evt) {
    //for chrome
    //var self = this

    if (editorid == null) {
        return;
    }
    var clipboardData = evt.clipboardData;
    for (var i = 0; i < clipboardData.items.length; i++) {
        var item = clipboardData.items[i];
        if (item.kind == 'file' && item.type.match(/^image\//i)) {
            //blob就是剪贴板中的二进制图片数据
            var blob = item.getAsFile(), reader = new FileReader();
            //定义fileReader读取完数据后的回调
            reader.onload = function () {
                clipboardfile = event.target.result;
                var sHtml = '<img src="' + event.target.result + '">'; //result应该是base64编码后的图片

                KindEditor.insertHtml('#' + editorid, sHtml);
            }
            reader.readAsDataURL(blob); //用fileReader读取二进制图片，完成后会调用上面定义的回调函数
        }
    }
}

