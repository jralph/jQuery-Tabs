jQuery-Tabs
===========

A simple jQuery html tab system. This plugin provides a simple, very thin, alternative to jQuery UI's tabs. All without needing to include jQUery UI anywhere.

This plugin is made to be lightweight, therefore it does not have a million confusing configuration options. Only three simple ones. 

If you wish to implement features similar to the jQuery UI tabs (eg, ajax loading, sortable tabs and so on), this should be easily doable using some more jQuery on your end.

Bower Install (Optional)
------------------------

This jQuery plugin has been setup to work with bower.

To install with bower, run the following bower command.

`bower install jQuery-Tabs`

Or add the package to your dependencies in  your bower.json file.

```js
"dependencies": {
    ...
    "jQuery-Tabs": "jQuery-Tabs#1.0.0"
    ...
}
```

Then, in your project folder, run `bower install` to pull down the package.

*Note: You can also use the git repository `jralph\jQuery-Tabs` instead of the direct `jQuery-Tabs` package.*

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
<div id="tab1" data-tabs-default data-tab-content>
    <p>This is tab1.</p>
</div>
<div id="tab2" data-tab-content>
    <p>This is tab2.</p>
</div>
<div id="tab3" data-tab-content>
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

With the above code, when a tab link is clicked, it will open the corresponding tab. The script will also close any other open tabs before opening the requested tab. When the tab is opened, a class of `.tab-active` will be added to the currently open tab link.

*Note: No CSS is requried, but you may wish to add a display:none to each of the tab div's to make sure that they are hidden while the page is loading. If not, the divs will be visible until the script is called.*

Settings
--------

Below you will find a list of the available settings for the plugin.

```js
{
    inAnimation: 'show',
    outAnimation: 'hide',
    speed: 200,
    activeClass: 'tab-active'
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

### activeClass ###

The class to add to the currently active tab link. This should not contain a `.` or `#` as the setting only supports classes.

This could be set to `active`, `current-tab`, or any other class of your choice.

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
    <!-- The currently active tab link will recieve the .current-tab class from settings. -->
    <li><a data-tab="#tab1" href="#">Tab1</a></li>
    <li><a data-tab="#tab2" href="#">Tab2</a></li>
    <li><a data-tab="#tab3" href="#">Tab3</a></li>

</ul>

<!-- data-tabs-default is provided to make sure that tab1 is loaded on start. -->
<div id="tab1" data-tabs-default data-tab-content>
    <p>This is tab1.</p>
</div>
<div id="tab2" data-tab-content>
    <p>This is tab2.</p>
</div>
<div id="tab3" data-tab-content>
    <p>This is tab3.</p>
</div>

<script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
<script src="tabs.js"></script>
<script>
    $(function() {
        $('#tabs a').tabs({
            inAnimation: 'fadeIn',
            outAnimation: 'fadeOut',
            speed: 250,
            activeClass: 'current-tab'
        });
    });
</script>

</body>
</html>
```

Future Additions
----------------

- ~~Addd `active` or `tab-active` class to currently open tab link and tab.~~
- Add oncomplete callback option.
- Add `on` option to set what to open the tab on. (eg, click, mouseover, custom event ect.)
- ~~Add `minified` version of `tabs.js`~~
- Add `on` delay time. (eg, delay for 200ms before loading new tab on hover.)
