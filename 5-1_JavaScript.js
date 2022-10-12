//削除と編集ボタンの宣言（記録一覧）
const displayID = document.getElementsByClassName("displayID"); 
const deleteButton = document.getElementsByClassName("deleteButton");
const editButton = document.getElementsByClassName("editButton");

//削除フォームの宣言（送信フォーム）
const deleteNumber = document.getElementById("delete_number");
const deletePassword = document.getElementById("delete_password");

//編集フォームの宣言（送信フォーム）
const editNumber = document.getElementById("edit_number");
const editPassword = document.getElementById("edit_password");


//削除処理
//2. 削除ボタン ➔　入力ダイアログを出す
    function disp(){
    let displayDelPW = "";
        var deletePW = window.prompt("パスワードをご記入お願いします。", "");
        if(deletePW !=null && deletePW !=""){
            displayDelPW = deletePW;
            deletePassword.value = displayDelPW;
            //document.form2.submit();
        }
    }

//1. 削除ボタンを押して、データを削除フォームで表示
    let displayDelID = "";
    //データ番号を削除フォームにセットする
    let updateDeleteNumber = (clickObj) =>{
        
        let btnDel = clickObj.target.dataset.deleteNumber;
        displayDelID = btnDel;
        deleteNumber.value = displayDelID;
        document.form2.submit();
    }
    
    for(let i=0; i<deleteButton.length; i++){
    deleteButton[i].addEventListener("click", updateDeleteNumber, false)
    }
    
//編集処理
//2. 編集ボタン ➔　入力ダイアログを出す
    function disp2(){
    let displayEditPW = "";
        var editPW = window.prompt("パスワードをご記入お願いします。", "");
        if(editPW !=null && editPW !=""){
            displayEditPW = editPW;
            editPassword.value = displayEditPW;
        }
    }


//1. 編集ボタンを押して、データを編集フォームで表示
    let displayEditID = "";
    //データ番号を削除フォームにセットする
    let updateEditNumber = (clickObj) =>{
    
        let btnEdit = clickObj.target.dataset.editId;
        displayEditID = btnEdit;
        editNumber.value = displayEditID;
        document.form3.submit();
    }
    
    for(let i=0; i<editButton.length; i++){
    editButton[i].addEventListener("click", updateEditNumber, false)
    }


