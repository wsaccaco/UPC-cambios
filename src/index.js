import 'bootstrap/dist/css/bootstrap.min.css';
import './css/module.css'

import $ from 'jquery';
window.$ = window.jQuery = $;
import 'bootstrap';



$('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
})


// [16:42, 21/4/2018] Ivan Velarde: https://5808f14b.ngrok.io/C0001G0001
//     [16:42, 21/4/2018] Ivan Velarde: https://5808f14b.ngrok.io/C0002G0001
//     [16:50, 21/4/2018] Ivan Velarde: https://5808f14b.ngrok.io/C0001G0002
//     [16:50, 21/4/2018] Ivan Velarde: https://5808f14b.ngrok.io/C0002G0002

$.post("https://5808f14b.ngrok.io/C0001G0001", {"Accept": "*/*"}, (data) => {
    console.log(data)
});

$.get("https://5808f14b.ngrok.io/C0002G0001", {"Accept": "*/*"}, (data) => {
    console.log(data)
});

$.post("https://5808f14b.ngrok.io/C0001G0002", {"Accept": "*/*"}, (data) => {
    console.log(data)
});

$.get("https://5808f14b.ngrok.io/C0002G0002", {"Accept": "*/*"}, (data) => {
    console.log(data)
});

