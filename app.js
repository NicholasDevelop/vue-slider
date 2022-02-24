const app = new Vue ({
    el: '#app',
    data: {
        slides: [
            {
                items : 'img/01.jpg',
                title : 'Svezia',
                text : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
            },
            {
                items : 'img/02.jpg',
                title : 'Svizzera',
                text : 'Lorem ipsum',
            },
            {
                items : 'img/03.jpg',
                title : 'Gran Bretagna',
                text : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
            },
            {
                items : 'img/04.jpg',
                title : 'Germania',
                text :'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
            },
            {
                items : 'img/05.jpg',
                title : 'Paradise',
                text : 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
            }
        ],
        currentIndex: 0,
    },
    methods: {

    }
})


images[currentIndex].classList.add('active');
mainItemImg.src = slides[currentIndex].items;
photoTitle.innerHTML = slides[currentIndex].title;
photoDescription.innerHTML = slides[currentIndex].text;

const prev = document.querySelector('.prev');
const next = document.querySelector('.next');


prev.addEventListener('click', function(){
    if( currentIndex > 0 ){
        images[currentIndex].classList.remove('active');
        currentIndex--;
        images[currentIndex].classList.add('active');
    }else{
        images[currentIndex].classList.remove('active');
        currentIndex = slides.length - 1;
        images[currentIndex].classList.add('active');
    }
    mainItemImg.src = slides[currentIndex].items;
    photoTitle.innerHTML = slides[currentIndex].title;
    photoDescription.innerHTML = slides[currentIndex].text;
})

next.addEventListener('click', function(){
    if( currentIndex < slides.length - 1 ){
        images[currentIndex].classList.remove('active');
        currentIndex++;
        images[currentIndex].classList.add('active');
    }else{
        images[currentIndex].classList.remove('active');
        currentIndex = 0;
        images[currentIndex].classList.add('active');
    }
    mainItemImg.src = slides[currentIndex].items;
    photoTitle.innerHTML = slides[currentIndex].title;
    photoDescription.innerHTML = slides[currentIndex].text;
})