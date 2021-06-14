const cardDelete = document.querySelector(".deleteButton");

console.log(cardDelete);

function deleteCardList() {
    $(".deleteButton").on("click", function () {
        const inputVal = $(this).prev().prev().val();

        for (let i = 0; i < lists.length; i++) {
            console.log(lists[i].id);
        }
    });
}

deleteCardList();
