const music = new Audio('Audio/1.mp3','Audio/2.mp3','Audio/4.mp3','Audio/3.mp3','Audio/11.mp3');
// const music1 = new Audio('Audio/night-changes.mp3')
// music.play();


const songs =[
{
    id: 1,
    songName:` On My Way <br>
    <div class="subtitle">Alan Walker</div>`,
    poster:"images/01.jpg"
},
{
    id: 2,
    songName:` Night Changes <br>
    <div class="subtitle">One Direction</div>`,
    poster:"images/2.jpeg"
},
{
    id: 3,
    songName:` chemtrails over the country club <br>
    <div class="subtitle">lana del ray</div>`,
    poster:"images/3.jpg"
},
{
    id: 4,
    songName:` Mercy <br>
    <div class="subtitle">Shawn Mendes</div>`,
    poster:"images/4.webp"
},
{
    id: 5,
    songName:` Arcade  <br>
    <div class="subtitle">Duncan Laurence</div>`,
    poster:"images/5.jpg"
},
{
    id: 6,
    songName:` Dusk Till Dawn <br>
    <div class="subtitle">ZAYN</div>`,
    poster:"images/6.jpg"
},
{
    id: 7,
    songName:` Another Love  <br>
    <div class="subtitle">Tom Odell</div>`,
    poster:"images/7.jpeg"
},
{
    id: 8,
    songName:` Somebody That I Used to Know <br>
    <div class="subtitle">Kimbra & Gotye</div>`,
    poster:"images/8.jpg"
},
{
    id: 9,
    songName:` Treat You Better <br>
    <div class="subtitle">Shawn Mendes</div>`,
    poster:"images/9.jpg"
},
{
    id: 10,
    songName:` What If I Told You That I Love You <br>
    <div class="subtitle">Ali Gatie</div>`,
    poster:"images/01.jpg"
},
{
    id: 11,
    songName:` Story of My Life <br>
    <div class="subtitle">One Direction</div>`,
    poster:"images/11.jpeg"
},
{
    id: 12,
    songName:` What If I Told You That I Love You <br>
    <div class="subtitle">Ali Gatie</div>`,
    poster:"images/01.jpg"
},
{
    id: 13,
    songName:` What If I Told You That I Love You <br>
    <div class="subtitle">Ali Gatie</div>`,
    poster:"images/01.jpg"
},
{
    id: 14,
    songName:` What If I Told You That I Love You <br>
    <div class="subtitle">Ali Gatie</div>`,
    poster:"images/01.jpg"
},
{
    id: 15,
    songName:` What If I Told You That I Love You <br>
    <div class="subtitle">Ali Gatie</div>`,
    poster:"images/01.jpg"
},
{
    id: 16,
    songName:` What If I Told You That I Love You <br>
    <div class="subtitle">Ali Gatie</div>`,
    poster:"images/01.jpg"
},
{
    id: 17,
    songName:` What If I Told You That I Love You <br>
    <div class="subtitle">Ali Gatie</div>`,
    poster:"images/01.jpg"
},
{
    id: 18,
    songName:` What If I Told You That I Love You <br>
    <div class="subtitle">Ali Gatie</div>`,
    poster:"images/01.jpg"
},
{
    id: 19,
    songName:` What If I Told You That I Love You <br>
    <div class="subtitle">Ali Gatie</div>`,
    poster:"images/01.jpg"
},
{
    id: 21,
    songName:` What If I Told You That I Love You <br>
    <div class="subtitle">Ali Gatie</div>`,
    poster:"images/01.jpg"
},
{
    id: 22,
    songName:` What If I Told You That I Love You <br>
    <div class="subtitle">Ali Gatie</div>`,
    poster:"images/01.jpg"
},
{
    id: 23,
    songName:` What If I Told You That I Love You <br>
    <div class="subtitle">Ali Gatie</div>`,
    poster:"images/01.jpg"
},
{
    id: 24,
    songName:` What If I Told You That I Love You <br>
    <div class="subtitle">Ali Gatie</div>`,
    poster:"images/01.jpg"
},
{
    id: 25,
    songName:` What If I Told You That I Love You <br>
    <div class="subtitle">Ali Gatie</div>`,
    poster:"images/01.jpg"
},
{
    id: 26,
    songName:` What If I Told You That I Love You <br>
    <div class="subtitle">Ali Gatie</div>`,
    poster:"images/01.jpg"
},
{
    id: 27,
    songName:` What If I Told You That I Love You <br>
    <div class="subtitle">Ali Gatie</div>`,
    poster:"images/01.jpg"
},
{
    id: 28,
    songName:` What If I Told You That I Love You <br>
    <div class="subtitle">Ali Gatie</div>`,
    poster:"images/01.jpg"
},
{
    id: 29,
    songName:` What If I Told You That I Love You <br>
    <div class="subtitle">Ali Gatie</div>`,
    poster:"images/01.jpg"
},
]




Array.from(document.getElementsByClassName('songItem')).forEach((e,i)=>{
    e.getElementsByTagName('img')[0].src = songs[i].poster;
    e.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;

});

let masterPlay = document.getElementById('masterPlay');
let wave = document.getElementById('wave');

masterPlay.addEventListener('click', () => {
    if (music.paused || music.currentTime <= 0) {
        music.play();
        wave.classList.add('active1');
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
    } else {
        music.pause();
        wave.classList.remove('active1');
        masterPlay.classList.add('bi-play-fill');
        masterPlay.classList.remove('bi-pause-fill');
    }   
    
});

const makeAllplays = () =>{
    Array.from(document.getElementsByClassName('playListPlay')).forEach((el)=>{
        el.classList.add('bi-play-fill');
        el.classList.remove('bi-pause-circle');
    })
}
const makeAllBackground = () =>{
    Array.from(document.getElementsByClassName('songItem')).forEach((el)=>{
        el.style.background ='(105, 105, 105,.0)';
    })
}


let index = 0;
let poster_master_play = document.getElementById('poster_master_play');
let download_music = document.getElementById('download_music');
let title = document.getElementById('title');
Array.from(document.getElementsByClassName('playlistPlay')).forEach((e)=>{
    e.addEventListener('click',(el)=>{
        index = el.target.id;
        // console.log(index);
        music.src = `Audio/${index}.mp3`;
        // poster_master_play.src = `img/${index}.jpg`;
        music.play();
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
        download_music.href = `Audio/${index}.mp3`;

        let songTitles =songs.filter((els)=>{
            return els.id == index;
        });
        songTitles.forEach(elss =>{
            let {songName,poster}= elss;
            title.innerHTML = songName;
            poster_master_play.src = poster;
            download_music.setAttribute('download', songName);
        });

        makeAllBackground();
        Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = "(105, 105, 105,.1)";
        makeAllplays();
        el.target.classList.remove('bi-play-fill');
        el.target.classList.add('bi-pause-circle');
        wave.classList.add('active1');
    });
})


let currentStart =document.getElementById('currentStart');
let currentEnd =document.getElementById('currentEnd');
let seek =document.getElementById('seek');
let bar2 =document.getElementById('bar2');
let dot =document.getElementsByClassName('dot')[0];


music.addEventListener('timeupdate', ()=>{
    let music_curr = music.currentTime;
    let music_dur = music.duration;
    // console.log(music_dur);
    let min1 = Math.floor(music_dur / 60);
    let sec1 = Math.floor(music_dur % 60);
    if (sec1 < 10){
        sec1 = `0${sec1}`;
    }
    currentEnd.innerText = `${min1}.${sec1}`;

    let min2 = Math.floor(music_curr / 60);
    let sec2 = Math.floor(music_curr % 60);
    if (sec2 < 10){
        sec2 = `0${sec2}`;
    }

    currentStart.innerText = `${min2}.${sec2}`;


    let progressBar = parseInt((music_curr/music_dur ) * 100);
    seek.value = progressBar;
    let seekbar = seek.value;
    bar2.style.width = `${seekbar}%`;
    dot.style.left =`${seekbar}%`;

});

seek.addEventListener('change', ()=>{
    music.currentTime = seek.value * music.duration / 100;
})

let vol_icon =document.getElementById('vol_icon');
let vol =document.getElementById('vol');
let vol_bar =document.getElementsByClassName('vol_bar')[0];
let vol_dot =document.getElementById('vol_dot');

vol.addEventListener('change',()=>{
    if(vol.value == 0){
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.add('bi-volume-off-fill');
    }
    if(vol.value > 0){
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.add('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-off-fill');
    }
    if (vol.value > 50){
        vol_icon.classList.add('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-off-fill');
    }
    let vol_a = vol.value;
    vol_bar.style.width =`${vol_a}%`;
    vol_dot.style.left =`${vol_a}%`;
    music.volume = vol_a /100;
})
// index++;

let back =document.getElementById('back');
let next =document.getElementById('next');
    
back.addEventListener('click',()=>{
    index -= 1;
    if(index < 1){
        index =Array.from(document.getElementsByClassName('songItem')).length;

    }
    music.src = `audio/${index}.mp3`;
        poster_master_play.src = `img/${index}.jpg`;
        music.play();
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');

        let songTitles =songs.filter((els)=>{
            return els.id == index;
        });
        songTitles.forEach(elss =>{
            let {songName,poster}= elss;
            title.innerHTML = songName;
            poster_master_play.src = poster;
        });

        makeAllBackground();
        Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = "(105, 105, 105,.1)";
        makeAllplays();
        el.target.classList.remove('bi-play-fill');
        el.target.classList.add('bi-pause-circle');
        wave.classList.add('active1');
})

next.addEventListener('click',()=>{
    index++;
    if(index >Array.from(document.getElementsByClassName('songItem')).length){
        index = 1;
    }
    music.src = `audio/${index}.mp3`;
        poster_master_play.src = `img/${index}.jpg`;
        music.play();
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');

        let songTitles =songs.filter((els)=>{
            return els.id == index;
        });
        songTitles.forEach(elss =>{
            let {songName,poster}= elss;
            title.innerHTML = songName;
            poster_master_play.src = poster;
        });

        makeAllBackground();
        Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = "(105, 105, 105,.1)";
        makeAllplays();
        el.target.classList.remove('bi-play-fill');
        el.target.classList.add('bi-pause-circle');
        wave.classList.add('active1');
});







/*scrolls for song and artists*/

let pop_song_left =document.getElementById('pop_song_left');
let pop_song_right =document.getElementById('pop_song_right');

let pop_song =document.getElementsByClassName('pop_song')[0];

pop_song_right.addEventListener('click',()=>{
    pop_song.scrollLeft += 310;
});
pop_song_left.addEventListener('click',()=>{
    pop_song.scrollLeft -= 310;
});

let pop_art_left = document.getElementById('pop_art_left');
let pop_art_right = document.getElementById('pop_art_right');
let Artist_bx = document.getElementsByClassName('Artist_bx')[0];

pop_art_right.addEventListener('click',()=>{
    Artist_bx.scrollLeft += 310;
});
pop_art_left.addEventListener('click',()=>{
    Artist_bx.scrollLeft -= 310;
});


let shuffle = document.getElementsByClassName('shuffle')[0];

shuffle.addEventListener('click',()=>{
    let a = shuffle.innerHTML;

    switch(a){
        case"next":
        shuffle.classList.add('bi-arrow-repeat');
        shuffle.classList.remove('bi-music-note-beamed');
        shuffle.classList.remove('bi-shuffle');
        shuffle.innerHTML = 'repeat';
        break;

        case"repeat":
        shuffle.classList.remove('bi-arrow-repeat');
        shuffle.classList.remove('bi-music-note-beamed');
        shuffle.classList.add('bi-shuffle');
        shuffle.innerHTML = 'random';
        break;
        
        case"random":
        shuffle.classList.remove('bi-arrow-repeat');
        shuffle.classList.add('bi-music-note-beamed');
        shuffle.classList.remove('bi-shuffle');
        shuffle.innerHTML = 'next';
        break;
    }

})










