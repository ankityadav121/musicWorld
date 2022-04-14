let previous = document.querySelector('#pre');
let play = document.querySelector('#play');
let next = document.querySelector('#next');
let title = document.querySelector('#title');
let recent_volume= document.querySelector('#volume');
let volume_show = document.querySelector('#volume_show');
let slider = document.querySelector('#duration_slider');
let show_duration = document.querySelector('#show_duration');
let track_image = document.querySelector('#track_image');
let auto_play = document.querySelector('#auto');
let present = document.querySelector('#present');
let total = document.querySelector('#total');
let artist = document.querySelector('#artist');



let timer;
let autoplay = 0;

let index_no = 0;
let Playing_song = false;

//create a audio Element
let track = document.createElement('audio');


//All songs list
let All_song = [
   {
     name: "Mitra Re ",
     path: "music/1.mp3",
     img: "img/img1.jpg",
     singer: "Arijit Singh"
   },
   {
     name: "Halamiti Habibo",
     path: "music/2.mp3",
     img: "img/img2.jpg",
     singer: "Anirudh Ravichand"
   },
   {
     name: "Falak Tu Garaj Tu",
     path: "music/3.mp3",
     img: "img/img3.jpg",
     singer: "Suchetha Basrur"
   },
   {
     name: "Jo Mujhe Deewana Kar De",
     path: "music/4.mp3",
     img: "img/img4.jpg",
     singer: "Tulsi Kumar, Manan Bhardwaj"
   },
   {
     name: "Miss Hairan",
     path: "music/5.mp3",
     img: "img/img5.jpg",
     singer: "Tiger Shroff, Nisa Shetty, A.R. Rahman"
   },
   {
    name: "Main Royaan",
    path: "music/6.mp3",
    img: "img/img6.jpg",
    singer: "Yasser Desai, Tanveer Evan"
  },
  {
    name: "Sulthan",
    path: "music/7.mp3",
    img: "img/img7.jpg",
    singer: "Manish Dinakar"
  },
  {
    name: "Aashiqui Aa Gayi",
    path: "music/8.mp3",
    img: "img/img1.jpg",
    singer: "Arijit Singh"
  },
  {
    name: "Halamithi Habibo",
    path: "music/9.mp3",
    img: "img/img2.jpg",
    singer: "Anirudh Ravichand"
  },
  {
    name: "Randgdaari",
    path: "music/10.mp3",
    img: "img/img3.jpg",
    singer: "Arijit Singh"
  },
  {
    name: "Bekhayali ",
    path: "music/11.mp3",
    img: "img/img4.jpg",
    singer: "Arijit Singh"
  },
  {
    name: "Dekhte Dekhte",
    path: "music/12.mp3",
    img: "img/img5.jpg",
    singer: "Anu Malik"
  },
  {
   name: "Ishq Di Chashni",
   path: "music/13.mp3",
   img: "img/img6.jpg",
   singer: "Bharat"
 },
 {
   name: "Tujhe Kitna Chahein Aur",
   path: "music/14.mp3",
   img: "img/img7.jpg",
   singer: "Mithoon"
 },
 {
  name: "Ishq Tera",
  path: "music/15.mp3",
  img: "img/img1.jpg",
  singer: "Bhushan Kumar"
},
{
  name: "Tu Hai Tu Hai",
  path: "music/16.mp3",
  img: "img/img2.jpg",
  singer: "Anu Malik"
},
{
  name: "Hai Meri Jaan",
  path: "music/17.mp3",
  img: "img/img3.jpg",
  singer: "Sardool Sikander"
},
{
  name: "Jalwanuma",
  path: "music/18.mp3",
  img: "img/img4.jpg",
  singer: "Tara A.R. Rahaman, Pooja Javed"
},
{
  name: "Kuch Baatein",
  path: "music/19.mp3",
  img: "img/img5.jpg",
  singer: "Jubin Nautiyal, Payal Dev"
},
{
 name: "Mai Rahoon Ya Na Rahoon",
 path: "music/20.mp3",
 img: "img/img6.jpg",
 singer: "Emraan Hashmi, Esha Gupta"
},
{
 name: "Dhokha",
 path: "music/21.mp3",
 img: "img/img7.jpg",
 singer: "Arijit Singh"
},
{
 name: "Oo Ya",
 path: "music/22.mp3",
 img: "img/img1.jpg",
 singer: "Gangsta Blac"
},
{
 name: "Sabki Baaratein Aayi",
 path: "music/23.mp3",
 img: "img/img2.jpg",
 singer: "Jaspinder Narula"
},
{
 name: "Tere Bin",
 path: "music/24.mp3",
 img: "img/img3.jpg",
 singer: "Ninja"
},
{
 name: "Soch Na Sake ",
 path: "music/25.mp3",
 img: "img/img4.jpg",
 singer: "Arijit Singh"
},
{
 name: "Tera Naam Dhoka Rakh Dun Naraj Ho Gi Kya",
 path: "music/26.mp3",
 img: "img/img5.jpg",
 singer: "Arijit Singh"
},
{
name: "Teri Aankhon Mein Dikhta Jo Pyaar Mujhe",
path: "music/27.mp3",
img: "img/img6.jpg",
singer: "Neha Kakkar , Darshan Raval"
},
{
name: "Tum Hi Ho Aashiqui 2",
path: "music/28.mp3",
img: "img/img7.jpg",
singer: "Aditya Roy Kapoor, Shraddha Kapoor"
},
{
  name: "Gallan Goriyan ",
  path: "music/29.mp3",
  img: "img/img4.jpg",
  singer: "Dhvani Bhanushali"
 },
 {
  name: "Mast Nazron Se ",
  path: "music/30.mp3",
  img: "img/img5.jpg",
  singer: "Jubin Nautiyal, Bhusan K"
 },
 {
 name: "Yaad Piya ki Aane Lagi",
 path: "music/31.mp3",
 img: "img/img6.jpg",
 singer: "Divya Khosla Kumar, Neha Kakkar"
 },
 {
 name: "Zaalima Coca Cola",
 path: "music/32.mp3",
 img: "img/img7.jpg",
 singer: "Shreya Ghoshal"
 },
 {
  name: "Nights N Fights",
  path: "music/33.mp3",
  img: "img/img1.jpg",
  singer: "Asim Riaz "
},
{
  name: "Hum Bhi Nawab Hai",
  path: "music/34.mp3",
  img: "img/img2.jpg",
  singer: "Natwar Kumar"
},
{
  name: "Listen Up",
  path: "music/35.mp3",
  img: "img/img3.jpg",
  singer: "Mrunal Shankar "
},
{
  name: "Mainu Ishq Nai Karna",
  path: "music/36.mp3",
  img: "img/img4.jpg",
  singer: "Moin Sabri"
},
{
  name: "Tera Rahoon",
  path: "music/37.mp3",
  img: "img/img5.jpg",
  singer: "Amit Mishra "
},
{
 name: "Akhri Baar",
 path: "music/38.mp3",
 img: "img/img6.jpg",
 singer: "Arya"
},
{
 name: "Mujhe Ishq Hai Tujhi Se",
 path: "music/39.mp3",
 img: "img/img7.jpg",
 singer: "Jalraj "
},
{
 name: "Flex ",
 path: "music/40.mp3",
 img: "img/img1.jpg",
 singer: "Bali"
},
{
 name: "Juda Hojaye",
 path: "music/41.mp3",
 img: "img/img2.jpg",
 singer: "Amit Kumar"
},
{
 name: "Mahakaal Ki Mahakaali",
 path: "music/42.mp3",
 img: "img/img3.jpg",
 singer: "Hansraj Raghuwanshi "
},
{
 name: "Tujhe Dhunde Meri Jaan",
 path: "music/43.mp3",
 img: "img/img4.jpg",
 singer: "Asit Tripathy"
},
{
 name: "Parwah",
 path: "music/44.mp3",
 img: "img/img5.jpg",
 singer: "Neha Bhasin"
},
{
name: "Shayara",
path: "music/45.mp3",
img: "img/img6.jpg",
singer: "Goldboy"
},
{
name: "Saamna",
path: "music/46.mp3",
img: "img/img7.jpg",
singer: "Akasa "
},
{
name: "Jaane",
path: "music/47.mp3",
img: "img/img1.jpg",
singer: "Mitraz"
},
{
name: "Intezaar",
path: "music/48.mp3",
img: "img/img2.jpg",
singer: "Lucky Ali "
},
{
name: "Chehre Pe Tere",
path: "music/49.mp3",
img: "img/img3.jpg",
singer: "Raj Barman"
},
{
name: "Kyaa Guzri",
path: "music/50.mp3",
img: "img/img4.jpg",
singer: "Suyyash Rai "
},
{
name: "Ruh",
path: "music/51.mp3",
img: "img/img5.jpg",
singer: "Nikhita Gandhi"
},
{
name: "Zeher",
path: "music/52.mp3",
img: "img/img6.jpg",
singer: "Vicky Thakur"
},
{
name: "Maula",
path: "music/53.mp3",
img: "img/img7.jpg",
singer: "Ali Zafar"
},
{
name: "Yaara Tu Khuda Ban Gya Hai",
path: "music/54.mp3",
img: "img/img1.jpg",
singer: "Sachin Nagar"
},
{
name: "Dheemi Dheemi",
path: "music/55.mp3",
img: "img/img2.jpg",
singer: "Mitraz "
},
{
name: "Rab Kho Gaya",
path: "music/56.mp3",
img: "img/img3.jpg",
singer: "Tanmay Verma"
},
{
name: "Ooo Ooo ",
path: "music/57.mp3",
img: "img/img4.jpg",
singer: "Qaran"
},
{
name: "Ruhani",
path: "music/58.mp3",
img: "img/img5.jpg",
singer: "Prateek Gandhi"
},
{
name: "Qami",
path: "music/59.mp3",
img: "img/img6.jpg",
singer: "Sohil Khan"
},
{
name: "Shish Nawata Hoon",
path: "music/60.mp3",
img: "img/img7.jpg",
singer: "Jubin Nautiyal"
},
{
name: "Tu Zaroori Hai",
path: "music/61.mp3",
img: "img/img4.jpg",
singer: "Amaan Ali"
},
{
name: "Ilzaam Industry",
path: "music/62.mp3",
img: "img/img5.jpg",
singer: "Arjun Kanungo"
},
{
name: "Jo Mujhe Deewana Kar De",
path: "music/63.mp3",
img: "img/img6.jpg",
singer: "Tulsi Kumar"
},
{
name: "Humnava",
path: "music/64.mp3",
img: "img/img7.jpg",
singer: "Jivitesh Kharbanda"
},
{
  name: "Mere Mehboob",
  path: "music/65.mp3",
  img: "img/img1.jpg",
  singer: "Shibani Kashyap"
},
{
  name: "Lollipop",
  path: "music/66.mp3",
  img: "img/img2.jpg",
  singer: "Javed Ali"
},
{
  name: "Oh Bhai",
  path: "music/67.mp3",
  img: "img/img3.jpg",
  singer: "Rival Mob"
},
{
  name: "Heeriye",
  path: "music/68.mp3",
  img: "img/img4.jpg",
  singer: "Abhi Dutt"
},
{
  name: "Tu Laut Aa",
  path: "music/69.mp3",
  img: "img/img5.jpg",
  singer: "Yasser Desai"
},
{
 name: "Jaa Rahe Ho",
 path: "music/70.mp3",
 img: "img/img6.jpg",
 singer: "Yasser Desai"
},
{
 name: "Mama Mere Asli",
 path: "music/71.mp3",
 img: "img/img7.jpg",
 singer: "Dev Pagli"
},
{
 name: "Kamle",
 path: "music/72.mp3",
 img: "img/img1.jpg",
 singer: " Akasa"
},
{
 name: "Roz Raat",
 path: "music/73.mp3",
 img: "img/img2.jpg",
 singer: "Millind Gaba"
},
{
 name: "Toofan Kgf",
 path: "music/74.mp3",
 img: "img/img3.jpg",
 singer: "Sandesh Datta Naik"
},
{
 name: "Tere Saath Ho",
 path: "music/75.mp3",
 img: "img/img4.jpg",
 singer: "Tanishk Bagcgu"
},
{
 name: "Dafa Kar",
 path: "music/76.mp3",
 img: "img/img5.jpg",
 singer: "Hiral Viradia"
},
{
name: "Khwaab Khwaab",
path: "music/77.mp3",
img: "img/img6.jpg",
singer: "Sachet Tandon"
},
{
name: "Kudiyan Lahore Diyan",
path: "music/78.mp3",
img: "img/img7.jpg",
singer: "Harrdy Sandhu"
},
{
name: "Mast Nazron Se",
path: "music/79.mp3",
img: "img/img1.jpg",
singer: "jubin Nautiyal"
}


];


// All functions


// function load the track
function load_track(index_no){
	clearInterval(timer);
	reset_slider();

	track.src = All_song[index_no].path;
	title.innerHTML = All_song[index_no].name;	
	track_image.src = All_song[index_no].img;
    artist.innerHTML = All_song[index_no].singer;
    track.load();

	timer = setInterval(range_slider ,1000);
	total.innerHTML = All_song.length;
	present.innerHTML = index_no + 1;
}

load_track(index_no);


//mute sound function
function mute_sound(){
	track.volume = 0;
	volume.value = 0;
	volume_show.innerHTML = 0;
}


// checking.. the song is playing or not
 function justplay(){
 	if(Playing_song==false){
 		playsong();

 	}else{
 		pausesong();
 	}
 }


// reset song slider
 function reset_slider(){
 	slider.value = 0;
 }

// play song
function playsong(){
  track.play();
  Playing_song = true;
  play.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>';
}

//pause song
function pausesong(){
	track.pause();
	Playing_song = false;
	play.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
}


// next song
function next_song(){
	if(index_no < All_song.length - 1){
		index_no += 1;
		load_track(index_no);
		playsong();
	}else{
		index_no = 0;
		load_track(index_no);
		playsong();

	}
}


// previous song
function previous_song(){
	if(index_no > 0){
		index_no -= 1;
		load_track(index_no);
		playsong();

	}else{
		index_no = All_song.length;
		load_track(index_no);
		playsong();
	}
}


// change volume
function volume_change(){
	volume_show.innerHTML = recent_volume.value;
	track.volume = recent_volume.value / 100;
}

// change slider position 
function change_duration(){
	slider_position = track.duration * (slider.value / 100);
	track.currentTime = slider_position;
}

// autoplay function
function autoplay_switch(){
	if (autoplay==1){
       autoplay = 0;
       auto_play.style.background = "rgba(255,255,255,0.2)";
	}else{
       autoplay = 1;
       auto_play.style.background = "#148F77";
	}
}


function range_slider(){
	let position = 0;
        
        // update slider position
		if(!isNaN(track.duration)){
		   position = track.currentTime * (100 / track.duration);
		   slider.value =  position;
	      }

       
       // function will run when the song is over
       if(track.ended){
       	 play.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
           if(autoplay==1){
		       index_no += 1;
		       load_track(index_no);
		       playsong();
           }
	    }
     }