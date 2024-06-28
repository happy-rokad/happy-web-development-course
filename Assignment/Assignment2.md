# CSS and CSS3

#### Question 1: What are the benefits of using CSS?

* CSS used to style and layout of web pages.
* With the use of css we can give style (like color, font size, font family etc..) to the webpage.
* we can make the webpage attractive with css.
* With css, the webpage can be maintained with less effort (like if there are changes in the line, only the same line has to be changed).
* css takes less time for webpage loading.
* With css we can also put video, audio, pictures in the webpage.


<br>


#### Question 2: What are the disadvantages of CSS?

* The main disadvantage of css is that when you make changes in the code, you have to check in the browser every time whether the changes have happened or not.. because css looks a little different in all browsers.
* css depends on the browser...  same css is supported in some browsers and not supported in some browsers.
* Even if you forget to write ( ;  ,  units( px, % ) ) in css code, then css doesn't work.


<br>


#### Question 3: What is the difference between CSS2 and CSS3?

#### CSS2
* Responsive design (media query) is not supportable.
* border-box property doesn't support.
* animation & transform property not supported.
* used some selected fonts used.
* set of standard color & used color schemes only.
* pseudo element (::) & pseudo class (:) are not working.

#### CSS3
* Responsive design (media query) is supportable.
* border-box property does support.
* animation & transform property supported.
* used google fonts & special fonts.
* good collection colors, HSL, RGBA, HSLA & gradient colors.
* pseudo element (::) & pseudo class (:) are working.

<br>

#### Question 4: Name a few CSS style components
* CSS style components used to a interactive web page design.
* Css style components used property & it's value.
* syntax: property-name: value;
* example : color, background-color, background-image, font-size, font-family, border, border-radius...etc
```
p{
    color: blue;
    font-size: 16px;
    padding: 10px 10px;
    border: 1px solid black;
}
```

<br>


#### Question 5: What do you understand by CSS opacity?
* Opacity describe the Transparency of the Element.
* Text Opacity value: 0.0 to 1.0 or 0% to 100%.
* lower value is 0.0 or 0%
* higher value is 1.0 or 100%
* background color opacity value 0% to 100%
* background color opacity down then text opacity also down.
* background color opacity high then text opacity also high.
```
img {
  opacity: 0.5; (50% opacity)
}

background: rgba(76, 175, 80, 0.3) (30% opacity)
```

<br>

#### Question 6: How can the background color of an element be changed?
* Syntex : background-color: color_name;
```
background-color: red;
```
* 3 types of color used in background-color: RGB, HSL, HSLA
* RGB color used 3 colors (red, green, blue) value
```
background-color: rgb(163, 158, 158);
```
* HSL color used (hue, saturation, lightness)
```
background-color:hsl(147, 50%, 47%);
```
* HSLA color used (hue, saturation, lightness, alpha)
```
background-color:hsla(120,100%,25%,0.3);
```

<br>


#### Question 7: How can image repetition of the backup be controlled?
* background-repeat property that will help us to control the repetition of the image.
* background-repeat property in CSS is used to repeat the background image both horizontally and vertically.
```
background-repeat: repeat;
background-repeat: repeat-x;
background-repeat: repeat-y;
```
* background-repeat property in CSS is used to not repeat the background image.
```
background-repeat: no-repeat;
```

<br>


#### Question 8: What is the use of the background-position property?
* The background-position CSS property sets the initial position for each background image. 
* multiple position used
* example: background-position: value;
* value used in px, %
* horizontal or vertical position also used.
* top | bottom | left | right | center  position mainly used.

```
background-position: top;
background-position: 20% 50%;
background-position: top center;
background-position: bottom 20px left 10px;
```


<br>



#### Question 9: Which property controls the image scroll in the background?
* background-attachment property controls the image scroll in the background.
* example: background-attachment:scroll
* background image's position is fixed within the viewport, or scrolls with its containing block.
* The image will remain fixed in its position until the block scrolls.. and then when the block scrolls, the image will also move with it.


<br>



#### Question 10: Why should background and color be used as separate properties?
* background color property used to specify color of an element.
* background-image property used to one or more images of an element.
* gradient color value used in background-image property.
* example: 

```
background-color: red;

background-image: linear-gradient(45deg, red, orange);
background-image: url('image.png'); 
```

<br>



#### Question 11: How to center block elements using CSS1?
* CSS1 in margin property used to block element automatically center.
* margin value 'auto' then block elements are center.
* Another way to  `<center>` tag used to block element center.
* now not working  `<center>` tag because it's new version (CSS3) is available.


<br>


#### Question 12: How to maintain the CSS specifications?
* The CSS specifications are maintained by the World Wide Web Consortium (W3C) & HTTP/HTTPS.
* The developer's work is to write the code, the browser's work is to run the code. And the work of maintaining that browser is w3c.


<br>


#### Question 13: What are the ways to integrate CSS as a web page?
* CSS integrated in 3 ways :
* 1. Internal CSS
* 2. Inline CSS
* 3. External CSS

1. Internal CSS: It is used any css style `<style>` `</style>` tag in `<head>` `</head>` part of an HTML file.
2. Inline CSS: It is used any css style in a single line in a `<body>` `</body>` part of an HTML file.
3. External CSS: It is used any css style then make some css file & attach it's css file link in `<head>` `</head>` part of an HTML file.


<br>


#### Question 14: What is embedded style sheets?
* Embedded style means Internal style.
* It is declared style in `<head>` `</head>` element of an HTML Document.
* The benefit of embedded style sheets is that they load immediately with the page itself.
* this style can be benefit from good download speed & it's performance.


<br>


#### Question 15: What are the external style sheets?
* create separate css file & then create css file link attach in the head section of the HTML document.
* Multiple web page design the same css file link access the stylesheet.. it is external style sheet benefit.
* External files occupy less space and code runs faster.

```
<!-- Make Assignment.css external saprated file & it's link attached in HTML document -->

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
    <title>Team Flow</title>
    
    <link rel="stylesheet" href="Assignment.css"> 

</head>
```


<br>



#### Question 16: What are the advantages and disadvantages of using external style sheets?
* External style sheet :  create separate css file & then create css file link attach in the head section of the HTML document.

##### Advantages:
*  Apply same style in multiple web pages (Global styling).
*  Less consuming Time & fast run program of web pages.
*  Responsive web page design for different devices.
*  Reduce risk of Inconsistency.
  
##### Disadvantages :
* some times global styling used then override style in elements & tags of HTML.
* same class or id used then also override stle is autometically apply that is the limited control.
* Sometimes when we load a webpage, the html page comes but the style given to it doesn't come immediately...that is, external css takes time to load.


<br>



#### Question 17: What is the meaning of the CSS selector?
* Selector is used to style global, specific attribute, specific element & specific tag & particular any class or id.
* many selectors are used like:
* universal selector (`*`)
* descendant selector ( `.parent .child` )
* combinator selector ( `.parent.child` )
* group selector ( `.parent, child` )
* adjacent sibling ( `.parent + .child` )
* general sibling ( `.parent ~ .child` )
* child selector ( `.child` )


<br>


#### Question 18: What are the media types allowed by CSS?
* The @media CSS at-rule can be used to apply part of a style sheet based on the result of one or more media queries.
* @media used to responsive web page design for all device like laptop screen, tablet screen, mobile screen.
* mainly 2,3 media types used in css
* 1. all (suitable for all device)
* 2. screen (for all device & color computer screen)
* 3. print (documents viewed on screen in print preview mode)
* & other are tv, handheld, aural, braille, embossed, tty, projection.
* mead types are case-sensitive.
* example:

``` 
@media all {
    div{
        background-color: lightblue;
        font-family: 'poppins', 'serif';
    }

    p{
        color: black;
        text-align: center;
    }
}
```


<br>



#### Question 19: What is the rule set?
* selectors and declaration block are together it's called css rule set.
* selector are 2 types used: id selector (`#`) & class selector (`.`)
* multiple property & it's values used are in a declaration block.
* syntax:
``` 
selector{ 
declaration block  ( property : value );
}
```

``` 
.parent, .child{ 
    background-color: red;
    font-size: 16px;
}
```