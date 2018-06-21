import $ from 'jquery';

export function cardSetup() {
  function hoverIn(){
    $(this).addClass('hover');
  }
  function hoverOut(){
    $(this).removeClass('hover')
  }
  $('.segment').hover( hoverIn, hoverOut )
  console.log('cards set up')
}
