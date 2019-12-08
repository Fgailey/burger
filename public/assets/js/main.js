$(document).on('ready', ()=>{
    var url = window.location.search;
    let $form = $('#burger-form')
    let $burgerName = $('#new-burger')
    let burgerId;
    $('.eat-burger').click(devour)

    let devour = (e)=>{
        console.log('devour')
    }
    function insertTodo(event) {
        event.preventDefault();
        var burger = {
            burger_name: $burgerName.val().trim(),
        };
        $.post("/api/add", burger, getBurgers);
        $burgerName.val("");
    
    }

    if (url.indexOf("?burger_id=") !== -1) {
        burgerId = url.split("=")[1];
        getPostData(burgerId);
      }


    $($form).on("submit", function handleFormSubmit(event) {
        event.preventDefault();
        // Wont submit the post if we are missing a body or a title
        if (!$burgerName.val().trim() || !bodyInput.val().trim()) {
          return;
        }
        var newBurg = {
          burger_name: $burgerName.val().trim()
        };
        var burger = {
            burger_name: $burgerName.val().trim(),
        };
        $.post("/api/add", burger, getBurgers);
        $burgerName.val("");
    
        console.log(newBurg);
      });
});