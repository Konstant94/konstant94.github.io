$(function() {

	$('#years').val('1994') 



});

            // Функция injectSelect принимает объект select и ассоциативный массив.
            // Select очищается, затем в него добавляются элементы option,
            // значение которых устанавливают ключи массива, а текст — значения массива.
            // Ничего не возвращает.
        function injectSelect (sel, rowsObject) {
            var opt, x;
            sel.innerHTML = "";
            for (x in rowsObject) {
                opt = document.createElement("option");
                opt.value = x;
                opt.innerHTML = rowsObject[x];
                sel.appendChild(opt);
            }
        }
        
            // Функция makeNumbersObject принимает два числа. Возвращает ассоциативный массив
            // ряда чисел от меньшего к большему, включительно. 
        
        function makeNumbersObject (from, to) {
            var result = {}, x;
            if(from > to) { // Если from меньше to, поменять их значения друг на друга.
                var z = from;
                from = to;
                to = z;
            }
            for (x = from; x <= to; x++) {
                result[x] = x;
            }
            return result
        }
     // Наполняем месяца
        injectSelect(document.getElementById("years"), makeNumbersObject(1984, 2012)); // Наполняем года

$(document).ready(function(){
  $('body').append('<a href="#" id="go-top" title="Вверх">Вверх</a>');
});

$(function() {
 $.fn.scrollToTop = function() {
  $(this).hide().removeAttr("href");
  if ($(window).scrollTop() >= "250") $(this).fadeIn("slow")
  var scrollDiv = $(this);
  $(window).scroll(function() {
   if ($(window).scrollTop() <= "250") $(scrollDiv).fadeOut("slow")
   else $(scrollDiv).fadeIn("slow")
  });
  $(this).click(function() {
   $("html, body").animate({scrollTop: 0}, "slow")
  })
 }
});
// In your Javascript (external .js resource or <script> tag)


$(function() {
 $("#go-top").scrollToTop();
});
$(function() {
	$("select").niceSelect();
	
})
