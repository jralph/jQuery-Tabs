jQuery-Tabs
===========

A simple jQuery html tab system. This plugin provides a simple, very thin, alternative to jQuery UI's tabs. All without needing to include jQUery UI anywhere.

This plugin is made to be lightweight, therefore it does not have a million confusing configuration options. Only three simple ones. 

If you wish to implement features similar to the jQuery UI tabs (eg, ajax loading, sortable tabs and so on), this should be easily doable using some more jQuery on your end.

Contents
--------

- [Standard Install](#standard-install)
- [Bower Install](#bower-install-optional)
- [Usage](#usage)
- [Settings](#settings)
    - [inAnimation](#inanimation)
    - [outAnimation](#outanimation)
    - [speed](#speed)
    - [activeClass](#activeclass)
    - [complete](#complete)
- [Settings Example](#settings-example)
- [Future Additions](#future-additions)

Standard Install
----------------

Not looking to use Bower at all? Then you can simply use this plugin by downloading the `tabs.js` or `jquery.tabs.min.js` file and adding it to your project in the footer. (Or header if you prefer.)

```
<script src="/path/to/jquery.tabs.min.js"></script>
```

If you have downloaded the full repository (using Download ZIP to the right) you will need to set the path to the dist directory for the minified version or to the build directory for the non-minified version.

```
<script src="/jQuery-Tabs/dist/js/jquery.tabs.min.js"></script>
<script src="/jQuery-Tabs/build/js/tabs.js"></script>
```

Bower Install (Optional)
------------------------

This jQuery plugin has been setup to work with bower.

To install with bower, run the following bower command.

`bower install jQuery-Tabs`

Or add the package to your dependencies in  your bower.json file.

```js
"dependencies": {
    ...
    "jQuery-Tabs": "jQuery-Tabs#1.2.0"
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
    activeClass: 'tab-active',
    complete: function(element, tab) {
        // code to run on tab click complete
    },
    animationComplete: function(tab) {
        // code to run on show animation completion
    },
    watchHash: true,
    defaultFromHash: true
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

### complete ###

The callback function to run just after a tab link has been clicked and the tab loaded. This should always be a function, and the function can accept the paramaters 
of `element` and `tab`. 

The `element` is the link element that was clicked on.

The `tab` is the tab element that has been shown.

### animationComplete ###

Similar to the complete option. This is a callback function to run on completion of the tab inAnimation. This should always be a function and can accept the paramater `tab`.

The `tab` paramater is the tab element that has been shown.

### watchHash ###

A simple true or false variable that defines if the plugin should watch the url for hash changes to trigger tabs.

This will trigger a tab to open as if the corresponding link was clicked on.

### defaultFromHash ###

A simple true of false to enable the plugin to open a default tab based on the url hash, if set.

This can be helpful if you wish to redirect back to a page with a specific tab open, just pass the tab id into the url `http://example.com/mypage.html#tab1` and the corresponding tab will be open when the page has loaded.

Settings Example
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
            activeClass: 'current-tab',
            complete: function(element, tab) {
                console.log(element);   // Would output the jQuery element for the data-tab clicked.
                console.log(tab);       // Would output the jQuery element for the data-tab-content shown.
            }
        });
    });
</script>

</body>
</html>
```

Future Additions
----------------

- ~~Addd `active` or `tab-active` class to currently open tab link and tab.~~
- ~~Add oncomplete callback option.~~
- ~~Add `minified` version of `tabs.js`~~
- ~~Create as grunt package to ease building procedure and minifying.~~
- ~~Add option to set default tab via # paramater in url.~~
- Enable usage with HTML5 history api.
