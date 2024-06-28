# HTML5

#### Question 1: What are the new tags added in HTML5?

* HTML5 means hyper text markup language 5.
* 5 means HTML fifth version.
* HTML latest version running now is HTML5.
* new tags are:
```
    <header> </header>
    <nav> </nav>
    <footer> </footer>
    <section> </section>
    <mark> </mark>
    <aside> </aside>
    <canvas> </canvas>
    <svg> </svg>
    <audio> </audio>
    <video> </video>
```

<br>


#### Question 2: How to embed audio and video in a webpage?

##### Audio :

* Audio means some type of music & songs without any pictures.
* Audio file support formate like - MP3, WAV
* Audio file use `<audio>` tag.
* `<audio>` tag write in `<HTML>` `<body>` part.
* Attributes used: controls, loop, autoplay, muted.

```
    <audio src="images/audio file.mp3" controls loop autoplay style="border: 2px solid darkgray; border-radius: 50px;"> </audio>
```

##### Video :

* Video means some type of music & songs with any pictures.
* Video file support formate like - MP4, WebM
* Video file use `<video>` tag.
* `<video>` tag write in `<HTML>` `<body>` part.
* Attributes used: controls, loop, autoplay, muted.

```
    <video src="images/video file.mp4" controls muted autoplay loop style="background-repeat: no-repeat; height: 100%; width: 500px;"></video>
```

<br>

#### Question 3: Semantic element in HTML5?

* Semantic elements are clearly describe their meaning in a human & machine readable way.
* Semantic tags are usable to both the developers and browsers.
* Semantic tags are :

```
    <header> </header>
    <nav> </nav>
    <form> </form>
    <mark> </mark>
    <aside> </aside>
    <article> </article>
    <footer> </footer>
```


<br>

#### Question 4: Canvas and SVG tags.

##### SVG

* SVG : Scalable Vector Graphics.
* `<svg>` tag define container of SVG graphics.
* SVG method for drawing path, boxes, circle & graphic images formate like JPG, PNG, GIF.
* SVG image quality is high.
* SVG image can create & edit with any text editor like VS Code, Sublime...etc
* SVG use geometric shapes to render graphics.

```
    <svg>
        <rect width="300" height="100" style="fill:navy;"></rect>
    </svg>
``` 


##### CANVAS

* Canvas: HTML element is used to draw graphic on the scripting (javascript)language.
* Canvas use a script to actually draw the graphics.
* Canvas use pixels.