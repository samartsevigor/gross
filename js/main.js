var slider1 = new Swiper('.slider__main', {
  speed:800,
  effect: 'cube', // 'cube', 'fade', 'coverflow',
  cubeEffect: {
    shadow: true,
    slideShadows: true,
    shadowOffset: 40,
    shadowScale: 0.94,
  },
  grabCursor: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
})

var slider2 = new Swiper('.vacancies-slider', {
  speed:800,
  slidesPerView: 4,
  spaceBetween: 30,
  grabCursor: true,
  navigation: {
    nextEl: '.next-l',
    prevEl: '.prev-l',
  }
})


ymaps.ready(function () {
  var myMap = new ymaps.Map('map', {
      center: [55.751574, 37.573856],
      zoom: 12
    }, {
      searchControlProvider: 'yandex#search'
    }),

    // Создаём макет содержимого.
    MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
      '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
    ),

    myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
      hintContent: 'Собственный значок метки',
      balloonContent: 'Это красивая метка'
    }, {
      // Опции.
      // Необходимо указать данный тип макета.
      iconLayout: 'default#image',
      // Своё изображение иконки метки.
      iconImageHref: './images/location.svg',
      // Размеры метки.
      iconImageSize: [30, 42],
      // Смещение левого верхнего угла иконки относительно
      // её "ножки" (точки привязки).
      iconImageOffset: [-5, -38]
    })

  ButtonLayout = ymaps.templateLayoutFactory.createClass([
    '<div title="{{ data.title }}" class="my-button ',
    '{% if state.size == "small" %}my-button_small{% endif %}',
    '{% if state.size == "medium" %}my-button_medium{% endif %}',
    '{% if state.size == "large" %}my-button_large{% endif %}',
    '{% if state.selected %} my-button-selected{% endif %}">',
    '<span class="my-button__text">{{ data.content }}</span>',
    '</div>'
  ].join('')),

    button = new ymaps.control.Button({
      data: {
        content: "Жмак-жмак-жмак",
        title: "Жмак-жмак-жмак"
      },
      options: {
        layout: ButtonLayout,
        maxWidth: [170, 190, 220]
      }
    });

  myMap.controls.add(button, {
    right: 5,
    top: 5
  });

  myMap.geoObjects
    .add(myPlacemark)
});