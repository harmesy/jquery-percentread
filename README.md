# jQuery Percent Read #

jQuery-PercentRead is a simple jQuery plugin that lets you show your user how much of your page (or content) they've read.

## Usage ##
Call the `$.fn.percentRead()` function on the DOM object that you want to use to report the status to the user.
You can pass in an options hash to customize certain settings. At the moment the only two options are `template` and `targetArea`.
* `template`: How you want the output to be rendered. You can pass in a string which will be appended, or you can pass in a function, which accepts the percent parameter, and should return a string version of what you want shown. If a string is not passed in, or returned from the function then only the percent will be returned. ex. `template: function(percent) { return percent + "%" }`. Defaults to `undefined`.
* `targetArea`: When you want to show the user how much of a particular element they've scrolled through, rather than the entire document. For example, with a blog or news site you could set it to show the percentage of the article that they've scrolled through. ex. `targetArea: "#post"`. Defaults to `document`.

## Testing ##
I've only tried this out on Chrome (27.0.1453.110), Safari (6.0.5), Firefox (21.0) all on my Macbook Air running OS X 10.8.4. I'm open to hearing from anyone else who has tried it. I'm sure there are likely cross-browser/mobile issues that I'm not aware of at this point.

## ToDo ##
* Add actual automated testing. 
* Add minified version. 
* Create better looking demos.
* Add `minimumLength` option
* Add callbacks that can be executed when particular percentages are reached (ex. to modify the look of the status)

## License ##
MIT. See LICENSE.txt for details.