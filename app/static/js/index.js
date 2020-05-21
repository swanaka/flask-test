const submit = () => {
    const a = $('#a').val();
    const b = $('#b').val();
    const c = $('#c').val();

    const inputData = {a: a, b: b, c: c}
    $.ajax({
        url: './calculate',
        type: 'POST',
        data: JSON.stringify(inputData),
        contentType: 'application/json',
        dataType: 'json',
    }).done((data) => {
        const json = JSON.stringify(data)
        $('iframe').contents().find('#input_data').val(json)
    }).fail((data) => {
        console.log(data);
    });
}