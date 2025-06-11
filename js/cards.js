export function createCard(cardData){
    const $template = $($("#card-template").html());
    const cardId = `card-${cardData.id}`;
   
    $template.attr('data-id', cardId);
    $template.find('.card__title').text(cardData.title);
    $template.find('.card__description').text(cardData.description);
    $template.find('.card__priority').text(cardData.priority);
    $template.find('.card__status').text(cardData.status);
    $template.find('.card__checkbox').prop('checked', cardData.completed);

    $template.find('.card__edit').on('click', function () {
        editCard(cardData.id);
      });

    $template.find('.card__delete').on('click', function () {
        deleteCard(cardData.id);
      });

    $template.find('.card__checkbox').on('change', function (){
       toggleCompletion(cardData.id, this.checked); 
    });

    $("#card-container").append($template);
}

function getCardById(cardId) {
    return $(`.card[data-id="card-${cardId}"]`);
}

function editCard(cardId) {
    const $card = getCardById(cardId)
    alert("Editar carta: " + $card.find(""))
    //todo acciones pendientes para completar el formulario
}

function deleteCard(cardId) {
    getCardById(cardId).remove();
}

function toggleCompletion(cardId, isCompleted) {
    const $card = getCardById(cardId);
    $card.find('.card__status').text(isCompleted ? 'Completado' : 'Pendiente');
}