/*****************************************************************************
 *  ���� Machine Group
 *
 *  Author: Sergey Kerimov
 *  e-mail: serker72@gmail.com
 *****************************************************************************/

// �������� �������� ���������� �� URL ������ �� ������� ��������
$.extend({
    getUrlVars: function(){
        var vars = [], hash;
        var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
        for(var i = 0; i < hashes.length; i++) {
            hash = hashes[i].split('=');
            vars.push(hash[0]);
            vars[hash[0]] = hash[1];
        }
        return vars;
    },
    getUrlVar: function(name){
        return $.getUrlVars()[name];
    }
});

function OpenCallDialog() {
    $("#callDialog").show();
    return false;
}

function OpenPostDialog() {
    $("#postDialog").show();
    return false;
}

// �������, ����������� ��� �������� ��������
$(document).ready(function(){
    $("#callDialogModal_close").bind('click', function() {
        $("#callDialog").hide();
    });
            
    $("#postDialogModal_close").bind('click', function() {
        $("#postDialog").hide();
    });
});
