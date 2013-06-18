# jQuery Percent Read #

jQuery-PercentRead is a simple jQuery plugin that lets you show your user how much of your page (or content) they've read.

## Usage ##
Call the `$.fn.percentRead()` function on the DOM object that you want to use to report the status to the user.
You can pass in an options hash to customize certain settings. At the moment the only two options are `template` and `targetArea`.
* `template`: Pass in a string template of how you want the status to be shown. Anything between the `{{` and `}}` will be replaced with the current percentage. ex. `"You've read {{per}}%"`. Defaults to `"{{percent}}%"`
* `targetArea`: When you want to show the user how much of a particular element they've scrolled through, rather than the entire document. For example, with a blog or news site you could set it to show the percentage of the article that they've scrolled through. ex. `targetArea: "#post"`. Defaults to `document`.

## Testing ##
I've only tried this out on Chrome (27.0.1453.110), Safari (6.0.5), Firefox (21.0) all on my Macbook Air running OS X 10.8.4. I'm open to hearing from anyone else who has tried it. I'm sure there are likely cross-browser/mobile issues that I'm not aware of at this point.

## ToDo ##
Add actual automated testing. Add minified version. Create better looking demos.

## License ##
MIT. See LICENSE.txt for details.