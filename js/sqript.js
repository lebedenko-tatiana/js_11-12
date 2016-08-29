
$(function() {

  $('.carousel__prev').carousel(); 
  $('.carousel__next').carousel(); 

});



$(function () {
  var html = $('#hw').html();
  var data = 
    {
     fio: 'Лебеденко Татьяна Валериевна',
     imgCaption: 'Студентка курса GoFrontend Online#2',
     listHead: 'Хочу учить фронтенд, потому что:',
     list: [
	      'учиться и постоянно приобретать новые знания - это здорово', 
	      'фронтенд - это перспективное web-направление', 
	      'обучение по данному курсу расширит сферу моих профессиональных знаний и навыков'
	   ],
     phone: 'Мой контактный телефон',
     phoneNum: '+380509158346',
     accountFB: 'Мой аккаунт в ФБ',
     accountHref: 'http://facebook.com',
     feedBack: 'Мой фидбек',
     feedList: [
		'Это первая попытка написания html-кода',
		'А вот забор построить я не смогу... '
		]
    }

  var content = tmpl(html, data);
  $('body').append(content);

});
