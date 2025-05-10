const qr = new QRious({
    element: document.getElementById('qr-code'),
    size: 250,
});

$('input').on("keypress", function(e) {
    const value = $('input').val();
    if (e.key === 'Enter') {
        if (value.trim() !== "") {
            qr.value = value;
            const dataURL = qr.toDataURL();
            $('canvas').removeClass('hide');
            $('#download')
                .attr('href', dataURL)
                .attr('download', value + '.png');
        
            $('h3').text('QR code generated');
            $('h3').removeClass('error');
            $('h3').addClass('validate');
            $('h3').removeClass('hide');
        } else {
            $('h3').removeClass('validate');
            $('h3').addClass('error');
            $('h3').text('Cannot generate empty text !');
            $('h3').removeClass('hide');
            $('canvas').addClass('hide');
        }
    }
});