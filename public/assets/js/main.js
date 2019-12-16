// $(document).on('ready', () => {
    var url = window.location.search;
    let $form = $('#burger-form')
    let $burgerButton = $('#submit-burger')
    let $burgerName = $('#new-burger')
    let burgerId;
    
    if (url.indexOf("?burger_id=") !== -1) {
        burgerId = url.split("=")[1];
        getPostData(burgerId);
    }
    let API = {
        saveBurger: function (burger) {
            return $.ajax({
                headers: {
                    "Content-Type": "application/json"
                },
                type: "POST",
                url: "api/add",
                data: JSON.stringify(burger)
            });
        },
        putBurger: function (id) {
            return $.ajax({
                url: "api/update/" + id,
                type: "PUT"
            });
        },
        deleteBurger: function (id) {
            return $.ajax({
                url: "api/remove/" + id,
                type: "DELETE"
            });
        }
    };
    
    let addBurger = (event) => {
        // event.preventDefault();
        var burger = {
            burger_name: $burgerName.val().trim(),
            devoured: false
        };
        API.saveBurger(burger).then(function () {
            console.log('submitted')
        });
        console.log('this ' + burger);
    };
    let devour = function(e) {
        let idToDelete = $(this)
        .parent()
        .attr("data-id");
        console.log('devour' + idToDelete)
        API.putBurger(idToDelete).then(function () {
            // refreshExamples();
        });
    }
    let removeBurger = function () {
        let idToDelete = $(this)
        .parent()
        .attr("data-id");
        API.deleteBurger(idToDelete).then(function () {
            // refreshExamples();
        });
    }
    $('.remove-burger').on('click', removeBurger)
    $('.eat-burger').click(devour)
    $burgerButton.on("click", addBurger)
    // });