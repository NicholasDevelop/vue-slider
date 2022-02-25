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
        prevFunction: function() {
            if( this.currentIndex > 0 ){
                this.currentIndex--;
            }else{
                this.currentIndex = this.slides.length - 1;
            }
        },
        nextFunction: function() {
            if( this.currentIndex < this.slides.length - 1 ){
                this.currentIndex++;
            }else{
                this.currentIndex = 0;
            }
        }
    }
})