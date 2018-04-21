import 'bootstrap/dist/css/bootstrap.min.css';
import './css/module.css'

import $ from 'jquery';

$.post("http://192.168.1.8/C0001G0001", {"Accept": "*/*"}, (data) => {
    console.log(data)
});