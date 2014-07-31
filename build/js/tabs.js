/**
 * Tabs jQuery Plugin
 * 
 * @desc This jQuery plugin provides lightweight tabbing functionality and requires jquery.
 * @author Joseph Ralph <joe@josephralph.co.uk>
 * @uri https://github.com/jralph/jQuery-Tabs/
 * @author_uri http://josephralph.co.uk
 *
 * Example:
 * <code>
 *     <div data-tabs>
 *         <a data-tab="#tab1" href="">Tab 1</a>
 *         <a data-tab="#tab2" href="">Tab 2</a>
 *     </div>
 *     <div data-tab-content data-tabs-default id="tab1">
 *         <!-- Tab1 Content -->
 *     </div>
 *     <div data-tab-content id="tab2">
 *         <!-- Tab2 Content -->
 *     </div>
 *
 *     <script>
 *         $(function() {
 *             $('[data-tabs] a').tabs();
 *         });
 *     </script>
 * </code>
 */
(function($, document, window, undefined) {
    
    /**
     * Set plugin scope variables.
     */
    var pluginName = 'tabs',
        defaults = {
            inAnimation: 'show',
            outAnimation: 'hide',
            speed: 200,
            activeClass: 'tab-active',
            complete: function(element, tab) {

            },
            watchHash: true,
            defaultFromHash: true
        };

    /**
     * Create {object} element The jQuery element object.
     *
     * @param  {object} options Any options passed to the plugin.
     * @return {void}
     */
    function tabs(element, options) {
        this.element = element;
        this.selector = element.selector;

        this.options = $.extend({}, defaults, options);

        this._defaults = defaults;
        this._name = pluginName;

        this.init();
    }

    /**
     * Method to initialize the plugin.
     *
     * @return {void}
     */
    tabs.prototype.init = function() {
        this.hideAll();
        this.showDefault();
        this.addClickEvent();

        if (this.options.watchHash) {
            this.watchURLHash();
        }
    };

    /**
     * Method to hide all tabs, open or not.
     *
     * @return {void}
     */
    tabs.prototype.hideAll = function() {
        var _this = this;
        $(this.element).each(function() {
            var tabContent = $(this).data('tab');

            $(tabContent).hide();
            _this.removeActiveClass(this);
        });
    };

    /**
     * Method to show any default 'open' tabs.
     *
     * @return {void}
     */
    tabs.prototype.showDefault = function() {
        var defaultTab = $('[data-tabs-default]'),
            id = defaultTab.attr('id'),
            defaultLink = $('[data-tab="#'+id+'"]');

        if (this.options.defaultFromHash && this.isTab(window.location.hash)) {
            var hashLink = $('[data-tab="'+window.location.hash+'"]');
            $(window.location.hash).show();
            this.addActiveClass(hashLink);
        } else {
            $(defaultTab).show();
            this.addActiveClass(defaultLink);
        }
    };

    /**
     * Method to add the active class to the currently active tab link.
     *
     * @param {object} element The element to add the class to.
     */
    tabs.prototype.addActiveClass = function(element) {
        $(element).addClass(this.options.activeClass);
    };

    /**
     * Method to remove the active class from a given element/selector.
     *
     * @param  {object} element The element/selector.
     * @return {void}
     */
    tabs.prototype.removeActiveClass = function(element) {
        $(element).removeClass(this.options.activeClass);
    };

    /**
     * Method to add the click event to the selected elements.
     *
     * @return {void}
     */
    tabs.prototype.addClickEvent = function() {
        var _this = this;
        $(this.element).each(function() {
            $(this).click(function() {
                var tab = _this.runClick(this);
                _this.runComplete(this, tab);
                return false;
            });
        });
    };

    /**
     * If a hash value is a tab on the page, load it by default.
     *
     * @return {void}
     */
    tabs.prototype.watchURLHash = function() {
        var _this = this;
        $(window).on('hashchange', function() {
            if (_this.isTab(window.location.hash)) {
                _this.hideOpen(window.location.hash);
                _this.showTab(window.location.hash);
                _this.addActiveClass($('[data-tab="'+window.location.hash+'"]'));
            }
        });
    };

    tabs.prototype.isTab = function(selector) {
        var element = $(selector),
            tab_content = element.attr('data-tab-content');

        if (tab_content === typeof undefined || tab_content === false) {
            return false;
        } else {
            return true;
        }
    };

    /**
     * Run the complete callback when a click has been registered and the
     * tab has been shown.
     *
     * @param  {object} element The element clicked on.
     * @param  {object} tab     The tab being loaded.
     * @return {void}
     */
    tabs.prototype.runComplete = function(element, tab) {
        if (jQuery.isFunction(this.options.complete)) {
            this.options.complete(element, tab);
        }
    };

    /**
     * Method to run when the click event is fired.
     *
     * @param  {object} element The element clicked on.
     * @return {void}
     */
    tabs.prototype.runClick = function(element) {
        var tab = $(element).data('tab');

        this.removeActiveClass(this.element);
        this.addActiveClass(element);

        this.hideOpen(tab);
        this.showTab(tab);

        return tab;
    };

    /**
     * Method to hide any other open tabs apart from the clicked on tab.
     *
     * @param  {object} tab The clicked on tab to open.
     * @return {void}
     */
    tabs.prototype.hideOpen = function(tab) {
        var _this = this;
        $('[data-tab-content]:not('+tab+')').each(function() {
            if ($(this).is(':visible')) {
                var id = $(this).attr('id');
                $(this)[_this.options.outAnimation](_this.options.speed);
                _this.removeActiveClass($('[data-tab="#'+id+'"]'));
            }
        });
    };

    /**
     * Method to show the requested tab.
     *
     * @param  {object} tab The requeted tab.
     * @return {void}
     */
    tabs.prototype.showTab = function(tab) {
        $(tab).delay(this.options.speed)[this.options.inAnimation](this.options.speed);
    };

    /**
     * Register the plugin.
     *
     * @param  {object} options Any custom options to add to the plugin.
     * @return {this}
     */
    $.fn[pluginName] = function(options) {
        if(!$.data(this, 'plugin_' + pluginName)) {
            $.data(this, 'plugin_' + pluginName, new tabs(this, options));
        }
        return this;
    };

})(jQuery, document, window);
