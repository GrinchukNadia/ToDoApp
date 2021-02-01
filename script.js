$(function(){
    var $list_container = $('.list_container');
    var $task_input = $('.task_input');
    var $btn_add = $(".button_add");
//------------создание карточки с введеным текстом-----------------------------------------------------------------------------------
    function newCard(){
        $list_container.append('<li class="toDo__card"><span class="checkbox"></span><h4>' + $task_input.val() + '</h4><button class="toDo-remove-btn"><img src="img/noun_cancel_1271710-01.png" alt=""></button></li>');
            $task_input.val("");
    }
//-----------функция удаления карточки-----------------------------------------------------------------------------------------------
    function removeCard(){
        $(".toDo-remove-btn").on("click", function(){
        $(this).parent().remove();
        });
    }
//------------чекбоксы, отметить задание выполненым----------------------------------------------------------------------------------
    function checkUncheck(){
        $("ul").on('click', '.toDo__card',  function(){
            $(this).appendTo("#list2");
        });
    }
//-----------функция добавления карточки при нажатии на enter и на кнопку------------------------------------------------------------
    $task_input.on("keydown", function(event) {
        if (event.keyCode === 13 && $task_input.val().length >=3 ) {
            newCard();   
        }
        $btn_add.on('click', function(){
        if(!$task_input.val()){
            return false;
        }
        newCard();
        removeCard();
        });
        removeCard();
    });
    checkUncheck();
//------------перемещение карточек в контейнере (сортировка)-----------------------------------------------------------------
    $("#list1, #list2").sortable({
        connectWith: "ul",
        placeholder: "placeholder",
        cursor: "grabbing",
        delay: 100,
        revert: true
    });

});