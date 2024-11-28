# HTML

## HTML TAGS

- **a** : Anchor tag is used to create hyperlinks. when clicked on the anchor tag, it will redirect to the specified URL. it has href attribute to specify the URL. it has target attribute to specify where to open the URL. it has download attribute to specify the file name to download.

```html
<a href="example.com" download="theNewFileName.pdf" target="_blank" > </a>
```

- abbr : Abbreviation tag, it is recommended to specify full form next to it. it is used to specify the full form of the abbreviation.
- address : doesnt effect too much but rather for semantic purposes
- area : it is used to define the clickable area in an image map. it has shape and coords attributes to specify the shape and coordinates of the clickable area. just like svg it takes various shape and cordinates to define the clickable area.
- article : it is used to define an article in a document. it is used to define a self-contained content. as it specifies in docs while it supposed to be filled with such content that can be distributed independently. independently it can make a sense and valuable content.
- aside : its used to contain such content that might be not directly related to whole page but rather a small potion of page, but sometimes i and other use it for sidebar content, following(sticky element) index.
- **audio** : for audio content but there is another more recommened way to use it by wrapping it with figure tag hence we can specify figcaption such as label, audio and a anhor tag to download the audio file. audio file also takes special attributes such as autoplay, loop, controls, muted, preload, src to control playback of audio.
- b : baseline tag to draw attention? just make text bold.
- base : base tag is used to specify the base URL for all relative URLs in a document. hence whatever content gonna be loaded will load from the domain specified in base tag
- *bdi* : basically what it does is, it will take it content and reverse the position with it's content, especially for **RTL** languages. like ARABIC and URDU, FARSI
- bdo : i dont understand but seems like it something related with storing text in memory in reverse but renders in normal way. it is due to language which require special way to store text in RAM or storage.
- blockquote : it is used to add some content from another source. it is used to specify the long quotation. especially if its from other sources... also it take special attribute cite to specify the source of the quote.
- body : it is used to define the body of the document. it is used to contain all the content of the document. it is used to specify the main content of the document. it supposed to be filled with content that is visible to the user. unlike head tag...
- br : it insert line break in the document. it is a self closing tag.
- button :
- **canva** : canvas tag is used to create a drawable content in html docs it mostly done by using javascript to get it done.
- caption : caption for table , needed to be nested inside table tag.
- cite : it used to where source is.
- code : to fill it with code snippets. it demonstrate codes also it has some styling to make code stand out.
<!-- TODO: -->

## META TAGS

meta tag is used to specify the document/page information which might required but browser or search engine to understand the content of the page/document.
it is a self closing tag and tags attribute to do the job, main two tags are well know for is name and content.
most of the time used to define charset of the page encoding and viewport of the page...

```html
<head>
  <meta charset="UTF-8">
  <meta name="description" content="Free Web tutorials">
  <meta name="keywords" content="HTML, CSS, JavaScript">
  <meta name="author" content="John Doe">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
```

example copied from w3schools

infact meta tag be used to create realtime application just by using

```html
<meta http-equiv="refresh" content="1">
```

some name-attribute are:

- keywords
- description
- author
- http-equi=refresh
- viewport
-

source refered : devdocs.io, mdn docs and w3schools.
