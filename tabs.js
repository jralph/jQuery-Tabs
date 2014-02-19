/**
 * Tabs jQuery Plugin
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
            speed: 200
        };

    /**
     * Create {object} element The jQuery element object.
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
     * @return {void}
     */
    tabs.prototype.init = function() {
        this.hideAll();
        this.showDefault();
        this.addClickEvent();
    };

    /**
     * Method to hide all tabs, open or not.
     * @return {void}
     */
    tabs.prototype.hideAll = function() {
        $(this.element).each(function() {
            var tabContent = $(this).data('tab');

            $(tabContent).hide();
        });
    };

    /**
     * Method to show any default 'open' tabs.
     * @return {void}
     */
    tabs.prototype.showDefault = function() {
        $('[data-tabs-default]').show();
    };

    /**
     * Method to add the click event to the selected elements.
     * @return {void}
     */
    tabs.prototype.addClickEvent = function() {
        var _this = this;
        $(this.element).each(function() {
            $(this).click(function() {
                _this.runClick(this);
                return false;
            });
        });
    };

    /**
     * Method to run when the click event is fired.
     * @param  {object} element The element clicked on.
     * @return {void}
     */
    tabs.prototype.runClick = function(element) {
        var tab = $(element).data('tab');

        this.hideOpen(tab);
        this.showTab(tab);
    };

    /**
     * Method to hide any other open tabs apart from the clicked on tab.
     * @param  {object} tab The clicked on tab to open.
     * @return {void}
     */
    tabs.prototype.hideOpen = function(tab) {
        var _this = this;
        $('[data-tab-content]:not('+tab+')').each(function() {
            if ($(this).is(':visible')) {
                $(this)[_this.options.outAnimation](_this.options.speed);
            }
        });
    };

    /**
     * Method to show the requested tab.
     * @param  {object} tab The requeted tab.
     * @return {void}
     */
    tabs.prototype.showTab = function(tab) {
        $(tab).delay(this.options.speed)[this.options.inAnimation](this.options.speed);
    };

    /*
    Register the plugin.
     */
    $.fn[pluginName] = function(options) {
        if(!$.data(this, 'plugin_' + pluginName)) {
            $.data(this, 'plugin_' + pluginName, new tabs(this, options));
        }
        return this;
    };

})(jQuery, document, window);