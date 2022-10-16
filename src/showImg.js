import './App.css';
import React from 'react';

window.onload = function(){
    let buttons = document.querySelectorAll('.show-image');

    buttons.forEach(function(btn){
        btn.addEventListener('click', function(){
            document.getElementById('open_img').innerHTML = '';

            let link = this.getAttribute('data-img');
            let img = document.createElement('img');

            img.src = link;

            document.getElementById('open_img').append(img);
        });
    });
};