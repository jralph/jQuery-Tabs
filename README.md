jQuery-Tabs
===========

A simple jQuery html tab system. 

Usage
-----

Using the tabs plugin is nice and simple.

```html
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>A Document</title>
</head>
<body>
    
<!--
Note: Use of an id is not required. You could use a class, or 
even a data attribute, such as data-tabs.
-->
<ul id="tabs">
    
    <!-- The data-tab attribute specifies the ID of the tab to open when clicked. -->
    <li><a data-tab="#tab1" href="#">Tab1</a></li>
    <li><a data-tab="#tab2" href="#">Tab2</a></li>
    <li><a data-tab="#tab3" href="#">Tab3</a></li>

</ul>

<!-- data-tabs-default is provided to make sure that tab1 is loaded on start. -->
<div id="tab1" data-tabs-default>
    <p>This is tab1.</p>
</div>
<div id="tab2">
    <p>This is tab2.</p>
</div>
<div id="tab3">
    <p>This is tab3.</p>
</div>

<script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
<script src="tabs.js"></script>
<script>
    $(function() {
        $('#tabs a').tabs();
    });
</script>

</body>
</html>
```

With the above code, when a tab link is clicked, it will open the corresponding tab. The script will also close any other open tabs before opening the requested tab.

*Note: No CSS is requried, but you may wish to add a display:none to each of the tab div's to make sure that they are hidden while the page is loading. If not, the divs will be visible until the script is called.*

Settings
--------

Below you will find a list of the available settings for the plugin.

```js
{
    inAnimation: 'show',
    outAnimation: 'hide',
    speed: 200
}
```

### inAnimation ###

This setting provides the animation to use when bringing in a tab.

This could be set to `fadeIn`, `slideDown`, `show`, or any other jQuery animation function.

### outAnimation ###

The same as the inAnimation. This provides the animation to use when hiding a tab.

This could be set to `fadeOut`, `slideUp`, `hide`, or any other jQuery animation function.

### speed ###

This setting lets you set the speed of the animation (As long as the animation function supports a speed setting.).

This could be set to any numeric value, eg. `400`.

Setting Example
---------------

```html
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>A Document</title>
</head>
<body>
    
<!--
Note: Use of an id is not required. You could use a class, or 
even a data attribute, such as data-tabs.
-->
<ul id="tabs">
    
    <!-- The data-tab attribute specifies the ID of the tab to open when clicked. -->
    <li><a data-tab="#tab1" href="#">Tab1</a></li>
    <li><a data-tab="#tab2" href="#">Tab2</a></li>
    <li><a data-tab="#tab3" href="#">Tab3</a></li>

</ul>

<!-- data-tabs-default is provided to make sure that tab1 is loaded on start. -->
<div id="tab1" data-tabs-default>
    <p>This is tab1.</p>
</div>
<div id="tab2">
    <p>This is tab2.</p>
</div>
<div id="tab3">
    <p>This is tab3.</p>
</div>

<script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
<script src="tabs.js"></script>
<script>
    $(function() {
        $('#tabs a').tabs({
            inAnimation: 'fadeIn',
            outAnimation: 'fadeOut',
            speed: 250
        });
    });
</script>

</body>
</html>
```