# dtai photography website instructions

## Step 1: Uploading new photos

To add photos, navigate to the /img folder and click
"Upload files" in the top-left corner. Upload files from your local
PC to the server in this way. Note that the images will not appear on
the page until the appropriate html code has been added.

## Step 2: Adding HTML

There are 2 sections to edit upon uploading a photo.

### Step 2.1: Portfolio Grid Section

Scroll down until you encounter the comment

```html
<!--Portfolio grid section ends here. All code should be added above-->
```

which is located on line 163 at the time of writing and in the image below.

![](./readme_img/portfolio_grid.png)

Beginning on the line directly above the comment (line 162 in the above image),
insert the following code snippet by copying and pasting:

```html
<div class="col-md-4 col-sm-6 portfolio-item food">
     <a href="#portfolioModalYOUR_NUMBER" class="portfolio-link" data-toggle="modal">
         <div class="portfolio-hover">
             <div class="portfolio-hover-content">
                 <i class="fa fa-search-plus"></i>
             </div>
         </div>
         <img src="img/YOUR_PIC.jpg" class="img-responsive" alt="">
     </a>
</div>
```

where there are two variables to replace, **YOUR_NUMBER** and **YOUR_PIC**.
For the first variable, insert a number which has not been used previously.
At the time of writing, the numbers 1-9 have been used and therefore a logical
choice would be **YOUR_NUMBER** = 10. Replace the text with your chosen number,
which is 10 in this example, and remember it.

For the **YOUR_PIC** variable, replace the text with the file name of the
image you uploaded in Step 1. (The above code snippet assumes the file format
is jpg but you can change the file extension if necessary.)

### Step 2.2: Portfolio Modals Section
